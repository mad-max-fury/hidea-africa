import { Avatar, AvatarBadge, FormControl, Box, HStack, Icon, Image, Input, InputGroup, InputLeftElement, Spacer, Switch, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Search2Icon } from "@chakra-ui/icons"


import user from '../../../assets/images/users/mira.jpg'

const Header = ()=> {
    return (
        <header className="fixed flex flex-row place-content-end align-middle shadow-md w-full h-20 px-16">

            { /* Search section */ }
            <Box width="container.sm" display="flex" alignItems="center" justifyContent="flex-start">
                <InputGroup width="437px">
                    <InputLeftElement
                    pointerEvents='none'
                    children={<Search2Icon color='gray.300' />}
                    />
                    <Input type='text' placeholder='Search' />
                </InputGroup>
            </Box>

            <HStack>
                <Text fontWeight="700">SC</Text>
                <FormControl width="fit-content" zIndex="1">
                    <Switch id='email-alerts' />
                </FormControl>
                <Text fontWeight="700">NGN</Text>
                <Spacer /><Spacer />
                <Icon name="notification" />
                <Spacer />

                <UserAvatar avatar={ user } name="Mirabel Watson" />
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
