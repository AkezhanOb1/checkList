import React from 'react'
import InputTextField from '../InputTextField/InputTextField'
import ProgressBar from '../ProgressBar/ProgressBar'
const FormLineButton = (props) => {
    return (
        <div className="form-line">
            <InputTextField types={props.types} inputText={props.inputText} changeHandler={props.changeHandler}/>
            <ProgressBar completed={props.completed}/>
        </div>
    )
}

export default FormLineButton

