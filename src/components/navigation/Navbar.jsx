import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
            <Button color="inherit">Kevin and Sandra's Song App</Button>
            </Typography>
            <Button color="inherit">List Songs</Button>
            <Button color="inherit">Add Songs</Button>
            </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
