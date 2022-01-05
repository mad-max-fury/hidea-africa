import React from 'react';
import { Link as Rlink } from 'react-router-dom';
import HideaLogo from '../../assets/images/logo/Hidea-logo.svg'
import { Image } from '@chakra-ui/react';

export const MainHeader = () => {
    return (
        <header className='h-20 p-5' position="sticky" top={0} left={0} zIndex={1} >
            <Rlink to="/" className='width:fit-content justify-center align-middle' >
                <Image width="100px" src={HideaLogo} alt="logo" />
            </Rlink>
        </header>
    )
}
