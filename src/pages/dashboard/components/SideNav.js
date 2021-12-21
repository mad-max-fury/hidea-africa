import { Box, Image, List, ListItem, ListIcon } from '@chakra-ui/react'
import { AddIcon, ArrowLeftIcon } from "@chakra-ui/icons"
import React, { useState } from 'react'

import hideaLogo from "../../../assets/images/logo/Hidea-logo.svg"

const SideNav = ()=> {

    const [tabItems, setTabItems] = useState([
        {text: "Dashboard", TabIcon: AddIcon, active: true},
        {text: "My ideas", TabIcon: AddIcon, active: false},
        {text: "Ideas pool", TabIcon: AddIcon, active: false},
        {text: "Wallet", TabIcon: AddIcon, active: false},
        {text: "Settings", TabIcon: AddIcon, active: false},
        {text: "Support", TabIcon: AddIcon, active: false}
    ]);



    const changeActiveTab = (idx) => {
        const tabs = tabItems.forEach(tab => tab.active = false);
        tabs[idx].active = true;
        setTabItems(tabs);
    }


    return (
        <aside className="aside_nav fixed left-0 top-0 h-full bg-white">

                <Box ml="8" mb="16">
                    <Image src={ hideaLogo } alt="hidea logo"/>
                </Box>


            {/* Nav/Tab List */}
            <List>

                {
                    tabItems.map(({ TabIcon, text, active }, idx) => (
                        <ListItem onClick={()=> changeActiveTab(idx)} padding="4" pl="8" cursor="pointer" display="flex" borderRadius="8px" borderTopLeftRadius="0" borderBottomLeftRadius="0" alignItems="center" bg={active ? "#73DA9E" : null} color={active ? "#fff" : null}>
                            { <ListIcon as={TabIcon} mr="18px" /> }
                            { text }
                        </ListItem>
                    ))
                }

                {/* Logout Button */}
                <ListItem color="error.100" padding="4" pl="8" cursor="pointer" display="flex" borderRadius="8px" borderTopLeftRadius="0" borderBottomLeftRadius="0" alignItems="center" mt="204px">
                    <ListIcon as={ArrowLeftIcon} mr="18px" />
                    Logout
                </ListItem>

            </List>

        </aside>
    )
}

export default SideNav
