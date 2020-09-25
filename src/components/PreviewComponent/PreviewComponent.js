import React, {useState,useEffect}  from 'react';

const PreviewComponent = (props) => {
    return (
        <div className="container">
            <img
                src = {props.image}
                alt = "file selected"
                style={{height:'300px'}}
            />
        </div>
    );
};

export default PreviewComponent;