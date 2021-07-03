import React, { useState, useRef } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Link from "@material-ui/core/Link";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import navItem from "./navItem.json";
import QueryField from "./QueryField";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  navLeft: {
    flexGrow: 1,
  },
  navLink: {
    margin: `0px ${theme.spacing(2)}px 0px 0}px`,
  },
}));

function NavBar() {
  const history = useHistory();
  // const location = useLocation();
  const classes = useStyles();
  const [currentEl, setCurrentEl] = useState(null);
  const open = Boolean(currentEl);
  const [inputUid, setInputUid] = useState();

  const handleClose = () => {
    setCurrentEl(null);
  };

  return (
    <AppBar>
      <Toolbar>
        <div className={classes.navLeft}>
          {navItem.map((item) => (
            <Link
              key={item.name}
              component="button"
              variant="h6"
              color="inherit"
              className={classes.navLink}
              onClick={() => {
                history.push(item.path);
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <QueryField
          setInputUid={setInputUid}
          inputUid={inputUid}
          open={open}
          handleClose={handleClose}
          setCurrentEl={setCurrentEl}
          currentEl={currentEl}
          setInputUid={setInputUid}
          inputUid={inputUid}
        />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
