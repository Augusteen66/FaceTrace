from keras.preprocessing import image
import tensorflow as tf
from tensorflow import keras
import numpy as np
import cv2
import matplotlib.pyplot as plt
import pickle as pkl
from keras.applications.vgg16 import VGG16
from sklearn import preprocessing
le = preprocessing.LabelEncoder()
import glob
import argparse
import sys
sys.argv=['']
del sys
import warnings
warnings.filterwarnings("ignore")

face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

@tf.autograph.experimental.do_not_convert
def no_of_ppl(img1):

    img = img1.copy()
  
    face_rects = face_cascade.detectMultiScale(img,scaleFactor=1.2, minNeighbors=5) 
    
    for (x,y,w,h) in face_rects: 
        cv2.rectangle(img, (x,y), (x+w,y+h), (255,255,255), 10)
    
    return len(face_rects)

@tf.autograph.experimental.do_not_convert
def obj_cov_face(img):
  
    face_img = img.copy()

    #print(img)
  
    face_rects = face_cascade.detectMultiScale(face_img,scaleFactor=1.5, minNeighbors=7) 
    
    for (x,y,w,h) in face_rects: 
        cv2.rectangle(face_img, (x,y), (x+w,y+h), (255,255,255), 10)
    
    return len(face_rects)

@tf.autograph.experimental.do_not_convert
def mask_detector(img):
    SIZE = 256

    VGG_model = VGG16(weights='imagenet', include_top=False, input_shape=(SIZE, SIZE, 3))

    #Make loaded layers as non-trainable. This is important as we want to work with pre-trained weights
    for layer in VGG_model.layers:
        layer.trainable = False

    img = np.array(img)

    img = img / 255.0

    test_labels = ['with_mask', 'without_mask']
    test_labels = np.array(test_labels)
    le.fit(test_labels)

    img = image.img_to_array(img)

    img = np.expand_dims(img, axis=0)

    #Send test data through same feature extractor process
    X_test_feature = VGG_model.predict(img)
    #print(X_test_feature.shape)
    X_test_features = X_test_feature.reshape(X_test_feature.shape[0], -1)

    xgb = pkl.load(open('mask_detection_xgboostclassifier_model', 'rb'))

    prediction = xgb.predict(X_test_features)

    #Inverse le transform to get original label back. 
    prediction = le.inverse_transform(prediction)

    return prediction

@tf.autograph.experimental.do_not_convert
def mask_detector2(img):

    img = image.img_to_array(img)

    img = np.expand_dims(img, axis=0)
    img = img/255

    model = keras.models.load_model('face_detector.h5')

    y_pred1 = model.predict(img)

    y_pred = np.argmax(y_pred1,axis=1)

    return y_pred

@tf.autograph.experimental.do_not_convert
def blurry(img1):

    img = img1.copy()

    ap = argparse.ArgumentParser()
    # ap.add_argument('-f')
    ap.add_argument('-i', '--content', required=False, help = "had.png")
    ap.add_argument('-t', '--threshold', type = float,default=350.0)
    args = vars(ap.parse_args())

    img = img.astype('uint8')

    #gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    fm = cv2.Laplacian(img, cv2.CV_64F).var()
    #print(fm)
    text = "Not Blurry"
    if fm < args["threshold"]:
        text = "Blurry"
        #print(text)

    return text

def read(destination):
    img1 = image.load_img(destination, target_size=(256,256))
    img2 = cv2.imread(destination,0)
    img3 = image.load_img(destination, target_size=(48,48))
    return img1, img2, img3

# ### Take in test image ###
# img1 = image.load_img('../src/static/Mask_test2.jpg', target_size=(256,256))

# img2 = cv2.imread('../src/static/Mask_test2.jpg',0)

# result = mask_detector(img1)
# ppl = no_of_ppl(img2)
# obj = obj_cov_face(img2)
# blur = blurry(img2)

# print(f"Mask -> {result}\nNumber of people -> {ppl}\nObject Covering Face -> {obj}\n{blur}")