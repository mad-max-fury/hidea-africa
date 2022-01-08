import React, { useState } from 'react'
import { Box, VStack, List, ListItem, Link } from '@chakra-ui/react';
import { GreenTick } from '../../../assets/images/icons/Icons';

import {
    Link as RouteLink,
} from 'react-router-dom';

export const SideNav = (props) => {
    const [tabItems, setTabItems] = useState([
        { text: "Accreditation", link: "accreditation", TabNumber: "1", TabComplete: GreenTick, active: true },
        { text: "Investment Goals", link: "investment-goals", TabNumber: "2", TabComplete: GreenTick, active: false },
        { text: "Documentation", link: "documentation", TabNumber: "3", TabComplete: GreenTick, active: false },
        { text: "Terms and Conditions", link: "terms-and-conditions", TabNumber: "4", TabComplete: GreenTick, active: false },
    ]);

    const changeActiveTab = (idx) => {
        console.log(idx);
        //Make all tabs inactive
        tabItems.forEach(tab => tab.active = false);

        //Make copy of tabItems
        const tabsCopy = tabItems.filter(tab => tab.active === false);

        //Make current tab active
        tabsCopy[idx].active = true;
        setTabItems(tabsCopy);
    }
    return (
        <VStack
            display={{ base: 'none', md: 'flex' }}
            w={{ md: '20%', lg: '20%' }}
            h='100%'
            p={5}
            pb={32}
            borderRight="1px solid #eaeaea"
            spacing={8}
            justifyContent="center"
            className={props.className}
        >
            <nav className='sideNav'>
                <List spacing={4}>
                    {
                        tabItems.map(({ text, link, TabNumber, TabComplete, active }, idx) => {
                            return (
                                <ListItem spacing={4} key={idx}>
                                    <Link as={RouteLink} to={`/application/${link}`} onClick={(e) => changeActiveTab(idx)}
                                        _hover={{ color: 'black' }}
                                        _focus={{ color: 'black' }}
                                        _active={{ color: 'black', fontWeight: 'bold' }}
                                        color={active ? 'black' : '#DFDFE3'}
                                        fontWeight={active ? 'bold' : 'normal'}
                                        display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start"
                                        textDecoration="none">
                                        <Box border={active ? "1px solid #2DC86D" : "1px solid #DFDFE3"} mr="1.5em" borderRadius="50%"
                                            color={active ? '#2DC86D' : '#DFDFE3'}
                                            w="30px" h="30px" textAlign="center" p="3px">{TabNumber}</Box> {text}
                                    </Link>
                                </ListItem>
                            )

                        }
                        )}
                </List>
            </nav>
        </VStack>
    )
}
