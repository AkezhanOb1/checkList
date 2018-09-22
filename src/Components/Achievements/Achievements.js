import React from 'react'

    const Achievements = (props) => {
    const showImage = props.achive.map((el) => {
        if(el.hasOwnProperty('image')) {
            return(
                <div className="check-item" key={el.image + Math.random()}>
                    <div className={el.border}>
                        <div className="inner">
                            <img src={el.image} alt={`${el.picture}`} className={"achieveImage"}/>
                        </div>
                    </div>
                    <p>
                        <span
                            className="regular fs_12 beforeBorder">{el.title}</span>
                        <span  className={`regular fs_12 afterBorder + ${el.color}`} >{el.info}</span>
                    </p>
                </div>
            )
        }
        else {
           return null
        }
    })

    return(
        <div className="check-goods">
            <div className="check-items">
                {showImage}
            </div>
        </div>
    )
}

export default Achievements
