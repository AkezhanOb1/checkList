import React from 'react'

const ErrorMessage = (props) => {
    return props.show ?
                <div className="message-types">
                    <div className="error-message">
                        <p onClick={() => props.errorHandler()}><i className="fas fa-times"/>{props.text}</p>
                    </div>
                </div> : null
}

export default ErrorMessage


