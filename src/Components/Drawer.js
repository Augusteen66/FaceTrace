import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Switch, Route, BrowserRouter, NavLink } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Why from '../Pages/WhyFaceTrace/WHY';
import About from '../Pages/About/About';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:"black"
  },
  title: {
    flexGrow: 1, color:"#3f2f9c"
  },
  bar: {
    backgroundColor:"white",
    marginBottom:"50px"
  },
  navlink: {
    fontSize: "1.5rem",
    textDecoration: "none",
    paddingRight: "50px",
    fontFamily: "roboto",
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
      <AppBar position="static" className={classes.bar} > 
        <Toolbar>
          
          
          <Typography variant="h4" className={classes.title} style={{fontWeight:"700", textDecoration: "none"}} > 
            <NavLink exact activeClassName={classes.active} style={{fontWeight:"700", textDecoration: "none"}} to="/" > FaceTrace </NavLink>
          </Typography>
          
          
          <NavLink exact className={classes.navlink}  activeClassName="active" to="/why-face-trace" > Why FaceTrace?</NavLink>
          <NavLink exact className={classes.navlink}  activeClassName="active" to="/analyze" > About </NavLink>
        </Toolbar>
      </AppBar>
        <Switch>
          <Route exact path="/why-face-trace" > <Why/> </Route>
           <Route exact path="/analyze" > <About/> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
