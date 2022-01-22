import React from 'react'
import "./Footer.css"
import twitter from "../assets/images/icons/twitter.svg"
import instagram from "../assets/images/icons/instagram.svg"
import linkedin from "../assets/images/icons/linkedin.svg"
import { Icon } from './UI/Icon'



export const Footer = () => {


    return (
        <footer className="footer">
            <div className="footer-container">
                <span className="text-muted">
                    <p className="copy-right">@hidea.africa 2021 all right reserved</p>
                </span>
                <div className="footer-right">
                    <div className="footer-icons">
                        <Icon name={twitter} link="https://twitter.com/HideaAfrica" />
                        <Icon name={instagram} link="https://www.instagram.com/hidea.africa/" />
                        <Icon name={linkedin} link="https://www.linkedin.com/company/hidea-africa/" />
                    </div>
                    <p className="footer-text">
                        <a href="https://hidea.africa/privacy-policy/" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
