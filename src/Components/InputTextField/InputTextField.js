import React from 'react'


const InputTextField = (props) => {
    return (
        <input type={props.types} placeholder={props.inputText} onChange={(event) => props.changeHandler(event)}/>
    )
}

export default InputTextField
