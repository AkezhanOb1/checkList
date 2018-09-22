import React from 'react'


const UserInfo = (props) => {
        return (
            <div className="info-side">
                <p className="regular fs_17">-Добро пожаловать,</p>
                <h1 className="userInfo fs_30"><span className="userName">{props.name}</span><span className="white">{props.fathersName}</span></h1>
                <p className="regular fs_17">
                    <span className="beforeBorder">{props.id}</span><span className="afterBorder">{props.profession}</span>
                </p>
            </div>
        )
}

export default UserInfo