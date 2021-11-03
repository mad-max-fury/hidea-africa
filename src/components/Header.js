import React from 'react'
import "./Header.css";
import logo from "../images/logo/Hidea-logo.svg";
import { Button } from './UI/Button';
import { Mailto } from './UI/Mailto';

export const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Mailto email="contact@hidea.africa" subject="Hello & Welcome" body="Hello world!">
                                <Button className="btn" text="Contact" type="button" />
                            </Mailto>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
