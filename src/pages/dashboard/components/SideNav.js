import { Box, Image, List, ListItem, ListIcon } from '@chakra-ui/react'
import React, { useState } from 'react'

import hideaLogo from "../../../assets/images/logo/Hidea-logo.svg"


//Linear icons
import DashboardIcon from '../../../assets/images/icons/icons-set/linear/category.svg'
import SettingsIcon from '../../../assets/images/icons/icons-set/linear/setting-2.svg'
import WalletIcon from '../../../assets/images/icons/icons-set/linear/wallet.svg'
import IdeaPooolIcon from '../../../assets/images/icons/icons-set/linear/box.svg'
import SupportIcon from '../../../assets/images/icons/icons-set/linear/device-message.svg'
import MyIdeasIcon from '../../../assets/images/icons/icons-set/linear/lock.svg'
import LogoutIcon from '../../../assets/images/icons/icons-set/linear/logout.svg'


//BoldIcons
import DashboardIconBold from '../../../assets/images/icons/icons-set/bold/category.svg'
import SettingsIconBold from '../../../assets/images/icons/icons-set/bold/setting-2.svg'
import WalletIconBold from '../../../assets/images/icons/icons-set/bold/wallet.svg'
import IdeaPooolIconBold from '../../../assets/images/icons/icons-set/bold/box.svg'
import SupportIconBold from '../../../assets/images/icons/icons-set/bold/device-message.svg'
import MyIdeasIconBold from '../../../assets/images/icons/icons-set/bold/lock.svg'


const SideNav = ()=> {

    const [tabItems, setTabItems] = useState([
        {text: "Dashboard", TabIcon: DashboardIcon, TabIconActive: DashboardIconBold, active: true},
        {text: "My ideas", TabIcon: MyIdeasIcon, TabIconActive: MyIdeasIconBold, active: false},
        {text: "Ideas pool", TabIcon: IdeaPooolIcon, TabIconActive: IdeaPooolIconBold, active: false},
        {text: "Wallet", TabIcon: WalletIcon, TabIconActive: WalletIconBold, active: false},
        {text: "Settings", TabIcon: SettingsIcon, TabIconActive: SettingsIconBold, active: false},
        {text: "Support", TabIcon: SupportIcon, TabIconActive: SupportIconBold, active: false}
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
        <aside className="aside_nav h-full z-10 bg-white">

                <Box ml="8" mb="16">
                    <Image src={ hideaLogo } alt="hidea logo"/>
                </Box>


            {/* Nav/Tab List */}
            <List>

                {
                    tabItems.map(({ TabIcon, TabIconActive, text, active }, idx) => (
                        <ListItem key={idx} onClick={()=> changeActiveTab(idx)} padding="4" pl="8" cursor="pointer" display="flex" borderRadius="8px" borderTopLeftRadius="0" borderBottomLeftRadius="0" alignItems="center" bg={active ? "#73DA9E" : null} color={active ? "#fff" : "#57575b"}>
                            { <Image color="#fff" src={ active ? TabIconActive : TabIcon } alt={ text } mr="18px"/> }
                            { text }
                        </ListItem>
                    ))
                }

                {/* Logout Button */}
                <ListItem color="error.100" padding="4" pl="8" cursor="pointer" display="flex" borderRadius="8px" borderTopLeftRadius="0" borderBottomLeftRadius="0" alignItems="center" mt="204px">
                    <Image color="danger.100" src={ LogoutIcon } alt="Logout" mr="18px"/>
                    Logout
                </ListItem>

            </List>

        </aside>
    )
}

export default SideNav
