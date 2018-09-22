import React from 'react'


const Button = (props) => {
    return (
        <input type="button" value={props.buttonText} onClick={() => props.clickHandler()} />
    )
}

export default Button
