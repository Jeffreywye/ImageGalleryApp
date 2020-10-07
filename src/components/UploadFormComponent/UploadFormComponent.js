import React, {useState,useEffect}  from 'react';
import PreviewComponent from "../PreviewComponent/PreviewComponent.js";


const UploadFormComponent = (props) => {

    const [_selected_file, setSelectedFile] = useState();

    const handleFileOnChange = (event) => {
        event.preventDefault();
        let file = event.target.files[0];
        previewFile(file);
    }

    const handleFormOnSubmit = (event) => {
        event.preventDefault();
        if(!_selected_file){
            // handles no selected file case
            console.log("No file selected");
            return;
        }
        uploadFile(_selected_file);
    };

    const previewFile = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setSelectedFile(reader.result);
        };
        reader.onerror = () => {
            console.log("Error on previewFile");
        }
    }

    const uploadFile = async (base64File) => {
        try {
            await fetch("/api/upload",{
                method: 'POST',
                body: JSON.stringify({ data: base64File }),
                headers: { 'Content-Type': 'application/json' },
            });
            setSelectedFile("");
            console.log("success");
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div className="container">
            <form 
                id="upload-form"
                className=""
                onSubmit={handleFormOnSubmit}
            >
                <input
                    id="file-input"
                    type="file"
                    name="image"
                    onChange = {handleFileOnChange}
                >
                </input>
                <button
                    className="search-btn"
                    type="submit"
                >
                    Upload
                </button>
            </form>
            {_selected_file &&
            <PreviewComponent image={_selected_file}/>
            }
        </div>
    );
};

export default UploadFormComponent;