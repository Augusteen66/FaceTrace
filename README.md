# FaceTrace

## Inspiration
Science fiction has been a huge part of our lives. We grew up watching Tony Stark performing retinal scans to enter his lab or in the video game **“Watchdogs”**, how the protagonist, a skilled gray hat hacker used his high tech gadgets to complete his missions, one which really grabbed our attention was how he used the CCTVs to detect faces in his area. Little did we know, this mutual-liking towards it would end up being our project. 


## What it does
1.  Detects the presence of a face.
2. Detects whether the human has worn a mask or not.
3. The ML model implemented in the backend checks whether there is any object covering the human face or not.
4. Detects number of human faces
5. Image Quality checker - checks whether the image is pixelated or of high quality.


## How we built it

### Front end
To build up the front-end, we decided to go with one of the classic javascript libraries, React Js. The aim was to build a web app with a minimalistic but user-friendly user interface, which was achieved using various npm UI packages.

### Backend:
For the backend, we used Flask, because it can be easily integrated with React and its superb compatibility ML models.
 
### Checks performed using Machine learning:
- Initially, after receiving the image from the backend API, it is scanned using a haar cascade to verify a human face. After performing this check it moves on to detecting the presence of a mask.
- We successfully implemented the mask detection algorithm with a **98.49%** accuracy. It incorporated two models - **VGG16 (also called OxfordNet)** which is a convolutional neural network architecture and **XGBoost Classifier**. VGG16 was used to extract the features from the image and the XGBoost classifier is used to classify whether the person has worn a mask or not.
- Group photos might be indicative of one's team spirit and willingness for collaboration, unfortunately, group photos used as profile pictures on a professional front would create a dilemma for the viewer. To solve this, we are detecting the number of faces in the profile picture. It’s great to show candidates that you’re collaborative and love your team. But if you use a group photo as your profile pic, they may be unsure which person is you. As a result, we have also taken care of detecting the number of faces in the photo. If it exceeds the number 1, then it means there is more than one face in the picture.
- A blurry image means it’s a low-resolution picture and it is not a good thing to upload it as your profile picture. For this purpose, a Laplacian filter was used. It is particularly good at finding the fine details of an image. As a result, the image quality is examined whether it is blurry or not.


## Challenges we ran into
- Most of the time we were not able to install the exact version of the packages and libraries. 
- As we are an online team, it often gets difficult to edit the code as one person has the edited file on his local computer and the other person needs to build the environment and needs to abide by the required dependencies.
- The integration part was the toughest part, as this was the first time we tried to integrate an ML model with the front end of the web application.
-  There were many issues like writing different functions for different applications/features and getting the correct data type.


## Accomplishments that we're proud of
We are really proud that we were able to successfully integrate an ML model with the website. After having this immense experience we have become really confident in our skills from writing a basic ML code to implementing various complex models and designing a beautiful UI.

## What we learned
1. We learned how to integrate ML models with the website using Flask.
2. We got to study in-depth and implement various Deep learning models in order to achieve higher accuracy on testing data. 


## What's next for FaceTrace
- Facetrace can be used as a product that companies can consolidate into their websites when asking for uploading the user’s profile picture. 
- At the moment, FaceTrace can operate only on images but later we can even include processing of live videos through the front camera/webcam. Incorporating the fundamentals of FaceTrace can help in monitoring students during their online examinations.
