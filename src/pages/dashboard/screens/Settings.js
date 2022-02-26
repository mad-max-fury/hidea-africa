import { Avatar, Box, Flex, Grid, InputRightElement, Heading, Modal, ModalBody, ModalContent, ModalOverlay, ModalCloseButton, ModalHeader, Text, VStack, Input, InputGroup, InputLeftElement, Stack, Spacer, Select, HStack, Image, CloseButton, Switch, Tabs, TabList, TabPanels, Tab, TabPanel, Button as ChakraButton } from '@chakra-ui/react'

import { Button } from '../../../components/UI/Button'
import React, { useState } from 'react'
import UserIcon from '../../../assets/images/icons/icons-set/linear/profile.svg'
import NotificationBell from '../../../assets/images/icons/icons-set/linear/notification.svg'
import SecurityIcon from '../../../assets/images/icons/icons-set/linear/shield-security.svg'
import TermsIcon from '../../../assets/images/icons/icons-set/linear/document-text.svg'
import ArrowRightIcon from '../../../assets/images/icons/icons-set/linear/arrow-right.svg'
import KycVerIcon from '../../../assets/images/icons/kyc.svg'
import ErrorIcon from '../../../assets/images/icons/error.svg'
import HiddenEye from '../../../assets/images/icons/eye-slash.svg'
import Eye from '../../../assets/images/icons/eye.svg'


const Settings = () => {

    const [editProfile, setEditProfile] = useState(null);
    const handleEditProfile = (id='edit')=> setEditProfile(id !== 'edit' ? <KnowCustomer/> : <UpdateProfile/>);

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [changePassword, setChangePassword] = useState(false);
    const onClose = ()=> setChangePassword(false);

    const [changePin, setChangePin] = useState(false);
    const onPinModalClose = () => setChangePin(false);

    return (
        <Box width="full" height="100vh" direction="row">
            <VStack w="full">
                <Tabs variantColor="primary.100" w="100%" bg="#fff" alignContent="flex-start" orientation="vertical">
                    <TabList w="50%" borderRight="1.5px" h="70vh" borderRightStyle="solid" borderRightColor="#E5E5E5">
                        <Tab fontSize="16px" w="70%" h="3.4rem" justifyContent="left" _selected={{bg: "#D5F4E2", borderRadius: "8px"}}> <Image src= { UserIcon } alt="Empty User" mr="12px" /> <Text> Profile </Text> </Tab>
                        <Tab fontSize="16px" w="70%" h="3.4rem" mt="0.6rem" justifyContent="left" _selected={{bg: "#D5F4E2", borderRadius: "8px"}}> <Image src= { NotificationBell } alt="Notification Bell" mr="12px" /> <Text>Notification</Text> </Tab>
                        <Tab fontSize="16px" w="70%" h="3.4rem" mt="0.6rem" justifyContent="left" _selected={{bg: "#D5F4E2", borderRadius: "8px"}}> <Image src= { KycVerIcon } alt="KYC Icon" mr="15px" /> <Text>KYC Verification </Text> </Tab>
                        <Tab fontSize="16px" w="70%" h="3.4rem" mt="0.6rem" justifyContent="left" _selected={{bg: "#D5F4E2", borderRadius: "8px"}}> <Image src= { SecurityIcon } alt="Security Icon" mr="12px" /> <Text>Security and Privacy</Text> </Tab>
                        <Tab fontSize="16px" w="70%" h="3.4rem" mt="0.6rem" justifyContent="left" _selected={{bg: "#D5F4E2", borderRadius: "8px"}}> <Image src= { TermsIcon } alt="Terms and Condition Icon" mr="12px" /> <Text>Terms & Conditions</Text> </Tab>
                    </TabList>

                    <TabPanels bg="#fff">
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
                        <TabPanel pl="112px">
                            <Box w="60%" color="#57575B" bg="#fff" alignItems="left" justifyContent="left" borderRadius="16px">
                                <HStack display="flex" justifyContent="space-between" alignItems="center">
                                    <Text > Mute all notications</Text>
                                    <Switch colorScheme='green' id='toggle' />
                                </HStack>
                                <Spacer/>
                                <Spacer/>
                                <Spacer/>

                                <VStack alignItems="left">
                                    <Text fontWeight="700" mt="50px" color="#030309"> Reminders </Text>
                                    <Text> Set reminders for the following </Text>
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

                        </TabPanel>
                        <TabPanel w="full" ml="80px">
                            <Flex w="full">

                                <Box w="90%" color="#57575B" display="flex" flexDirection="column" bg="#fff" alignItems="left" justifyContent="space-between" borderRadius="16px">
                                    <HStack display="flex" justifyContent="space-between" alignItems="center">
                                        <Text > Enable two factor authentication</Text>
                                        <Switch colorScheme='green' color="secondary.100" id='toggle' />
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
                                            <VStack w="70%">
                                                <Text fontWeight="700" alignSelf="flex-start"> Change password </Text>
                                                <Text alignSelf="flex-start"> Change password to your account on Hidea </Text>
                                            </VStack>
                                            <Button type="submit" text="Change Password" onClick={()=> setChangePassword(true)} />
                                            {/* <Button colorScheme='teal' variant='outline' padding="1.5" color="secondary.100" >Change Password</Button> */}
                                        </HStack>
                                        <Spacer />
                                        <Spacer />
                                        <Spacer />
                                        <Spacer />
                                        
                                        <HStack display="flex" justifyContent="space-between" alignItems="center">
                        
                                            <VStack w="70%">
                                                <Text fontWeight="700" alignSelf="flex-start"> Set transaction pin </Text>
                                                <Text alignSelf="flex-start"> Pin used to authenticate/validate your withdrawal transaction on hidea </Text>
                                            </VStack>

                                            <Button colorScheme='teal' text="Set Transaction Pin" onClick={()=> setChangePin(true)} />
                                            
                                        </HStack>

                                        <Spacer/>
                                        <Spacer/>
                                        <Spacer/>
                                        <Spacer/>
                                        <Spacer/>
                                        <Spacer/>
                                        <HStack w="full" justifyContent="space-between">
                                            <Text>Privacy Policy</Text>
                                            <Image src={ArrowRightIcon} alt="arrow forward" />
                                        </HStack>
                                        
                                    </VStack>
                                </Box>
                            </Flex>
                        </TabPanel>
                        <TabPanel>
                            <Box>
                                <p>
                                    These Terms & Conditions constitute a legally binding agreement made between you, whether
                                    personally or on behalf of an entity (“Entrepreneurs and, or Investors”) and Hidea.Africa (“we”,
                                    “us” or “our”), concerning your access to and use of our mobile application/website (the
                                    “Application”). You agree that by accessing the Application, you have read, understood, and
                                    you agree to be bound by all of these Terms & Conditions Use. IF YOU DO NOT AGREE WITHALL OF THESE TERMS & CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING
                                    THE APPLICATION AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                                    </p>
                                    <br/>
                                    <p>
                                    Supplemental Terms and Conditions or documents that may be posted on the application from
                                    time to time are hereby expressly incorporated herein by reference. We reserve the right, in
                                    our sole discretion, to make changes or modifications to these Terms and Conditions at any
                                    time and for any reason. We will alert you about changes by the “Last updated” date of these Terms & Conditions and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms & Conditions to stay informed about
                                    updates. You will be subject to, and will be deemed to have been made aware of and to have
                                    accepted, the changes in any revised Terms & Conditions by your continued use of the
                                    Application after the date such revised terms are posted.
                                    </p>

                                    <br />
                                    <p>
                                    The information provided on the Application is not intended for distribution to or use by any
                                    person or entity in any jurisdiction or country where such distribution or use would be contrary
                                    to law or regulation, or which would subject us to any registration requirements within such
                                    jurisdiction or country. Accordingly, those persons who choose to access the Application from
                                    other locations do so on their own initiative and are solely responsible for compliance with local
                                    laws, if and to the extent local laws are applicable.
                                    </p>

                                    <br />
                                    <p>
                                    These Terms & Conditions were generated by Termly’s Terms and Conditions Generator.
                                    </p>

                                    <br />
                                    <p>
                                    The Application is intended for those who are at least 18 (eighteen) years old. Persons under
                                    the age of 13 are not permitted to register for the Application. Persons from the age of 13 to 17
                                    years can only register through their guardians.
                                    </p>

                                    <br />
                                    <Text fontWeight="bold">INTELLECTUAL PROPERTY RIGHTS</Text> 
                                    <br />
                                    <p>
                                        Unless otherwise indicated, the Application is our proprietary property and all source code,
                                        databases, functionality, software, website designs, audio, video, text, photographs and
                                        graphics on the application (collectively, the “content”) and the trademarks, service marks, and
                                        logos contained therein (the “Marks”) are owned and/or controlled by us or licensed to us, and
                                        are protected by copyright and trademark laws, and various other intellectual property rights
                                        and unfair competition laws of the Nigeria, foreign jurisdictions, and international conventions.
                                        The Content and the Marks are provided on the Application “AS IS” for your information and
                                        personal use only. Except as expressly provided in these Terms of Use, no parts of the
                                        Application, and no Content or Marks may be copied, reproduced, aggregated, republished,
                                        uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold,
                                        licensed, or otherwise exploited for any commercial purpose whatsoever, without our express
                                        prior written permission.
                                    </p>
                                    <br />
                                    <p> 
                                        Provided that you are eligible to use the Application, you are granted a limited license to access
                                        and use the Application and to print or download a copy of any portion of the Content to which
                                        you have properly gained access solely for your personal, non-commercial use. We reserve all
                                        rights not expressly granted to you in and to the Application, Content, and the Marks.
                                    </p>
                                    <br />
                                    <Text fontWeight="bold"> USER REPRESENTATIONS </Text>  
                                    <br />
                                    <p>
                                        By using the Application, you represent and warrant that: (1) all registration information you
                                        submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such
                                        information and promptly update such registration information as necessary; (3) you have the
                                        legal capacity and you agree to comply with these Terms of Use; (4) you are not under the age
                                        of 13; (5) not a minor in the jurisdiction in which you reside, or if a minor, you have received
                                        parental permission to use the Application; (6) if above the age of 13, but below 18, you have
                                        received parental permission or guardian assistance while using the Application; (7) you will not
                                        access the Application through automated or non-human means, whether through a bot, script
                                        or otherwise ; (8) you will not use the Application for any illegal or unauthorized purpose; and
                                        (9) your use of the Application will not violate any applicable law or regulation.
                                    </p>
                                    <br />
                                    <p>
                                        If you provide any information that is untrue, inaccurate, not current, or incomplete, we have
                                        the right to suspend or terminate your account and refuse any and all current or future use of
                                        the Application (or any portion thereof).
                                    </p>
                                    
                                    
                                
                            </Box>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </VStack>

            <Modal  motionPreset="slideInBottom" onClose={onClose} isOpen={changePassword} size='3xl'>
                <ModalOverlay />
                <ModalContent>
                        <br /><br />
                        <ModalCloseButton />
                        <ModalBody display="flex" justifyContent="center" mb="2rem">
                            <VStack w="80%" justifyContent="center" mb="2rem">
                                
                                <Text fontWeight="800" mb="2rem" fontSize="1.3rem">Change Password</Text>
                                <HStack justifyContent="space-between" mb="2rem" bg="#EFF6FA"  p="1.5rem" borderRadius="16px">
                                    <Image src= { ErrorIcon } alt="Error Icon" mr="1rem" />
                                    <Text color="#0E6898" fontSize="14px">Please note you can't change 
                                        to a password used previously due to security reasons</Text>
                                </HStack>

                                <VStack alignSelf="start" w="100%" mb="7rem">
                                    <Box w="100%">

                                        <Text alignSelf="start" fontWeight="800" mt="1rem" mb="0.5rem">Enter new password</Text>

                                        <InputGroup size='lg' w="100%">
                                            <Input
                                                pr='4.5rem'
                                                type={show ? 'text' : 'password'}
                                                placeholder='Enter password'
                                                w="100%"
                                            />
                                            <InputRightElement width='4.5rem'>
                                                <ChakraButton h='1.75rem' size='sm' onClick={handleClick}>
                                                    {show ? <Image src={HiddenEye} alt="Password Hidden Eye"/> : <Image src={Eye} alt= "Password Show Eye" /> }

                                                </ChakraButton>
                                            </InputRightElement>
                                        </InputGroup>
                                    </Box>

                                    <Box w="100%">

                                        <Text alignSelf="start" fontWeight="800" mt="1rem" mb="0.5rem">Confirm new password</Text>

                                        <InputGroup size='lg' w="100%" mb="1rem">
                                            <Input
                                                pr='4.5rem'
                                                type={show ? 'text' : 'password'}
                                                placeholder='Confirm new password'
                                                w="100%"
                                            />
                                            <InputRightElement width='4.5rem'>
                                                <ChakraButton h='1.75rem' size='sm' onClick={handleClick}>
                                                    {show ? <Image src={Eye} alt= "Password Show Eye" /> : <Image src={HiddenEye} alt="Password Hidden Eye"/> }
                                                    
                                                </ChakraButton>
                                            </InputRightElement>
                                        </InputGroup>
                                    </Box>
                                </VStack>
                                <Button w="full" text="Change Password"/>
                            </VStack>
                        </ModalBody>

                </ModalContent>
            </Modal>



            {/* Change Pin Modal */}
            
        </Box>
    )
}

const UpdateProfile = ()=>{
    return(
        <Box w="full" justifyContent="left">
            <HStack w="full" display="flex" justifyContent="space-between">
                <Text fontWeight="700">Profile</Text>
                <Button type="submit" text="Save Changes" />
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

const ChangePasswordModal = ()=>{
    return(
       <Modal>

       </Modal>
    )
}

export default Settings
