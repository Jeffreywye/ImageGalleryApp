import React, {useState,useEffect}  from 'react';
import {Image} from 'cloudinary-react';

const ImageGalleryComponent = (props) => {
   const [_image_ids, setImageIds] = useState();
   
    const loadImages = async () =>{
        try {
            const res = await fetch('/api/images');
            const data = await res.json();
            console.log(data);
            setImageIds(data);
        }
        catch (error){
            console.error(error);
        }
    };

    useEffect(()=>{
        loadImages();
    }, []);

    return (
        <div className="container">
            {_image_ids && _image_ids.map((imageId, index, arr) =>{
                return (
                    <Image
                        key={index}
                        cloudName="dnzyxietm"
                        publicId={imageId}
                        width = "300"
                        crop = "scale"    
                    />
                );
            })}
        </div>
    );
};

export default ImageGalleryComponent;