import { Avatar, Box, Button, Flex, Grid, Heading, Text, VStack, Input, InputGroup, InputLeftElement, Stack, Spacer, Select, HStack, Image, CloseButton, Switch, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React, { useState } from 'react'
import UserIcon from '../../../assets/images/icons/icons-set/linear/profile.svg'
import NotificationBell from '../../../assets/images/icons/icons-set/linear/notification.svg'
import SecurityIcon from '../../../assets/images/icons/icons-set/linear/shield-security.svg'
import TermsIcon from '../../../assets/images/icons/icons-set/linear/document-text.svg'
import ArrowRightIcon from '../../../assets/images/icons/icons-set/linear/arrow-right.svg'


const Settings = () => {

    const [editProfile, setEditProfile] = useState(null);
    const handleEditProfile = (id='edit')=> setEditProfile(id !== 'edit' ? <KnowCustomer/> : <UpdateProfile/>);


    return (
        <Box width="full" height="100vh" direction="row">
            <HStack w="full">
                <Tabs borderBottom="#FDFDFD" w="100%">
                    <TabList>
                        <Tab> <Image src= { UserIcon } alt="Empty User" mr="16px" /> Profile</Tab>
                        <Tab> <Image src= { NotificationBell } alt="Empty User" mr="16px" /> Notification</Tab>
                        <Tab> <Image src= { SecurityIcon } alt="Empty User" mr="16px" /> Security and Privacy</Tab>
                        <Tab> <Image src= { TermsIcon } alt="Empty User" mr="16px" /> Terms and Conditions</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel width="100%">
                            <Flex w="100%" justifyContent="space-between">

                                

                                    <VStack alignItems="left" w="35%" h="100%" bg="#fff" alignItems="left" justifyContent="space-between" padding="40px" borderRadius="16px">
                                        <HStack display="flex" cursor="pointer" justifyContent="space-between" alignItems="center" onClick={ ()=> handleEditProfile('edit') }>
                                            <Text> Profile </Text>
                                            
                                            <Image src={ ArrowRightIcon } alt=" The Arrow Right Icon" />
                                        </HStack>
                                        <Spacer />
                                        <Spacer />
                                        <Spacer />
                                        <Spacer />
                                        
                                        <HStack display="flex" cursor="pointer" justifyContent="space-between" alignItems="center" onClick={ ()=> handleEditProfile('kyc') }>
                                            <Text > KYC Details </Text>
                                            <Image src={ ArrowRightIcon } alt=" The Arrow Right Icon" />
                                        </HStack>
                                        
                                    </VStack>

                                    <Box w="55%" mr="5" ml="5"> { editProfile }</Box>
                                
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

const UpdateProfile = ()=>{
    return(
        <Box w="full" justifyContent="left">
            <HStack w="full" display="flex" justifyContent="space-between">
                <Text fontWeight="700">Profile</Text>
                <Button bgColor="secondary.100" width="14rem" alignItem="right" color="#fff">Save Changes</Button>
            </HStack>


            <VStack w="full" justifyContent="left" >
                <VStack w="full" display="flex" alignItems="left">
                    <Text justifyContent="left">First name</Text>
                    <InputGroup>
                        <Input variant='outline' placeholder='First Name' />
                    </InputGroup>

                    <Spacer/>

                    <Text justifyContent="left">Last name</Text>
                    <InputGroup>
                        <Input variant='outline' placeholder='Last Name' />
                    </InputGroup>

                    <Spacer/>

                    <Text justifyContent="left">Username</Text>
                    <InputGroup>
                        <Input variant='outline' placeholder='Username' />
                    </InputGroup>

                    <Spacer/>

                    <Text justifyContent="left">Email</Text>
                    <InputGroup>
                        <Input variant='outline' type='email' placeholder='Email' />
                    </InputGroup>
                    
                </VStack>
            </VStack>
        </Box>
    )
}

const KnowCustomer = ()=>{
    return(
        <div>
            <h1> Hello</h1>
        </div>
    )
}

export default Settings
