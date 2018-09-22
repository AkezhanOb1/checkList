import React from 'react'

const InfoMessage = (props) => {
    return (
        <div className="info-message">
            <p className="regular">{props.regularMessage}

                    <span className="action-message"
                          onClick={() => props.actionMessageHandler()}>{props.actionMessage}
                      </span>
            </p>
        </div>
    )
}

export default InfoMessage