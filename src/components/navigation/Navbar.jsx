import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


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
      <AppBar position="static" style={{backgroundColor: "rgb(72, 111, 89)", color: "white"}}>
        <Container>
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
            <Button color="inherit" component={ Link } to="/">Kevin and Sandra's Wedding Songs App</Button>
            </Typography>
            <Button color="inherit" component={ Link } to="/songs">Songs We've Already Got</Button>
            <Button color="inherit" component={ Link } to="/songs/add">Add Your Jam</Button>
            </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
