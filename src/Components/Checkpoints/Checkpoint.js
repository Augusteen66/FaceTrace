import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
 
function StepProgressBar(props){
    return (
      <ProgressBar
        percent={80}
        filledBackground="linear-gradient(to right, #347aeb, #b3f5ff)"
      >
        <Step transition="scale" accomplished={true}>
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 100  }%)` }}
              width="20"
              src="https://upload.wikimedia.org/wikipedia/commons/1/11/Pan_Green_Circle.png"
              alt="step"
            />
          )}
        </Step>
        <Step transition="scale" accomplished={true}>
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 100  }%)` }}
              width="20"
              src="https://upload.wikimedia.org/wikipedia/commons/1/11/Pan_Green_Circle.png"
              alt="step"
            />
          )}
        </Step>
        <Step transition="scale" accomplished={true}>
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 100  }%)` }}
              width="20"
              src="https://upload.wikimedia.org/wikipedia/commons/1/11/Pan_Green_Circle.png"
              alt="step"
            />
          )}
        </Step>
        <Step transition="scale" accomplished={true}>
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 100  }%)` }}
              width="20"
              src="https://upload.wikimedia.org/wikipedia/commons/1/11/Pan_Green_Circle.png"
              alt="step"
            />
          )}
        </Step>
        <Step transition="scale" accomplished={false}>
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 100  }%)` }}
              width="20"
              src="https://upload.wikimedia.org/wikipedia/commons/1/11/Pan_Green_Circle.png"
              alt="step"
            />
          )}
        </Step>
        <Step transition="scale" accomplished={false}>
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 100  }%)` }}
              width="20"
              src="https://upload.wikimedia.org/wikipedia/commons/1/11/Pan_Green_Circle.png"
              alt="step"
            />
          )}
        </Step>
      </ProgressBar>
    );
}


export default StepProgressBar;