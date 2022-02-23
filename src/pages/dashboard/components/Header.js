import { Avatar, AvatarBadge, Heading, Box, HStack, Icon, Image, Input, InputGroup, InputLeftElement, Spacer, Switch, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { 
    useParams
 } from 'react-router-dom'

import NotificationBold from '../../../assets/images/icons/icons-set/bold/notification.svg'
import SearchIcon from '../../../assets/images/icons/icons-set/linear/search-normal.svg'


import user from '../../../assets/images/users/mead.jpg'

const Header = ()=> {
    let { route } = useParams();

    String.prototype.toTitleCase = function(){
        
        const firstChar = this[0].toUpperCase();
        const str = this.replace(this[0], firstChar).replaceAll("-", " ");

        return str;

    }

    return (
        <header className="flex flex-row place-content-end align-middle shadow-md w-full h-20 px-8 bg-white">

            { /* Search section */ }
            <Box width="full" display="flex" alignItems="center" justifyContent="space-between">
                <Heading>{ route === "index" ? "Dashboard" : route.toTitleCase() }</Heading>
                <InputGroup width="20%" variant="filled">
                    <InputLeftElement
                    pointerEvents='none'
                    children={<Image src={ SearchIcon } alt="Search Icon" color='gray.300' />}
                    />
                    <Input type='text' placeholder='Search' />
                </InputGroup>
            </Box>

            {/* <HStack>
                <Text fontWeight="700">NGN</Text>
                <Switch id='email-alerts' />
                <Text fontWeight="700">SC</Text>
                <Spacer /><Spacer />
                <Image src={NotificationBold} alt="Notification Bold Icon" />
                <Spacer />

                <UserAvatar avatar={ user } name="Magaret Mead" />
            </HStack> */}
        </header>
    )
}


//Avatar component
const UserAvatar = ({ avatar, name }) => {
    return (
        <HStack>
            <Avatar src={ avatar } border="ActiveBorder" borderRadius="8px" width="32px" height="32px">
                <AvatarBadge boxSize='11px' borderWidth="2px" bg='green.500' position="absolute" top="-10px" />
            </Avatar>
            <Text fontWeight="400">{ name }</Text>
        </HStack>
    )
}

export default Header
