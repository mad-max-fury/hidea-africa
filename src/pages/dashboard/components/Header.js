import { Avatar, AvatarBadge, FormControl, Box, HStack, Icon, Image, Input, InputGroup, InputLeftElement, Spacer, Switch, Text, VStack } from '@chakra-ui/react'
import React from 'react'

import NotificationBold from '../../../assets/images/icons/icons-set/bold/notification.svg'
import SearchIcon from '../../../assets/images/icons/icons-set/linear/search-normal.svg'


import user from '../../../assets/images/users/mead.jpg'

const Header = ()=> {
    return (
        <header className="flex flex-row place-content-end align-middle shadow-md w-full h-20 px-16 bg-white">

            { /* Search section */ }
            <Box width="container.sm" display="flex" alignItems="center" justifyContent="flex-start">
                <InputGroup width="437px" variant="filled">
                    <InputLeftElement
                    pointerEvents='none'
                    children={<Image src={ SearchIcon } alt="Search Icon" color='gray.300' />}
                    />
                    <Input type='text' placeholder='Search' />
                </InputGroup>
            </Box>

            <HStack>
                <Text fontWeight="700">SC</Text>
                <Switch id='email-alerts' />
                <Text fontWeight="700">NGN</Text>
                <Spacer /><Spacer />
                <Image src={NotificationBold} alt="Notification Bold Icon" />
                <Spacer />

                <UserAvatar avatar={ user } name="Magaret Mead" />
            </HStack>
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
