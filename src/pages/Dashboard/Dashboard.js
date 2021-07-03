import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { get_all_user_data } from "../../api/server";
import NoteCard from "../../componments/NoteCard";
import Grid from "@material-ui/core/Grid";
import CircularProgress from '@material-ui/core/CircularProgress';

function Dashboard({ refeash }) {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const handleRefreshData = async () => {
    setIsLoading(true);
    await get_all_user_data()
      .then((data) => data.data)
      .then((data) => {
        setUserData(data);
      });
    setIsLoading(false);
  };
  useEffect(handleRefreshData, [refeash]);

  return (
    <Container>
      <Grid container spacing={3} style={{ width: "100%" }}>
        {userData.map((user) => (
          <Grid item key={user.uid} sm={3}>
            <NoteCard user={user} />
          </Grid>
        ))}
      </Grid>
      {isLoading && <CircularProgress />}
    </Container>
  );
}

export default Dashboard;
