import React from 'react'
import './style.css'
import Image from '../../atoms/image/index'

const CarouselImage = ({ imageContent }) => {
    return (
        <div>
            <Image name="border-rad-10" location={imageContent.img} alt={imageContent.imgAlt} width="875" height="490" />
        </div>
    );
}

export default CarouselImage;
