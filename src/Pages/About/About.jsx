import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


import Smeet from './Smeet.jpg';
//import Aditya from './adi.jpg';
import Adityaaaaa from './Aditya.jpg';
import Aagaaz from './Aagaaz.jpeg';
import Farhan from './Farhan.jpeg'

import './About.css'

const useStyles = makeStyles({
  root: {
    width: 345,
  },
  media: {
    height: 300,
  },
});



function About() {
    return (
    <div className="about-container"  >
      <Grid container >
                <Grid item sm={3} xs={12}>
                  <MediaCard name="Aagaaz" content="PICT Student" className="Text" image={Aagaaz} link="https://www.linkedin.com/in/aagaaz-ali-sayed-1063851ba/" />
                </Grid>  
                <Grid item sm={3} xs={12}>
                  <MediaCard name="Aditya" content="PICT Student" className="Text" image={Adityaaaaa} link="https://www.linkedin.com/in/aditya-kangune-0376671aa/" />
                </Grid>  
                <Grid item sm={3} xs={12}>
                  <MediaCard  name="Farhan" content="PICT Student" className="Text" image={Farhan} link="https://www.linkedin.com/in/farhan-naqvi/" />
                </Grid>  
                <Grid item sm={3} xs={12}>
                  <MediaCard  name="Smeet" content="PICT Student" className="Text" image={Smeet} link="https://www.linkedin.com/in/smeet-ramteke/"  />
                </Grid>  

      </Grid>
    </div>
    )
}

export default About




function MediaCard(props) {
  const classes = useStyles();

  return (
    <Grid item sm={3} xs={12} style={{padding:"30px"}} >
        <Card className="card"  >
          <CardActionArea>
              <CardMedia
              className={classes.media}
              image={props.image}
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                  {props.name}
                  <LinkedInIcon 
                    color="primary" 
                    fontSize="large" 
                    style={{postioin:"absolute", top:100}} 
                    onClick={event =>  window.location.href=props.link}
                  />
                  
              </Typography>
              
              <Typography variant="body2" color="textSecondary" component="p">
                  {props.content} 
              </Typography>
              </CardContent>
          </CardActionArea>
        </Card>
    </Grid>
  );
}
