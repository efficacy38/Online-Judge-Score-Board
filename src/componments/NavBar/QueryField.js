import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import supportOj from "../../supportOjs.json";
import { fade, makeStyles } from "@material-ui/core/styles";
import CallMissedOutgoingIcon from "@material-ui/icons/CallMissedOutgoing";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  SearchPoper: {
    width: "20ch",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
  searchListItem: {
    flex: 1,
    flexGrow: 1,
  },
  searchListContainer: {
    display: "flex",
  },
  rectBadge: {
    color: "gray",
    borderRadius: "5px",
    backgroundColor: "#d3d3d3",
    padding: theme.spacing(0.5),
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function QueryField({
  currentEl,
  setCurrentEl,
  handleClose,
  open,
  inputUid,
  setInputUid,
}) {
  const history = useHistory();
  const classes = useStyles();
  const [isMouseInPopper, setIsMouseInPopper] = useState(false);
  return (
    <div
      className={classes.search}
      onBlur={() => {
        if (!isMouseInPopper) {
          handleClose();
        }
      }}
    >
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="搜尋 coder"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => {
          setCurrentEl(e.currentTarget);
          setInputUid(e.currentTarget.value);
        }}
      />
      <Popper
        anchororigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformorigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={currentEl}
        open={open}
        disablePortal
        style={{
          width: "100%",
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
        }}
        tabIndex={0}
        onMouseEnter={() => {
          setIsMouseInPopper(true);
        }}
        onMouseLeave={() => {
          setIsMouseInPopper(false);
        }}
      >
        <Paper className={classes.SearchPopper}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                select a OJ or user_id
              </ListSubheader>
            }
            className={classes.SearchPoper}
          >
            {supportOj.map((oj, idx) => (
              <ListItem
                button
                key={idx}
                onClick={() => {
                  handleClose();
                  history.push(`${oj.path}/?uid=${inputUid}`);
                }}
              >
                <ListItemText
                  primary={
                    <div className={classes.searchListContainer}>
                      <Typography
                        variant="body2"
                        className={classes.searchListItem}
                      >
                        {inputUid}
                      </Typography>
                      <div
                        className={classes.rectBadge}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <Typography variant="body2" style={{ display: "flex" }}>
                          {oj.oj}
                        </Typography>
                        <CallMissedOutgoingIcon
                          fontSize="small"
                          style={{ display: "flex" }}
                        />
                      </div>
                    </div>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Popper>
    </div>
  );
}

export default QueryField;
