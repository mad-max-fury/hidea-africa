import { Box, Image, List, ListItem, ListIcon, Switch, Text, Spacer, HStack, Divider, VStack, Avatar, AvatarBadge,} from '@chakra-ui/react'
import React, { useState } from 'react'

import hideaLogo from "../../../assets/images/logo/Hidea-logo.svg"
import user from '../../../assets/images/users/mead.jpg'


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
import NotificationBold from '../../../assets/images/icons/icons-set/bold/notification.svg'
import { useNavigate, useParams } from 'react-router-dom'


const SideNav = ()=> {

    const navigate = useNavigate();
    const params = useParams();

    const [tabItems, setTabItems] = useState([
        {text: "Dashboard", TabIcon: DashboardIcon, TabIconActive: DashboardIconBold, active: params.route === "index"},
        {text: "My ideas", TabIcon: MyIdeasIcon, TabIconActive: MyIdeasIconBold, active: params.route === "my-ideas"},
        {text: "Ideas pool", TabIcon: IdeaPooolIcon, TabIconActive: IdeaPooolIconBold, active: params.route === "ideas-pool"},
        {text: "Wallet", TabIcon: WalletIcon, TabIconActive: WalletIconBold, active: params.route === "wallet"},
        {text: "Settings", TabIcon: SettingsIcon, TabIconActive: SettingsIconBold, active: params.route === "settings"},
        {text: "Support", TabIcon: SupportIcon, TabIconActive: SupportIconBold, active: params.route === "support"}
    ]);



    const changeActiveTab = (idx, text) => {
        console.log(idx);
        //Make all tabs inactive
        tabItems.forEach(tab => tab.active = false);

        //Make copy of tabItems
        const tabsCopy = tabItems.filter(tab => tab.active === false);

        //Make current tab active
        tabsCopy[idx].active = true;
        setTabItems(tabsCopy);

        //Route
        navigate(text === "Dashboard" ? "/dashboard/index" : `/dashboard/${text.toLowerCase().replace(" ", "-")}`);
    }


    return (
        <aside className="aside_nav h-full z-10 bg-white">

                <Box ml="8" mb="12">
                <Image
                    src={hideaLogo}
                    width="120px"
                    alt="hidea logo" />
                </Box>


            {/* Nav/Tab List */}
            <List>

                {
                    tabItems.map(({ TabIcon, TabIconActive, text, active }, idx) => (
                        <ListItem key={idx} onClick={()=> changeActiveTab(idx, text)} padding="4" pl="8" cursor="pointer" display="flex" borderRadius="8px" borderTopLeftRadius="0" borderBottomLeftRadius="0" alignItems="center" bg={active ? "#73DA9E" : null} color={active ? "#fff" : "#57575b"}>
                            { <Image color="#fff" src={ active ? TabIconActive : TabIcon } alt={ text } mr="18px"/> }
                            { text }
                        </ListItem>
                    ))
                }

                {/* Logout Button */}
                {/* <ListItem color="error.100" padding="4" pl="8" cursor="pointer" display="flex" borderRadius="8px" borderTopLeftRadius="0" borderBottomLeftRadius="0" alignItems="center" mt="204px">
                    <Image color="danger.100" src={ LogoutIcon } alt="Logout" mr="18px"/>
                    Logout
                </ListItem> */}

            </List>
            <VStack mt="5rem" pl="8" alignItems="flex-start">
                <Spacer/>
                <HStack spacing="4">
                    <UserAvatar avatar={ user } name="Magaret Mead" />
                    {/* Dots */}
                    <HStack spacing="0.5" cursor="pointer">
                        <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                    </HStack>
                </HStack>
                <Spacer />
                <Divider w="80%" />
                <Spacer />
                <HStack>

                    <Text fontWeight="700">NGN</Text>
                    <Switch id='email-alerts' />
                    <Text fontWeight="700">SC</Text>
                    <Spacer /><Spacer />
                    <Spacer />

                </HStack>
                
            </VStack>
        </aside>
    )
}

const UserAvatar = ({ avatar, name }) => {
    return (
        <HStack justifyContent="space-between">
            <Avatar src={ avatar } border="ActiveBorder" borderRadius="8px" width="32px" height="32px">
                <AvatarBadge boxSize='15px' borderWidth="2px" bg='green.500' position="absolute" top="-10px" />
            </Avatar>
            <VStack alignItems="flex-start" spacing="2px">
                <Text fontSize="12px" color="secondary.100">Verified</Text>
                <Text fontWeight="700" fontSize="14px">{ name }</Text>
            </VStack>
        </HStack>
    )
}


export default SideNav
