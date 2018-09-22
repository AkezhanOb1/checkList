import React from 'react'
import UserLogo from '../UserAvatar/UserAvatar'
import ErrorMessage from '../Messages/ErrorMessage/ErrorMessage'
import ButtonInputFields from '../InputFields/ButtonInput/ButtonInputFields'

const Main = (props) => {
        return (
            <div className="main-part">
                <UserLogo />

                <ButtonInputFields
                    backFunction={props.backFunction}
                    forwardFunction={props.forwardFunction}
                    clickHandler={props.clickHandler} buttonText={props.buttonText}
                    completed={props.completed}
                />

                <ErrorMessage show={true} text={props.errorText} errorHandler={props.errorHandler}/>
            </div>
        )
}

export default Main


