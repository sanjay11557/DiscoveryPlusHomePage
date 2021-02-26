import React from 'react'
import './style.css';
const Button = ({name, color, type}) => {
    return (
        <button className={ `btn ${color}`} type={type}>
            {name}
        </button>
    )
};
Button.defaultProps = {
    color: "primary"
}

export default Button
