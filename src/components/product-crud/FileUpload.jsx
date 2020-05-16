import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';

const FileUpload = ({setImg}) => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    
    const onChange = e => {
        e.preventDefault();
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const handleUpload = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        try{
            const res = axios.post('/upload', formData, {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                },
                
            });
        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server');
              } else {
                console.log('error in upload');
              }
        }
            setImg(filename);
    }
    return (
        <>
            <div className="row">
              <div className="col-md-12">
                <Form.File id="file-upload" custom>
                    <Form.File.Input isValid onChange={(e) => onChange(e)}/>
                    <Form.File.Label data-browse="Browse">
                        {filename}
                    </Form.File.Label>
                </Form.File>
              </div>
              <div className="col-md-2 m-auto"> 
                <input
                    type='submit'
                    value='Upload'
                    className='btn btn-primary btn-block mt-4'
                    onClick={(e) => handleUpload(e)}
                />
              </div> 
            </div>
        </>
    );
}

export default FileUpload;
