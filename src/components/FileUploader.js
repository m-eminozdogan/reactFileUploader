import React, { useState } from 'react'
import '../styles/fileUploader.css'
import axios from 'axios'
export default function FileUploader() {
    const [file, setFile] = useState(null);

    const handlerOnChange = (e) => {
        console.log(e.target.files);
        setFile(e.target.files[0])
    }
    const handlerOnSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('file', file);
        axios.post('//localhost:8000/upload',data)
        .then((e)=>{
            console.log('success');
        })
        .catch((e)=>{
            console.error('HATA aldın yiğidim',e)
        })
    }
    return (
        <div>
            <form method="post" action="#" id="#" onSubmit={handlerOnSubmit}>
                <div className="form-group files">
                    <label>Upload Your File </label>
                    <input type="file" onChange={handlerOnChange} className="form-control" multiple="" />
                </div>
                <button>Yükle</button>
            </form>

        </div>
    )
}
