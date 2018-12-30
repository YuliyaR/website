import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  appBar: {
    position: "relative"
  },
  toolbarTitle: {
    flex: 1
  }
};

const Nav = props => {
  const { classes } = props;
  return (
    <AppBar position="static" color="default" className={classes.appBar}>
      <Toolbar>
        <Typography
          onClick={() => console.log("company clicked")}
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          Website Name
        </Typography>
        <Button>Page 1</Button>
        <Button>Page 2</Button>
        <Button>Page 3</Button>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Nav);
