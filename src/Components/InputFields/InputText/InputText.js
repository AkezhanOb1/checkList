import React from 'react'
import FormLineText from '../../FormLine/FormLineText'
import arrow from '../../../assets/images/arrow.png'
import backArrow from '../../../assets/images/arrowBack.png'


const InputText = (props) => {
    return(
        <div className="input-field">
            {props.backFunction &&
                <div className="re-do">
                    <img src={backArrow} alt="back Arrow" onClick={() => props.backFunction()}/>
                </div>}
            <FormLineText
                types={props.types}
                inputText={props.inputText}
                changeHandler={props.changeHandler}
                completed={props.completed}/>
            <div className="arrow">
                <img src={arrow} alt="arrow" onClick={() => props.forwardHandler()} />
            </div>
        </div>
    )
}


export default InputText
