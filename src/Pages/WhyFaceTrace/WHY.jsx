import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import {Grid} from '@material-ui/core'
import './WHY.css'
import img from './9858.jpg'

const users = [
    {   
        id: 0,
        heading: "Face Detection", 
        text: "We can detect human faces from an image, thereby differentiating images with animals or any kind of objects with a human face." 
    },
    {   
        id: 1,
        heading: "Mask Detection",
        text: "After detecting a digital human face, that face will be checked for masks as well. It is a value-added asset if we can test if the person is wearing a mask or not in the picture.",
    },
    {   
        id: 2,
        heading: "Object covering the face",
        text: "We will not want to accept the images that have some kind of obstacle in front of the face. Hene a picture with an obstacle in front of the face can be picked out.",
    },
    {   
        id: 3,
        heading: "Single person detected", 
        text: "The model can detect the number of faces in the picture. Hence we can get a total count of human faces excluding any other kind of faces or objects in the frame. " 
    },
    {   
        id: 4,
        heading: "Emotion Detector",
        text: "Emotions such as angry, fear, sad, happy, surprised can be caught with the help of facial expressions and the quantity of every particular emotion can be obtained.",
    },
    {   
        id: 5,
        heading: "Image Quality",
        text: "Quality of the image is really an important thing. We can see if the uploaded image is in high resolution, low resolution, or blurry",
    },
];

function ColorsTimeline(props) {
    return (
      <Timeline align="alternate">
          <TimelineItem>
              <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                  <h2 >Face Detection</h2>           
                  <h5 style={{textAlign:"justify", margin:20}} >&emsp;&emsp;&emsp;We can detect human faces from an image, thereby differentiating images with animals or any kind of objects with a human face.</h5>
              </TimelineContent>
          </TimelineItem>

          <TimelineItem>
              <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                  <h2 >Mask Detection</h2>           
                  <h5 style={{textAlign:"justify", margin:20}} >&emsp;&emsp;&emsp;Masks have become an inseparable part of our lives during these unprecedented times. But having masks on for profile pictures looks very unprofessional. So we have created a mask detection algorithm that rigorously scans your profile picture for a mask to ensure that your beautiful face is visible on your profile.</h5>
              </TimelineContent>
          </TimelineItem>

          <TimelineItem>
              <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                  <h2 >Object covering the face</h2>           
                  <h5 style={{textAlign:"justify", margin:20}} >&emsp;&emsp;&emsp;The reason for having profile pictures is that your face should be visible to other users. Having some object cover your face defeats the whole purpose of uploading a profile picture. Hence, we have created an algorithm that detects whether some object does not cover a huge part of your face.</h5>
              </TimelineContent>
          </TimelineItem>

          <TimelineItem>
              <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                  <h2 >Count of people in the frame</h2>           
                  <h5 style={{textAlign:"justify", margin:20}} >&emsp;&emsp;&emsp;It’s great to show candidates that you’re collaborative and love your team. But if you use a group photo as your profile pic, they may be unsure which person is you. To leave candidates with no doubt about what you look like, choose a solo photo for your profile pic. As a result a  person’s profile picture should have only the person and no one other than that.  Our model is capable of detecting the number of faces in the picture. Hence we can get a total count of human faces in the frame of the image.</h5>
              </TimelineContent>
          </TimelineItem>

          <TimelineItem>
              <TimelineSeparator>
              <TimelineDot />
              
              </TimelineSeparator>
              <TimelineContent>
                  <h2 >Image Quality</h2>           
                  <h5 style={{textAlign:"justify", margin:20}} >&emsp;&emsp;&emsp;Quality of the image is really an important thing. We can see if the uploaded image is in high resolution, low resolution, or blurry.</h5>
              </TimelineContent>
              
              
          </TimelineItem>
  
  
      </Timeline>
    );
  }
  

function Text(props){
    return(
        <Grid item sm={6} xs={12} style={{padding:"30px", textAlign:"center"}} >
            <h2 >{props.heading}</h2>           
            <h5 style={{textAlign:"justify", margin:20}} >&emsp;&emsp;&emsp;{props.text}</h5>
        </Grid>
    ) 
}

function About() {
    return (
    <Grid container className="why-container" >
        <Grid item sm={6} xs={12}>
            
            <Grid container>
            <ColorsTimeline />
            {
            // users.map((user)=> <Text key={user.id} heading={user.heading} text={user.text} className="Text" />)
            }  
            </Grid>    
        </Grid>
        <Grid item sm={6} xs={12} >
            <div className="vector">
                <img src={img} alt="app" className="img vert-move" style={{paddingTop:100}} />
            </div>
        </Grid>
    </Grid>
    )
}

export default About



