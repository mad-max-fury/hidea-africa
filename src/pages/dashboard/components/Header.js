import { Avatar, AvatarBadge, Box, HStack, Icon, Image, InputAddon, Switch, Text, VStack } from '@chakra-ui/react'
import React from 'react'


import user from '../../../assets/images/users/mira.jpg'

const Header = ()=> {
    return (
        <header className="fixed flex flex-row place-content-end align-middle shadow-md w-full h-20 px-16">
            <HStack>
                <Text fontWeight="700">SC</Text>
                <Switch />
                <Text fontWeight="700">NGN</Text>
                <Icon name="notification" />

                <UserAvatar avatar={ user } name="Mirabel Watson" />
            </HStack>
        </header>
    )
}


//Avatar component
const UserAvatar = ({ avatar, name }) => {
    return (
        <VStack>
            <Avatar src={ avatar }>
                <AvatarBadge boxSize='1.25em' bg='green.500' />
            </Avatar>
            <Text>{ name }</Text>
        </VStack>
    )
}

export default Header
