import React from 'react'
import './style.css'

const Link = ({text,url,style})=>{
    return(
        <a href={url} className={`text ${style}`}>{text}</a> 
    );
}
export default Link;