import React from 'react';
import Image from '../../atoms/image/index';
import Link from '../../atoms/link/index';
import './style.css';

const CarouselText = ({textContent}) => {
    return (
        <div className="carousel-text">
            <div>
                <span className='text carousel-heading'>{textContent.heading}</span>
                {/* <Text content={textContent.heading} type="carousel-heading"/> */}
            </div>
            <div className="padding-top-14">
                <span className='text carousel-subheading'>{textContent.subHeading}</span>
                {/* <Text content={textContent.subHeading} type="carousel-subheading"/> */}
            </div>
            <div className="margin-tb-18">
                <span className='text carousel-tags'>{textContent.tag1}</span>
                <span className='text carousel-tags'>{textContent.tag1}</span>
                {/* <Text content={textContent.tag1} type="carousel-tags"/>
                <Text content={textContent.tag2} type="carousel-tags"/> */}
            </div>
            <div className="play-button">
                <Image location="play-button-5.png" width="92" height="67"/>
                <Link name="Play carousel-play" location="/" />
            </div>
        </div>
    );
};

export default CarouselText;