import React, {useState,useEffect}  from 'react';
import styles from "./PreviewComponent.module.css";


const PreviewComponent = (props) => {
    return (
        <div className="container">
            <img
                src = {props.image}
                className= {styles.img}
                alt = "file selected"
            />
        </div>
    );
};

export default PreviewComponent;