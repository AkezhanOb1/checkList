import React from 'react'

const ProgressBar = (props) => {
    return (
            <div className="my-progrss-bar" style={{width: `${props.completed}`}}/>
    )
}

export default ProgressBar