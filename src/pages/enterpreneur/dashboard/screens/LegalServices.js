import { Avatar, Box, Button, Flex, Grid, GridItem, Heading, Text, VStack, Input, InputGroup, InputLeftElement, Stack, Spacer, Select, HStack, Image, ModalBody, ModalContent, ModalOverlay, ModalCloseButton, ModalHeader, Tabs, TabList, TabPanels, Tab, TabPanel, Modal } from '@chakra-ui/react'
import React, { useState } from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import SearchIcon from '../../../../assets/images/icons/icons-set/linear/search-normal.svg'
import Drop from '../../../../assets/images/icons/icons-set/bold/drop.svg'
import IdeaCard, { Cards } from '../components/projectIdeaCard'
import ClockIcon from '../../../../assets/images/clock.svg'
import CoinIcon from '../../../../assets/images/coin.svg'
import AfenaAvatar from '../../../../assets/images/users/afena.jpg'
import FolderIcon from '../../../../assets/images/folder.svg'

import InactiveIdeaEmpty from '../../../../assets/images/Inactive-idea.png'
import TriangleRightIcon from '../../../../assets/images/icons/trianglerighticon.png'

import HowToAccordion from '../components/HowToAccordion'



const LegalServices = () => {

    const [ideas, setIdeas] = useState(1);
    const [transactions, setTransactions] = useState(1);
    const [showModal, setShowModal] = useState(null);



    return (
        <Flex width="full" height="100vh" direction="row">

            <VStack width="full" bg="background.100">
                <Box width="full" display="flex" flexDirection="row" alignItems="center" justifyContent={'space-between'}
                    padding='1rem 0'>
                    <Box> <Heading as='h1' fontSize={'25px'}>Legal service</Heading></Box>
                    <Box display={'flex'} gap='1rem' >
                        <InputGroup width="160px" height={'38px'} boxShadow='0px 0px 2px grey' borderRadius={'10px'} variant="filled">
                            <InputLeftElement
                                pointerEvents='none'
                                borderRadius={'inherit'}
                                height={'100%'}
                                children={<Image src={SearchIcon} alt="Search Icon" color='#f5f5f5' />}
                            />
                            <Input height={'100%'} type='text' placeholder='Search' />
                        </InputGroup>
                        <Button
                            size='md'
                            height='38px'
                            width='160px'
                            bgColor='green.500'
                            outline={'0'}
                            textColor='#fff'
                            letterSpacing={'1.6px'}
                            _hover={{ background: '#00FF7F' }}
                        >
                            Request service
                        </Button>
                    </Box>
                </Box>

                <Box width="full" display="flex" flexDirection="column" alignItems="flex-start" >
                    <Tabs w="full" >
                        <TabList width="fit-content" border={'none'}>
                            <Tab _selected={{ color: 'green.400', borderBottom: '3px solid #2DC86D' }}>Service and file template ({ideas.length > 0 ? ideas.length : 0})</Tab>
                            <Tab _selected={{ color: 'green.400', borderBottom: '3px solid #2DC86D' }}>Legal history ({ideas.length > 0 ? ideas.length : 0})</Tab>
                            <Tab _selected={{ color: 'green.400', borderBottom: '3px solid #2DC86D' }}>Articles ({ideas.length > 0 ? ideas.length : 0})</Tab>

                        </TabList>

                        <TabPanels width="full" height='full'>
                            {/* //Active */}
                            <TabPanel width={'100%'} display='flex'>
                                <Grid rowGap='12' columnGap={'12'} templateColumns={{ base: 'auto', md: 'repeat(3, auto)' }} width='full'>

                                </Grid>


                            </TabPanel>
                            {/* //Inactive */}
                            <TabPanel>
                                <Grid rowGap='12' columnGap={'12'} templateColumns={{ base: 'auto', md: 'repeat(3, auto)' }} width='full'>

                                </Grid>
                            </TabPanel>
                            {/* //Articles */}
                            <TabPanel>
                                <Flex width='full'>
                                    <Tabs isLazy width={'full'} display='flex' justifyContent={'space-between'}>
                                        <TabList display={'flex'} flexDirection='column' borderBottom={'none'}>
                                            <Tab _selected={{ background: '#f5f5f7' }} display='flex' gap={'4rem'} justifyContent='space-between' padding={'.3rem 1rem'}><Text>Business</Text> <img size='2xs' name='Dan Abrahmov' src={TriangleRightIcon} /></Tab>
                                            <Tab _selected={{ background: '#f5f5f7' }} display='flex' gap={'4rem'} justifyContent='space-between' padding={'.3rem 1rem'}><Text>Enquiries</Text> <img size='2xs' name='Dan Abrahmov' src={TriangleRightIcon} /></Tab>
                                            <Tab _selected={{ background: '#f5f5f7' }} display='flex' gap={'4rem'} justifyContent='space-between' padding={'.3rem 1rem'}><Text>Law</Text> <img size='2xs' name='Dan Abrahmov' src={TriangleRightIcon} /></Tab>

                                        </TabList>
                                        <TabPanels maxW={'80%'}>
                                            {/* initially mounted */}
                                            <TabPanel >
                                                <HowToAccordion />
                                            </TabPanel>
                                            {/* initially not mounted */}
                                            <TabPanel >
                                                <p>two!</p>
                                            </TabPanel>
                                            <TabPanel>
                                                <p>three!</p>
                                            </TabPanel>
                                        </TabPanels>
                                    </Tabs>

                                </Flex>
                            </TabPanel>


                        </TabPanels>
                    </Tabs>


                </Box>

            </VStack>
        </Flex >
    )
}


//Transaction component





export default LegalServices
