import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import HideaLogo from '../../assets/images/logo/Hidea-logo.svg'
import { Image } from '@chakra-ui/react';

export const MainHeader = (props) => {
    return (
        <header className='h-20 p-5' style={{
            position: 'sticky',
            top: 0,
            left: 0,
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: props.isCentered ? 'center' : 'flex-start',
        }} >
            <RouteLink to="/" className='width:fit-content justify-center align-middle' >
                <Image width="100px" src={HideaLogo} alt="logo" />
            </RouteLink>
        </header>
    )
}
