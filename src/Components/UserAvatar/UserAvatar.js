import React from 'react'
import avatar from '../../assets/images/finn.png'

const UserAvatar = (props) => {
    return(
        <div className="user-image">
                <img src={avatar} alt="logo" className="userLogo" style={{marginBottom: props.margin}}/>
        </div>
    )
}
export default UserAvatar