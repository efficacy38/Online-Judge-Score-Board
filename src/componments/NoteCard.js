import { useHistory } from "react-router-dom";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function NodeCard({user}) {
      const history = useHistory();
  const classes = useStyles();

  return (
    <Card>
      <CardHeader 
      avatar={<Avatar>{user.user_name[0].toUpperCase()}</Avatar>}
      title={user.user_name}
      subheader={`UID: ${user.uid}`}
      />
      <CardContent>
        <Typography variant="body2">
           {`AC / TOTAL: ${user.ac} / ${user.total}`}
         </Typography>
      </CardContent>
      <CardActions>
        <Button
          style={{marginLeft: "auto"}}
          size="small"
          color="primary"
          onClick={() => {
            history.push(`/Profile/?uid=${user.uid}`);
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
