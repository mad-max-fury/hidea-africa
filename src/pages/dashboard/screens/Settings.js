import { Avatar, Box, Button, Flex, Grid, Heading, Text, VStack, Input, InputGroup, InputLeftElement, Stack, Spacer, Select, HStack, Image, CloseButton, Switch, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React, { useState } from 'react'
import UserIcon from '../../../assets/images/icons/icons-set/linear/profile.svg'
import NotificationBell from '../../../assets/images/icons/icons-set/linear/notification.svg'
import SecurityIcon from '../../../assets/images/icons/icons-set/linear/shield-security.svg'
import TermsIcon from '../../../assets/images/icons/icons-set/linear/document-text.svg'
import ArrowRightIcon from '../../../assets/images/icons/icons-set/linear/arrow-right.svg'


const Settings = () => {

    const [editProfile, setEditProfile] = useState(null);
    const handleEditProfile = ()=> setEditProfile()


    return (
        <Box width="full" height="100vh" direction="row">
            <HStack w="full">
                <Tabs borderBottom="#FDFDFD">
                    <TabList>
                        <Tab> <Image src= { UserIcon } alt="Empty User" mr="16px" /> Profile</Tab>
                        <Tab> <Image src= { NotificationBell } alt="Empty User" mr="16px" /> Notification</Tab>
                        <Tab> <Image src= { SecurityIcon } alt="Empty User" mr="16px" /> Security and Privacy</Tab>
                        <Tab> <Image src= { TermsIcon } alt="Empty User" mr="16px" /> Terms and Conditions</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Flex w="full">

                                

                                    <VStack alignItems="left" w="60%" bg="#fff" alignItems="left" justifyContent="space-between" padding="40px" borderRadius="16px">
                                        <HStack display="flex" justifyContent="space-between" alignItems="center" onClick={ editProfile }>
                                            <Text > Profile </Text>
                                            <Image src={ ArrowRightIcon } alt=" The Arrow Right Icon" />
                                        </HStack>
                                        <Spacer />
                                        <Spacer />
                                        <Spacer />
                                        <Spacer />
                                        
                                        <HStack display="flex" justifyContent="space-between" alignItems="center">
                                            <Text > KYC Details </Text>
                                            <Image src={ ArrowRightIcon } alt=" The Arrow Right Icon" />
                                        </HStack>
                                    
                                        
                                    </VStack>
                                
                            </Flex>
                        </TabPanel>
                        <TabPanel>
                            <Box w="60%" color="#57575B" bg="#fff" alignItems="left" justifyContent="left" padding="40px" borderRadius="16px">
                                <HStack display="flex" justifyContent="space-between" alignItems="center">
                                    <Text > Mute all notications</Text>
                                    <Switch colorScheme='green' id='toggle' />
                                </HStack>
                                <Spacer/>
                                <Spacer/>
                                <Spacer/>

                                <VStack alignItems="left">
                                    <Text fontWeight="700" mt="50px" color="#030309"> Remainders </Text>
                                    <Text> Set remainders for the following </Text>
                                    <Spacer />
                                    <Spacer />
                                    <Spacer />
                                    <HStack display="flex" justifyContent="space-between" alignItems="center">
                                        <Text > Posts</Text>
                                        <Switch colorScheme='green' id='toggle' />
                                    </HStack>
                                    
                                    <HStack display="flex" justifyContent="space-between" alignItems="center">
                                        <Text > Messages</Text>
                                        <Switch colorScheme='green' id='toggle' />
                                    </HStack>
                                    
                                </VStack>
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Flex w="full">

                                <Box w="60%" color="#57575B" display="flex" flexDirection="column" bg="#fff" alignItems="left" justifyContent="space-between" padding="40px" borderRadius="16px">
                                    <HStack display="flex" justifyContent="space-between" alignItems="center">
                                        <Text > Enable two factor authentication</Text>
                                        <Switch colorScheme='green' id='toggle' />
                                    </HStack>
                                    <Spacer/>
                                    <Spacer/>
                                    <Spacer/>

                                    <VStack alignItems="left">
                                        
                                        <Spacer />
                                        <Spacer />
                                        <Spacer />
                                        <Spacer />
                                        <HStack display="flex" justifyContent="space-between" alignItems="center">
                                            <Text > Change password </Text>
                                            <Image src={ ArrowRightIcon } alt=" The Arrow Right Icon" />
                                        </HStack>
                                        <Spacer />
                                        <Spacer />
                                        <Spacer />
                                        <Spacer />
                                        
                                        <HStack display="flex" justifyContent="space-between" alignItems="center">
                                            <Text > Set transaction pin </Text>
                                            <Image src={ ArrowRightIcon } alt=" The Arrow Right Icon" />
                                        </HStack>
                                    
                                        
                                    </VStack>
                                </Box>
                            </Flex>
                        </TabPanel>
                        <TabPanel>
                            <p>three!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </HStack>
        </Box>
    )
}

export default Settings
