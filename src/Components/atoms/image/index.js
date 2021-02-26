import React from 'react';
import './style.css';

const Image = ({name,height,width,location,alt}) => {
    return (
            <img className={name}  src={location} height={height} width={width} alt={alt}/>
    );
};

export default Image