import React from 'react'
import { HStack, List, ListItem, Link } from '@chakra-ui/react';

import {
    Link as RouteLink,
} from 'react-router-dom';

export const TopNav = (props) => {
    return (
        <HStack className='topNav_container' display={{ base: 'flex', md: 'none' }} width='100%' flexDirection='column' alignItems='flex-start'>
            <nav className='topNav' style={{
                width: '100%',
                display: 'flex',
                order: '2',
                justifyContent: 'space-between',
            }} >
                <List spacing={4} display='flex' flexDirection='row' alignItems='center' w='100%' style={{
                    overflowX: 'auto',
                }}>
                    <ListItem spacing={2} marginRight='11em' padding='0.5em'>
                        <Link as={RouteLink} to="/application/accreditation"
                            _active={{ fontWeight: 'bold' }}
                            display="flex" flexDirection="row" alignItems="center"
                            justifyContent="flex-start" style={{ textDecoration: 'none' }}>
                            Accreditation</Link>
                    </ListItem>
                    <ListItem spacing={2} marginRight='11em' padding='0.5em'>
                        <Link as={RouteLink} to="/application/investment-goals"
                            _active={{ fontWeight: 'bold' }}
                            display="flex" flexDirection="row" alignItems="center"
                            justifyContent="flex-start" style={{ textDecoration: 'none' }}>
                            Investment Goals</Link>
                    </ListItem>
                    <ListItem spacing={2} marginRight='11em' padding='0.5em'>
                        <Link as={RouteLink} to="/application/documentation"
                            _active={{ fontWeight: 'bold' }}
                            display="flex" flexDirection="row" alignItems="center"
                            justifyContent="flex-start" style={{ textDecoration: 'none' }}>
                            Documentation</Link>
                    </ListItem>
                    <ListItem spacing={2} marginRight='11em' padding='0.5em'>
                        <Link as={RouteLink} to="/application/terms-and-conditions"
                            _active={{ fontWeight: 'bold' }}
                            display="flex" flexDirection="row" alignItems="center"
                            justifyContent="flex-start" style={{ textDecoration: 'none' }}>
                            Terms and Conditions</Link>
                    </ListItem>
                </List>
            </nav>
            {props.children}
        </HStack>
    )
}
