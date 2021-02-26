import React from 'react';
import Link from '../../atoms/link/index';

const CarouselIndicator = ({type, onClick}) => {
    return (
        <Link location="/" onClick={onClick} style={type} />
    );
};

export default CarouselIndicator;