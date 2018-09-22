import React from 'react'
import umbrella from '../../assets/images/SVGs/umbrella .svg'

const WeatherAndTime = (props) => {
    return (
        <div className="info-field">
            <div className="local-time">
                <h1 className={`m-0 fs_40 ${props.color}`}>08:45</h1>
                <p>
                    <span className="regular fs_12 beforeBorder">11 сентября</span>
                    <span className="regular fs_12 afterBorder">Понедельник</span>
                </p>
            </div>
            <div className="local-weather mr-15">
                <img src={umbrella} alt="umbrella" className={"weather-image"}/>
                <p>
                    <span className="regular fs_12">Дождь</span>
                    <span className="regular fs_12 special-Blue">-6</span>
                </p>
            </div>
        </div>
    )
}


export default WeatherAndTime