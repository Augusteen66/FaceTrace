import { Grid } from '@material-ui/core';
import React, { useState} from 'react'

import './Home.css'
import img from './vector.jpeg'
import SpringModal from '../../Components/Modal';

const App = () => {
    return (
        <div className="container" >
            <Grid container>
              <Grid item xs={12} sm={6}>
                <div  className="main-main" style={{marginTop:"150px"}} >
                      <span className="heading">
                        <h1 className="face" >We help you to verify profile pictures.</h1>
                      </span>
                      <div className="text">
                        <p>
                            &ensp;&ensp;Your professional profile picture is your first step to building your personal brand and making yourself stand out. Our platform will perform all kinds of checks that are necessary and give you an analysis of the same.
                        </p>
                      </div>        
                      <SpringModal />
                </div>
                </Grid>


                <Grid item xs={12} sm={6}>
                  <div className="vector">
                    <img src={img} alt="app" className="img vert-move" />
                  </div>
                </Grid>
              </Grid>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js" integrity="sha256-qM7QTJSlvtPSxVRjVWNM2OfTAz/3k5ovHOKmKXuYMO4=" crossorigin="anonymous"></script>
        </div>
    )
}

export default App;