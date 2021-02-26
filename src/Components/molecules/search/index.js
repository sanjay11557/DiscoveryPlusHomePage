import React from 'react'
import Input from '../../atoms/input/index'
import Button from '../../atoms/button/index'
import './style.css'

const searchBar= ({content})=>{
    return(
        <div className="search">
            <Input style="search-input" placeHolder={content.placeHolder}/>
            <Button name={content.button} color='primary' type="submit" />
        </div>
    );
}

export default searchBar;