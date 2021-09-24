import os
from flask import Flask, flash, request, redirect, url_for, session, jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import logging
from flask import jsonify
from flask_session import Session

SESSION_TYPE = 'memcache'
from func import *

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger('HELLO WORLD')

#UPLOAD_FOLDER = 'F:/Web Projects/Hack-O-Holics-Bajaj-Hackathon-main/src/static'
UPLOAD_FOLDER = '../src/static'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(
    __name__, static_folder='../src/static')

sess = Session()

app.secret_key = "super secret key"

CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

fPathDest = ''
filename = ''


@app.route('/api/upload', methods=['POST'])
def handle_form():
    global fPathDest, filename
    target = os.path.join(UPLOAD_FOLDER)
    if not os.path.isdir(target):
        os.mkdir(target)
        logger.info("welcome to upload`")

    print("Fine till here")

    files = request.files
    #file = request.files['file']
    file = files.get('file')

    print(file) 

    filename = secure_filename(file.filename)
    destination = "/".join([target, filename])
    #print(destination)
    file.save(destination)

    fpath = destination

    print(f"\n\nfpath = {fpath}\n\n")

    arr = []

    img1, img2, img3 = read(fpath)

    #print(img1, img2)

    result = mask_detector(img1)[0]
    ppl = no_of_ppl(img2)
    obj = obj_cov_face(img2)
    blur = blurry(img2)

    if ppl > 0:
        arr.append('yes')
    else :
        arr.append('no')

    data = []

    if blur == "Not Blurry":
        res = {
            "key" : 0,
            "name": 'Picture Resolution',
            "result": "Good✅"
        }
        data.append(res)
    else:
        res = {
            "key" : 0,
            "name": 'Picture Resolution',
            "result": "Blurry❗"
        }
        data.append(res)

    if ppl == 0:
        str = {
            "key": 1,
            "name": "Face(s) Detected",
            "result": "No"
        }
        mes = {
            "key": 2,
            "name": "Profile Picture Analysis",
            "result": "Looks like a high percentage of your face is covered or there is no person in this profile picture❗"
        }
        data.append(str)
        data.append(mes)
    else :
        if ppl == 1:
            str = {
                "key": 1,
                "name": "Face(s) Detected",
                "result": "Yes"
            }
            nfc = {
                "key": 2,
                "name": "Number of people",
                "result": "1 face detected." # String interpolation
            }
            data.append(str)
            data.append(nfc)
            if result == 'with_mask':
                mask = {
                    "key": 3,
                    "name": "Mask Detected",
                    "result": "Likely"
                }
                mes = {
                    "key": 4,
                    "name": "Profile Picture Analysis",
                    "result": "It looks like you have a mask on or your face is covered by an object❗"
                }
                data.append(mask)
                data.append(mes)
            else:
                mask = {
                    "key": 3,
                    "name": "Mask Detected",
                    "result": "No"
                }
                data.append(mask)
                if obj == 0:
                    obj_det = {
                        "key": 4,
                        "name": "Object Covering the Face",
                        "result" : "Yes"
                    }
                    data.append(obj_det)
                    mes = {
                        "key": 5,
                        "name": "Profile Picture Analysis",
                        "result": "Something's blocking your face.😔"
                    }
                    data.append(mes)
                else:
                    obj_det = {
                        "key": 4,
                        "name": "Object Covering Face",
                        "result" : "No"
                    }
                    data.append(obj_det)
                    if blur == 'Not Blurry':
                        mes = {
                            "key": 6,
                            "name": "Profile Picture Analysis",
                            "result": "Your profile picture looks good to go!👌"
                        }
                        data.append(mes)
                    else:
                        mes = {
                            "key": 6,
                            "name": "Profile Picture Analysis",
                            "result": "Your profile looks good to go but it's a bit blurry!👌"
                        }
                        data.append(mes)
        else:
            str = {
                "key": 1,
                "name": "Face(s) Detected",
                "result": "Yes"
            }
            nfc = {
                "key": 2,
                "name": "Number of people",
                "result": f"{ppl} faces detected."
            }
            mes = {
            "key": 3,
            "name": "Profile Picture Analysis",
            "result": "There is more than 1 person in this picture.👀"
            }
            data.append(str)
            data.append(nfc)
            data.append(mes)
        

    print(data)

    session['uploadFilePath']=destination

    #fPathDest = "".join(["./static/", filename])
    fPathDest = "".join(["../../static/", filename])
    return jsonify({
        'fileName': filename,
        'filePath': fPathDest,
        'ls': data
    })


if(__name__) == '__main__':
    app.config['SESSION_TYPE'] = 'filesystem'

    sess.init_app(app)

    app.debug = True

    app.run(5000)