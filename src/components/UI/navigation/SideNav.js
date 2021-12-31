import React from 'react'
import { Box, VStack, List, ListItem, Link } from '@chakra-ui/react';

import {
    Link as RouteLink,
} from 'react-router-dom';

export const SideNav = (props) => {
    return (
        <VStack
            display={{ base: 'none', md: 'block' }}
            w={{ md: '30%', lg: '30%' }}
            p={5}
            pb={24}
            borderRight="1px solid #eaeaea"
            spacing={8}
        >
            <nav className='sideNav'>
                <List spacing={4}>
                    <ListItem spacing={8} _active={{ fontWeight: 'bold' }} >
                        <Link as={RouteLink} to="/application/accreditation"
                            _hover={{ fontWeight: 'bold' }}
                            _focus={{ fontWeight: 'bold' }}
                            _active={{ fontWeight: 'bold' }}
                            display="flex" flexDirection="row" alignItems="center"
                            justifyContent="flex-start" style={{ textDecoration: 'none' }} >
                            <Box border="1px solid #DFDFE3" mr="1.5em" borderRadius="50%"
                                _active={{ color: '#2DC86D', border: '1px solid #2DC86D' }}
                                w="30px" h="30px" textAlign="center" p="3px" color="#DFDFE3">1</Box>
                            Accreditation</Link>
                    </ListItem>
                    <ListItem spacing={8}>
                        <Link as={RouteLink} to="/application/investment-goals"
                            _hover={{ fontWeight: 'bold' }}
                            _focus={{ fontWeight: 'bold' }}
                            _active={{ fontWeight: 'bold' }}
                            display="flex" flexDirection="row" alignItems="center"
                            justifyContent="flex-start" style={{ textDecoration: 'none' }}>
                            <Box border="1px solid #DFDFE3" mr="1.5em" borderRadius="50%"
                                _active={{ color: '#2DC86D', border: '1px solid #2DC86D' }}
                                w="30px" h="30px" textAlign="center" p="3px" color="#DFDFE3">2</Box>
                            Investment Goals</Link>
                    </ListItem>
                    <ListItem spacing={8} >
                        <Link as={RouteLink} to="/application/documentation"
                            _hover={{ fontWeight: 'bold' }}
                            _focus={{ fontWeight: 'bold' }}
                            _active={{ fontWeight: 'bold' }}
                            display="flex" flexDirection="row" alignItems="center"
                            justifyContent="flex-start" style={{ textDecoration: 'none' }}>
                            <Box border="1px solid #DFDFE3" mr="1.5em" borderRadius="50%"
                                _active={{ color: '#2DC86D', border: '1px solid #2DC86D' }}
                                w="30px" h="30px" textAlign="center" p="3px" color="#DFDFE3">3</Box>
                            Documentation</Link>
                    </ListItem>
                    <ListItem spacing={8}>
                        <Link as={RouteLink} to="/application/terms-and-conditions"
                            _hover={{ fontWeight: 'bold' }}
                            _focus={{ fontWeight: 'bold' }}
                            _active={{ fontWeight: 'bold' }}
                            display="flex" flexDirection="row" alignItems="center"
                            justifyContent="flex-start" style={{ textDecoration: 'none' }}>
                            <Box border="1px solid #DFDFE3" mr="1.5em" borderRadius="50%"
                                w="30px" h="30px" textAlign="center" p="3px" color="#DFDFE3"
                                _active={{ color: '#2DC86D', border: '1px solid #2DC86D' }}>4</Box>
                            Terms and <br /> Conditions</Link>
                    </ListItem>
                </List>
            </nav>
        </VStack>
    )
}
