import React from 'react'
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { Footer } from '../../components/Footer';

const ComingSoon = () => {
    return (
        <div className="coming-soon">
            <span className="left-eclipse"></span>
            <span className="right-eclipse"></span>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default ComingSoon