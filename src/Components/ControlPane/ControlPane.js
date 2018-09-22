import React from 'react'
import {Link} from 'react-router-dom'


const ControlPane = (props) => {
    return(
        <div className="control-arrows">
            <div className="left-arrow">
                <Link to={"/"}>
                    <p className="regular control goldish"><i className="fas fa-arrow-left white" />В начало</p>
                </Link>
            </div>
            <div className="right-arrow">
                <p className="regular control" onClick={() => props.remove()}>Скрыть <i className="fas fa-arrow-right white" /></p>
            </div>
        </div>
    )
}

export default ControlPane