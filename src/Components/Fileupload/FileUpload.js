import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './FileUpload.css'

import CP from '../Checkpoints/Checkpoint'
import CPT from '../Checkpoints/CheckpointTable'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  /*
const list = [
    {   
        "key": 1,
        "name": "Face detection",
        "result": "yes"
    },
    {   
        "key": 2,
        "name": "Mask detection",
        "result": "yes"
    },
    {   
        "key": 3,
        "name": "Object covering the face",
        "result": "yes"
    },
    {   
        "key": 4,
        "name": "Single person detected",
        "result": "yes"
    },
    {   
        "key": 5,
        "name": "Image Quality",
        "result": "yes"
    },
    {   
        "key": 6,
        "name": "Emotion Detector",
        "result": "yes"
    }
]

*/

const Tbl = (props) =>{
    const classes = useStyles();
        return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell align="center">Test</TableCell>
                <TableCell align="left">Result</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                props.list.map((a) => 
                    <TableRow key={a.key} > 
                        <TableCell align="center"  scope="row">{a.name}</TableCell>
                        <TableCell align="left">{a.result}</TableCell>
                    </TableRow>
                    )
                }
            </TableBody>
            </Table>
        </TableContainer>
        );
}


const FileUpload = () => {

    const [file, setFile] = useState('');
    const [uploadedFile, setUploadedFile] = useState('');
    const [results, setResults] = useState([
        {   
            key: 1,
            name: "Face detection",
            result: "yes"
        },
        {   
            key: 2,
            name: "Mask detection",
            result: "yes"
        },
        {   
            key: 3,
            name: "Object covering the face",
            result: "yes"
        },
        {   
            key: 4,
            name: "Single person detected",
            result: "yes"
        },
        {   
            key: 5,
            name: "Image Quality",
            result: "yes"
        },

    ]);


    const onChange = e => {
        setFile(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        
        const Upload = async () => {
          await fetch('http://localhost:5000/api/upload', {
            method: 'POST',
            body: formData
          }).then(resp => {
            resp.json().then(data => {
                const { fileName, filePath, ls } = data;
                setUploadedFile({ fileName, filePath});
                setResults(ls);
               // console.log('res:\t'+results);
                console.log(data);
            })
          })
        }
        Upload();
    }

    return (
            <form onSubmit={handleSubmit} className="form-container" enctype="multipart/form-data" id="form-container">
                { uploadedFile ? <div  >
                    <div className="image-container" >
                        <h3 className="UploadedImageHeading" >NAME:</h3>
                        <h4 style={{fontWeight:"300"}} >{uploadedFile.fileName}</h4>
                        <img src={uploadedFile.filePath} className="UploadedImage" alt="Uploaded" style={{margin:"20px"}} />  
                        <Tbl className="table" 
                            list={results}
                        />     
                    </div>
                </div> : null 
                }
                <input type="file" id="image" name="file" 
                accept="image/*" className="input" onChange={onChange}  />
                <button className="button" onSubmit={handleSubmit} >Upload</button>
            </form>
    )
}

export default FileUpload;

/*
const Tbl = (props) =>{
    const classes = useStyles();

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Test</TableCell>
              <TableCell align="left">Result</TableCell>
            </TableRow>
          </TableHead>


          <TableBody>
              <TableRow>
                <TableCell align="center"  scope="row">Face Detected</TableCell>
                <TableCell align="left">{props.face}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center"  scope="row">Mask detection</TableCell>
                <TableCell align="left">{props.mask}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center"  scope="row">Object covering the face</TableCell>
                <TableCell align="left">{props.objectCover}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center"  scope="row">Single person detected</TableCell>
                <TableCell align="left">{props.single}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center"  scope="row">Image Quality</TableCell>
                <TableCell align="left">{props.quality}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center"  scope="row">Emotion Detector</TableCell>
                <TableCell align="left">{props.emotion}</TableCell>
              </TableRow>
           
          </TableBody>
        </Table>
      </TableContainer>
    );
}

*/