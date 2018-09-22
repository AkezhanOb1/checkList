import React from 'react'
import Button from '../Button/Button'
import ProgressBar from '../ProgressBar/ProgressBar'
const FormLineButton = (props) => {
    return (
        <div className="form-line">
            <Button clickHandler={props.clickHandler} buttonText={props.buttonText} style={props.styles}/>
            <ProgressBar completed={props.completed}/>
        </div>
    )
}

export default FormLineButton

