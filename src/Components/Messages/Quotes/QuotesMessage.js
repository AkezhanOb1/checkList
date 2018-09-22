import React from 'react'

const QuotesMessage = (props) => {
    return (
        <div className="quote-message">
            <p className="white">"{props.regularMessage}" -
                <span className="special-Gold">  {props.actionMessage}
                  </span>
            </p>
        </div>
    )
}

export default QuotesMessage