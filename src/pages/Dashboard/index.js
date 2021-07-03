import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import CachedIcon from "@material-ui/icons/Cached";
import IconButton from "@material-ui/core/IconButton";
import FormDialog from "../../componments/FormDiolog";

const useStyles = makeStyles((themes) => ({
  sepDivder: {
    margin: `${themes.spacing(2)}px 0px ${themes.spacing(2)}px 0px`,
  },
  titleContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  titleItems: {
    display: "flex",
  },
}));

function Index() {
  const classes = useStyles();
  const [refeash, setRefreash] = useState(0);

  const handleRefresh = () => setRefreash((prev) => prev + 1);

  return (
    <>
      <Container>
        <div className={classes.titleContainer}>
          <Typography variant="h4" align="left" className={classes.titleItems}>
            刷題記錄
          </Typography>
          <IconButton
            color="primary"
            aria-label="reload record"
            component="span"
            className={classes.titleItems}
            onClick={handleRefresh}
          >
            <CachedIcon />
          </IconButton>
        </div>

        <div className={classes.titleContainer}>
          <Typography
            variant="body2"
            align="left"
            className={classes.titleItems}
          >
            各式 oj 與 coder 解題情況
          </Typography>
          <FormDialog />
        </div>

        <Divider variant="fullwidth" className={classes.sepDivder} />
        <Dashboard refeash={refeash} className={classes.titleItems} />
      </Container>
    </>
  );
}

export default Index;
