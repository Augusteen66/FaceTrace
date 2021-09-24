import React from 'react'
import { Switch, Route, BrowserRouter, NavLink } from 'react-router-dom'
import {Grid} from '@material-ui/core'

import Home from '../Pages/Home/Home';
import Why from '../Pages/WhyFaceTrace/WHY';
import About from '../Pages/About/About';

import './Navbar.css'


function Navbar() {
    return (
        <div className="App">
            <div className="container-main">
                <BrowserRouter>
                    <div>
                        <div className="Bar">
                            <Grid container>
                                <Grid item sm={4} md={4} xs={12}>
                                    
                                    <NavLink exact className="nav-link" activeClassName="active" to="/" > <div className="Logo">FaceTrace </div></NavLink>
                                    
                                </Grid>
                                <Grid item sm={4} md={4}  />
                                <Grid item sm={4} md={4} xs={12}>
                                    <ul className="list">
                                        <li>
                                            <NavLink className="nav-link" activeClassName="active" to="/why-face-trace" > Why FaceTrace? </NavLink>
                                        </li>
                                        <li >
                                            <NavLink className="nav-link" activeClassName="active" to="/about" > About Us</NavLink>
                                        </li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </div>
                        
                        <Switch>
                            <Route exact path="/" > <Home/> </Route>
                            <Route exact path="/why-face-trace" > <Why/> </Route>
                            <Route exact path="/about" > <About/> </Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Navbar
