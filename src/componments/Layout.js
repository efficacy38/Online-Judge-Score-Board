import React from "react";
import { makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => ({
  page: {
    backgroundColor: "#f9f9f9",
    padding: theme.spacing(3),
    minHeight: "-webkit-fill-available"
  },
  toolbar: theme.mixins.toolbar,
  root: {
    height: "100vh",
  },
  title: {
    margin: theme.spacing(3),
  }
}));

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* navBar */}
      <NavBar />
      {/* contents */}
      <div className={classes.page}>
      <div className={classes.toolbar}></div> 
        {children}
      </div>
    </div>
  );
}

export default Layout;
