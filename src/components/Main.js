import React from 'react';
import "./Main.css";
import { MailForm } from './UI/MailForm';
import hero from "../assets/images/hero-img.png";

export const Main = () => {
    return (
        <main className="main-content">
            <div className="main-container">
                <div className="main-content__left">
                    <div className="main-content__cst">
                        <h6 className="cst">Coming Soon</h6>
                    </div>
                    <div className="main-content__title">
                        <h1 className="title">If you can think it, <br /> you can sell it!</h1>
                        <p className="subtitle">Get notified when we launch.</p>
                    </div>
                    <MailForm />
                </div>
                <div className="main-content__right">
                    <div className="main-content__right-img">
                        <img src={hero} alt="hero" />
                    </div>
                </div>
            </div>
        </main>
    )
}
