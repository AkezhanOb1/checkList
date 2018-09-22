import React from 'react'
import FormLineButton from '../../FormLine/FormLineButton'
import backArrow from '../../../assets/images/arrowBack.png'
import arrow from '../../../assets/images/arrow.png'

const ButtonInputFields = (props) => {

    return(
        <div className="input-field">
            <div className="re-do">
                <img src={backArrow} alt="back Arrow" onClick={() => props.backFunction()}/>
            </div>
            <FormLineButton
                clickHandler={props.clickHandler}
                buttonText={props.buttonText}
                completed={props.completed} />


            <div className="arrow">
                <img src={arrow} alt="arrow" onClick={() => props.forwardFunction()} />
            </div>
        </div>
    )
}


export default ButtonInputFields
