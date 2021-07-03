import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import DataTable from "../../componments/DataTable";
import { useLocation } from "react-router-dom";
import { get_profile } from "../../api/server";
import cols from "./columns";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  componments: {
    margin: theme.spacing(2),
  },
}));

function Profile() {
  const location = useLocation();
  const classes = useStyles();
  const [userProfile, setUserProfile] = useState(null);
  const [isLoadingData, setIsLoadingData] = useState(false);
  console.log(location);
  useEffect(async () => {
    setIsLoadingData(true);
    const query = new URLSearchParams(location.search);
    await get_profile(!!query.get("uid") ? query.get("uid") : 0)
      .then((data) => data.data)
      .then((data) =>
        data.map((data) => {
          data.id = data.qid;
          return data;
        })
      )
      .then((data) => {
        console.log(data);
        setUserProfile(data);
      });

    setIsLoadingData(false);
  }, [location.search]);

  return !!userProfile ? (
    <Container styles={{ height: "100%" }} className={classes.root}>
      <Typography variant="h5">{`${userProfile[0].submitter} 近期解題紀錄`}</Typography>
      <Paper>
        <DataTable
          rows={userProfile}
          cols={cols}
          isLoadingData={isLoadingData}
        />
      </Paper>
    </Container>
  ) : (
    "404"
  );
}

export default Profile;
