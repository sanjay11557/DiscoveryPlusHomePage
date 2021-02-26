import React from 'react'
import './style.css'

const Input= ({style,in_type,content})=>{
    return(
        <input className={`in_${style}`} type={in_type} placeholder={content}/>
    )
};

export default Input;