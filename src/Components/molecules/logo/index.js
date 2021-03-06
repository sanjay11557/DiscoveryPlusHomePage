import React from 'react'
import Image from '../../atoms/image/index'
import Link from '../../atoms/link/index'
import './style.css'

const Logo = ({content})=>{
    return(
        <div className='logo-header'>
            <Image location={content.location[0]} width="24" name="pd-img"/>
            <Link text={<Image className='logo' width='190' location={content.location[1]} alt={content.logoAlt}/>} url='/' style='logo-link'/>
        </div>
    );
}

export default Logo