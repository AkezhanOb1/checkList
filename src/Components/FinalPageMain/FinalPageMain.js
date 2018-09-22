import React from 'react'
import UserLogo from '../UserAvatar/UserAvatar'
import Quotes from '../Messages/Quotes/QuotesMessage'
import arrow from '../../assets/images/arrow.png'


const FinalPageMain = (props) => {
    return (
        <div className="main-part">
            <UserLogo />

            <div className="input-field">
                <div className="re-do">
                    <h1 className={"special-Gold"}>{props.timer}</h1>
                </div>

                <div className="form-line">
                    <input type="button" value={props.buttonText} onClick={() => props.clickHandler()} id={'finalInput'}/>
                </div>

                <div className="arrow">
                    <img src={arrow} alt="arrow" onClick={() => props.forwardFunction()} />
                </div>
            </div>

            <div className="message-types">
                <Quotes regularMessage={props.regularMessage} actionMessage={props.actionMessage}/>
            </div>
        </div>
    )
}

export default FinalPageMain