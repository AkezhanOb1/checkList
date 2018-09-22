import React from 'react'
import heartImage from '../../assets/images/heart.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">
                <p>
                    &#169; 2008-2018 MADE WITH
                    <img src="" alt=""/>
                    <img src={heartImage} alt="heart" className="heartImage"/>
                    <span className="beforeBorder">BY MIRUSDESK</span>
                    <span className="afterBorder">RELEASE 4.0</span>
                    <span className="footer-icons">
                        <i className="fas fa-cog" />
                        <i className="fas fa-exclamation-circle" />
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Footer