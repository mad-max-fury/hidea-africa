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


//Import model
import { ideasModel } from '../../../../model/ideas.model'
import ProjectIdeaCard from '../components/projectIdeaCard'

const MyIdeas = () => {
    const [active, setActive] = useState(0);
    const [ideas, setIdeas] = useState(ideasModel);
    const [hasInactive, setHasInactive] = useState(ideas.length > 0);

    // const clickFnExec = _ => {
    //     const ideas_copy = ideas.map(idea => idea.isSelected = false);
    //     setIdeas(ideas_copy);

    // }


    const onClose = () => setModalIsOpen(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const statusFlip = ['Completed', 'Cancelled']

    return (
        <Flex width="full" height="100vh" direction="row">

            <VStack width="full" bg="background.100">
                <Box width="full" display="flex" flexDirection="row" alignItems="center" justifyContent={'space-between'}
                    padding='1rem 0'>
                    <Box> <Heading as='h1' fontSize={'25px'}>My Ideas</Heading></Box>
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
                            Create idea
                        </Button>
                    </Box>
                </Box>

                <Box width="full" display="flex" flexDirection="column" alignItems="flex-start" >
                    <Tabs w="full" >
                        <TabList width="fit-content" border={'none'}>
                            <Tab _selected={{ color: 'green.400', borderBottom: '3px solid #2DC86D' }}>Active ideas ({ideas.length > 0 ? ideas.length : 0})</Tab>
                            <Tab _selected={{ color: 'green.400', borderBottom: '3px solid #2DC86D' }}>Inactive ideas ({ideas.length > 0 ? ideas.length : 0})</Tab>
                            <Tab _selected={{ color: 'green.400', borderBottom: '3px solid #2DC86D' }}>Drafts ({ideas.length > 0 ? ideas.length : 0})</Tab>

                        </TabList>

                        <TabPanels width="full" height='full'>
                            {/* //Active */}
                            <TabPanel width={'100%'} display='flex'>
                                <Grid rowGap='12' columnGap={'12'} templateColumns={{ base: 'auto', md: 'repeat(3, auto)' }} width='full'>
                                    {
                                        [1, 2, 3, 4, 5, 6].map((a) => {
                                            return <GridItem margin={'auto'} ><ProjectIdeaCard Active={true} status='In-Progress' /></GridItem>
                                        })
                                    }
                                </Grid>


                            </TabPanel>
                            {/* //Inactive */}
                            <TabPanel>
                                <Grid rowGap='12' columnGap={'12'} templateColumns={{ base: 'auto', md: 'repeat(3, auto)' }} width='full'>
                                    {
                                        [1, 2, 3, 4, 5, 6].map((a, i) => {
                                            return <GridItem margin={'auto'} ><ProjectIdeaCard status={statusFlip[i - 1]} /></GridItem>
                                        })
                                    }
                                </Grid>
                            </TabPanel>
                            {/* //Drafts */}
                            <TabPanel>
                                <Grid rowGap='12' columnGap={'12'} templateColumns={{ base: 'auto', md: 'repeat(3, auto)' }} width='full'>
                                    {
                                        [1, 2, 3, 4, 5, 6].map((a) => {
                                            return <GridItem margin={'auto'} ><ProjectIdeaCard draft={true} /></GridItem>
                                        })
                                    }
                                </Grid>
                            </TabPanel>


                        </TabPanels>
                    </Tabs>


                </Box>

            </VStack>


            {/* <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={modalIsOpen} size="4xl">
                <ModalOverlay />
                <ModalContent>
                    <br /><br />
                    <ModalCloseButton />
                    <ModalBody padding="100px">
                        <VStack alignItems="flex-start">
                            <HStack spacing="4">
                                <Box bg="#7B61FF" textAlign="center" w="50px" h="50px" borderRadius="8px" padding="8px"><Text fontSize="32px" fontWeight="700" textColor="white" lineHeight="32px">{ideas[active]?.seller?.seller_name[0]}</Text></Box>

                                <Text fontSize="32px" fontWeight="700">{ideas[active]?.seller?.seller_name}</Text>
                            </HStack>
                            <Text>Product demo</Text>
                            <Box w="100%" h="275px" bg="primary.100" borderRadius="5px"></Box>
                            <HStack>
                                <HStack>
                                    <Image src={ClockIcon} alt="Hidea clock icon" />
                                    <Text color="#57575B" font-size="14px"> 1 Minute</Text>
                                </HStack> <Spacer /><Spacer />

                                <HStack>
                                    <Image src={CoinIcon} alt="Hidea clock icon" />
                                    <Text color="#57575B" font-size="14px"> 20 Bids</Text>
                                </HStack>
                            </HStack>
                            <Spacer />
                            <Spacer />
                            <Spacer />
                            <Spacer />

                            <Text color="#000">Amount required</Text>
                            <Heading color="secondary.100">SC 35,000,000</Heading>
                            <Spacer />
                            <Spacer />
                            <Text color="#000">Description</Text>
                            <Text color="#57575B">
                                Bridging gap between farmers and consumers by providing a platform for produce exchange
                                while acting as the middle man between both parties
                            </Text>
                            <Spacer />
                            <Spacer />
                            <Spacer />
                            <Box w="full">
                                <HStack width="full" justifyContent="space-between">
                                    <VStack w="full" alignItems="left">
                                        <Text color="#000">Category</Text>
                                        <Text color="#57575B">Fintech, Agriculture</Text>
                                    </VStack>

                                    <VStack w="full" alignItems="left">
                                        <Text color="#000">Return on Investment</Text>
                                        <Text color="#57575B">5% Equity</Text>
                                    </VStack>
                                </HStack>
                            </Box>
                            <Spacer />
                            <Spacer />
                            <Spacer />
                            <Box w="full">
                                <HStack width="full" justifyContent="space-between">
                                    <VStack w="full" alignItems="left">
                                        <Text color="#000">Investment duration</Text>
                                        <Text color="#57575B">2 Years</Text>
                                    </VStack>

                                    <VStack w="full" alignItems="left">
                                        <Text color="#000">Maturity date</Text>
                                        <Text color="#57575B">12 July, 2027</Text>
                                    </VStack>
                                </HStack>
                            </Box>
                        </VStack>
                        <VStack w="full" alignItems="left">
                            <Spacer />
                            <Spacer />
                            <Spacer />
                            <Spacer />
                            <Text color="#000">Team Members</Text>
                            <Spacer />

                            <Flex alignItems="left" w="full">

                                <VStack w="100%" alignItems="center">
                                    <Image src={AfenaAvatar} w="45%" borderRadius="8px" alt="Avatar" />
                                    <Text color="secondary.100">Olumide Francis</Text>
                                    <Text color="#57575B" fontSize="14px">CEO</Text>
                                </VStack>

                                <VStack w="100%" alignItems="center">
                                    <Image src={AfenaAvatar} w="45%" borderRadius="8px" alt="Avatar" />
                                    <Text color="secondary.100">Asabi Francis</Text>
                                    <Text color="#57575B" fontSize="14px">Co-founder</Text>
                                </VStack>

                                <VStack w="100%" alignItems="center">
                                    <Image src={AfenaAvatar} w="45%" borderRadius="8px" alt="Avatar" />
                                    <Text color="secondary.100">Kudirat Bakare</Text>
                                    <Text color="#57575B" fontSize="14px">Customer Service</Text>
                                </VStack>

                                <VStack w="100%" alignItems="center">
                                    <Image src={AfenaAvatar} w="45%" borderRadius="8px" alt="Avatar" />
                                    <Text color="secondary.100">Alex nwofor</Text>
                                    <Text color="#57575B" fontSize="14px">Marketing</Text>
                                </VStack>
                            </Flex>
                        </VStack>

                        <VStack alignItems="left" w="full">
                            <Spacer />
                            <Spacer />
                            <Spacer />
                            <Text color="#000">Pitch deck</Text>
                            <Spacer />
                            <Spacer />
                            <HStack w="60%" p="20px" borderRadius="6px" border="1px #D5D5D6 solid">
                                <HStack flex="1">
                                    <Image src={FolderIcon} mr="10px" alt="folder icon" />
                                    <Text color="#000">Jeji pitch.pdf</Text>
                                </HStack>

                                <Text alignContent="right">2MB</Text>
                            </HStack>

                            <Spacer />
                            <Spacer />
                            <Text color="#000">Supporting documents</Text>
                            <Spacer />
                            <Spacer />
                            <HStack w="60%" p="20px" borderRadius="6px" border="1px #D5D5D6 solid">
                                <HStack flex="1">
                                    <Image src={FolderIcon} mr="10px" alt="folder icon" />
                                    <Text color="#000">Jeji CAC.pdf</Text>
                                </HStack>

                                <Text alignContent="right">12MB</Text>
                            </HStack>
                        </VStack>

                    </ModalBody>
                </ModalContent>
            </Modal> */}
        </Flex >
    )
}

export default MyIdeas