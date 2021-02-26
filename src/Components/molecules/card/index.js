import React from 'react'
import './style.css'
import Image from '../../atoms/image/index'

const Card = ({location,text})=>{
    return(
        <div className='cardContainer'>
            <Image name="cardImage" location={location} width="250" />
            <div class="bottom-center">
                <span className='cardText'>{text}</span>
            </div>
        </div>
    );
}

export default Card;