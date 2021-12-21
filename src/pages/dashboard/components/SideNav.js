import { Box, Image, List, ListItem, ListIcon } from '@chakra-ui/react'
import { AddIcon, ArrowLeftIcon } from "@chakra-ui/icons"
import React, { useState } from 'react'

import hideaLogo from "../../../assets/images/logo/Hidea-logo.svg"

import CategoryIcon from '../../../assets/images/icons/icons-set/linear/category.svg'
import SettingIcon from '../../../assets/images/icons/icons-set/linear/setting-2.svg'
import WalletIcon from '../../../assets/images/icons/icons-set/linear/wallet.svg'




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
        console.log(idx);
        const tabs = tabItems.forEach(tab => tab.active = false);
        tabs[idx].active = true;
        setTabItems(tabs);
    }


    return (
        <aside className="aside_nav h-full z-10 bg-white">

                <Box ml="8" mb="16">
                    <Image src={ hideaLogo } alt="hidea logo"/>
                </Box>


            {/* Nav/Tab List */}
            <List>

                {
                    tabItems.map(({ TabIcon, text, active }, idx) => (
                        <ListItem key={idx} onClick={()=> changeActiveTab(idx)} padding="4" pl="8" cursor="pointer" display="flex" borderRadius="8px" borderTopLeftRadius="0" borderBottomLeftRadius="0" alignItems="center" bg={active ? "#73DA9E" : null} color={active ? "#fff" : null}>
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
