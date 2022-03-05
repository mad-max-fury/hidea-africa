import { Avatar, Box, Button, Flex, Grid, GridItem, Heading, Text, VStack, Input, InputGroup, InputLeftElement, Stack, Spacer, Select, HStack, Image, ModalBody, ModalContent, ModalOverlay, ModalCloseButton, ModalHeader, Tabs, TabList, TabPanels, Tab, TabPanel, Modal } from '@chakra-ui/react'
import React, { useState } from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import SearchIcon from '../../../../assets/images/icons/icons-set/linear/search-normal.svg'
import Drop from '../../../../assets/images/icons/icons-set/bold/drop.svg'
import IdeaCard, { Cards } from '../components/IdeaCard'
import ClockIcon from '../../../../assets/images/clock.svg'
import CoinIcon from '../../../../assets/images/coin.svg'
import AfenaAvatar from '../../../../assets/images/users/afena.jpg'
import FolderIcon from '../../../../assets/images/folder.svg'

import InactiveIdeaEmpty from '../../../../assets/images/Inactive-idea.png'


//Import model
import { ideasModel } from '../../../../model/ideas.model'

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

    return (
        <Flex width="full" height="100vh" direction="row">

            <VStack width="full" bg="background.100">

                <Box width="full" display="flex" flexDirection="column" alignItems="flex-start">
                    <Tabs w="full">
                        <TabList width="fit-content" >
                            <Tab>Active Ideas ({ideas.length > 0 ? ideas.length : 0})</Tab>
                            <Tab>Inactive Ideas ({ideas.length > 0 ? ideas.length : 0})</Tab>
                        </TabList>

                        <TabPanels width="full" >

                            <TabPanel width="full" d="flex" flexDirection="column" alignItems="center" justifyContent="center">

                                {
                                    !hasInactive ?
                                        <Box d="flex" flexDirection="column" paddingTop="74px" w="max-content" alignItems="center" justifyContent="center">
                                            <Image src={InactiveIdeaEmpty} w="200px" />
                                            <Text>You have no active idea investment, Click button below to get started.</Text>
                                            <Button mt="56px" bg="secondary.100" color="#fff" w="full" padding="8px">Go to idea pool</Button>
                                        </Box>
                                        :



                                        <HStack width="full" justifyContent="space-between" alignItems="flex-start" spacing="4">

                                            {/* Left for Active Ideas */}
                                            <VStack width="30%" alignItems="center" justifyContent="flex-start">
                                                <Spacer />

                                                {/* Active Ideas */}
                                                <VStack w="full">
                                                    <Cards>
                                                        {
                                                            ideas?.map((idea, idx) => (
                                                                <IdeaCard idx={idx} key={idx} image={idea?.image} seller={idea?.seller} tag={idea?.tag} invState={idea?.invState} equity={idea?.investment?.equity} isSelected={idea?.isSelected} ideas={ideas} setIdeas={setIdeas} setActive={setActive} />
                                                            ))
                                                        }
                                                    </Cards>
                                                </VStack>

                                            </VStack>


                                            {/* Right for Active Ideas */}
                                            <VStack w="65%" spacing="0">
                                                <HStack w="full" justifyContent="space-between">
                                                    <Box bg="#fff" px="5" py="2" borderTopLeftRadius="16px" borderTopRightRadius="16px" color="#030309">
                                                        Investment Details
                                                    </Box>

                                                    <Text fontWeight="bold" color="secondary.100" cursor="pointer" onClick={() => setModalIsOpen(true)}>
                                                        View Idea Information
                                                    </Text>
                                                </HStack>

                                                <Box w="full" justifyContent="space-between" bg="#fff" pt="8" pr="8" pb="4"
                                                    pl="8" borderTopRightRadius="16px" borderBottomLeftRadius="16px">

                                                    <HStack w="full" justifyContent="space-between" bg="#fff">
                                                        <VStack alignItems="flex-start" justifyContent="flex-start">
                                                            <Text fontSize="14px" color="#878696">
                                                                Investment amount
                                                            </Text>
                                                            <Heading color="secondary.100">
                                                                SC {ideas[active]?.investment?.amount}
                                                            </Heading>
                                                            <Text color="#57575B">
                                                                N{ideas[active]?.investment?.amount}
                                                            </Text>
                                                        </VStack>

                                                        <Box bg="#FEF8E6" color="#7A6003" className="px-4 py-2" borderRadius="16px">In progress</Box>
                                                    </HStack>

                                                    {/* Graph */}
                                                    <VStack mt="32px" mb="68px" alignItems="flex-start">
                                                        <Text fontWeight="700">Projected earning</Text>
                                                        <Spacer />
                                                        <Box bg="red.300" width="full" height="170px"></Box>
                                                    </VStack>

                                                    <VStack w="full">
                                                        <HStack w="full" justifyContent="space-between" alignItems="flex-start" spacing="50px">
                                                            <VStack alignItems="flex-start" w="50%">
                                                                <Text fontWeight="700">Projected timelines</Text>
                                                                <VStack w="full" spacing="20px">
                                                                    <HStack w="full" justifyContent="space-between">
                                                                        <Text>Project start date</Text>
                                                                        <Text fontWeight="700">{ideas[active]?.investment?.project_start_date}</Text>
                                                                    </HStack>
                                                                    <HStack w="full" justifyContent="space-between">
                                                                        <Text>Project end date</Text>
                                                                        <Text fontWeight="700">{ideas[active]?.investment?.project_end_date}</Text>
                                                                    </HStack>
                                                                    <HStack w="full" justifyContent="space-between">
                                                                        <Text>Earnings start date</Text>
                                                                        <Text fontWeight="700">{ideas[active]?.investment?.earnings_start_date}</Text>
                                                                    </HStack>
                                                                </VStack>
                                                            </VStack>

                                                            <VStack alignItems="flex-start" w="50%">
                                                                <Text fontWeight="700">Return on investment</Text>
                                                                <VStack w="full" spacing="20px">
                                                                    <HStack w="full" justifyContent="space-between">
                                                                        <Text>Equity</Text>
                                                                        <Text fontWeight="700">{ideas[active]?.investment?.equity}</Text>
                                                                    </HStack>
                                                                    <HStack w="full" justifyContent="space-between">
                                                                        <Text>Interest on capital</Text>
                                                                        <Text fontWeight="700">{ideas[active]?.investment?.interest_of_capital}</Text>
                                                                    </HStack>
                                                                </VStack>
                                                            </VStack>
                                                        </HStack>
                                                    </VStack>

                                                </Box>

                                            </VStack>
                                        </HStack>

                                }


                            </TabPanel>

                            {/* Inactive ideas */}
                            <TabPanel width="full" d="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                {
                                    !hasInactive ?
                                        <Box d="flex" flexDirection="column" paddingTop="74px" w="max-content" alignItems="center" justifyContent="center">
                                            <Image src={InactiveIdeaEmpty} w="200px" />
                                            <Text>You have no inactive idea investment, Click button below to get started.</Text>
                                            <Button mt="56px" bg="secondary.100" color="#fff" w="full" padding="8px">Go to idea pool</Button>
                                        </Box>
                                        :


                                        <HStack width="full" justifyContent="space-between" alignItems="flex-start" spacing="4">

                                            {/* Left for Inactive Ideas */}
                                            <VStack width="30%" alignItems="center" justifyContent="flex-start">
                                                <Spacer />

                                                {/* Active Ideas */}
                                                <VStack w="full">
                                                    <Cards>
                                                        {
                                                            ideas.map((idea, idx) => (
                                                                <IdeaCard idx={idx} key={idx} image={idea.image} seller={idea.seller} tag={idea.tag} invState={idea.invState} equity={idea?.investment?.equity} isSelected={idea.isSelected} ideas={ideas} setIdeas={setIdeas} setActive={setActive} />
                                                            ))
                                                        }
                                                    </Cards>
                                                </VStack>

                                            </VStack>


                                            {/* Right for Active Ideas */}
                                            <VStack w="65%" spacing="0">
                                                <HStack w="full" justifyContent="space-between">
                                                    <Box bg="#fff" px="5" py="2" borderTopLeftRadius="16px" borderTopRightRadius="16px" color="#030309">
                                                        Investment Details
                                                    </Box>

                                                    <Text fontWeight="bold" color="secondary.100" cursor="pointer" onClick={() => setModalIsOpen(true)}>
                                                        View Idea Information
                                                    </Text>
                                                </HStack>

                                                <Box w="full" justifyContent="space-between" bg="#fff" pt="8" pr="8" pb="4"
                                                    pl="8" borderTopRightRadius="16px" borderBottomLeftRadius="16px">

                                                    <HStack w="full" justifyContent="space-between" bg="#fff">
                                                        <VStack alignItems="flex-start" justifyContent="flex-start">
                                                            <Text fontSize="14px" color="#878696">
                                                                Investment amount
                                                            </Text>
                                                            <Heading color="secondary.100">
                                                                SC {ideas[active]?.investment?.amount}
                                                            </Heading>
                                                            <Text color="#57575B">
                                                                N{ideas[active]?.investment?.amount}
                                                            </Text>
                                                        </VStack>

                                                        <Box bg="#FEF8E6" color="#7A6003" className="px-4 py-2" borderRadius="16px">In progress</Box>
                                                    </HStack>


                                                    <VStack w="full">
                                                        <Spacer />
                                                        <Spacer />
                                                        <Spacer />
                                                        <Spacer />
                                                        <Spacer />
                                                        <Spacer />
                                                        <Spacer />
                                                        <HStack w="full" justifyContent="space-between" alignItems="flex-start" spacing="50px">
                                                            <VStack alignItems="flex-start" w="50%">
                                                                <Text fontWeight="700">Projected timelines</Text>
                                                                <VStack w="full" spacing="20px">
                                                                    <HStack w="full" justifyContent="space-between">
                                                                        <Text>Project start date</Text>
                                                                        <Text fontWeight="700">{ideas[active]?.investment?.project_start_date}</Text>
                                                                    </HStack>
                                                                    <HStack w="full" justifyContent="space-between">
                                                                        <Text>Project end date</Text>
                                                                        <Text fontWeight="700">{ideas[active]?.investment?.project_end_date}</Text>
                                                                    </HStack>
                                                                    <HStack w="full" justifyContent="space-between">
                                                                        <Text>Earnings end date</Text>
                                                                        <Text fontWeight="700">{ideas[active]?.investment?.earnings_start_date}</Text>
                                                                    </HStack>
                                                                </VStack>
                                                            </VStack>

                                                            <VStack alignItems="flex-start" w="50%">
                                                                <Text fontWeight="700">Return on investment</Text>
                                                                <VStack w="full" spacing="20px">
                                                                    <HStack w="full" justifyContent="space-between">
                                                                        <Text>Equity</Text>
                                                                        <Text fontWeight="700">{ideas[active]?.investment?.equity}</Text>
                                                                    </HStack>
                                                                    <HStack w="full" justifyContent="space-between">
                                                                        <Text>Interest on capital</Text>
                                                                        <Text fontWeight="700">{ideas[active]?.investment?.interest_of_capital}</Text>
                                                                    </HStack>
                                                                </VStack>
                                                            </VStack>
                                                        </HStack>
                                                    </VStack>

                                                </Box>

                                            </VStack>
                                        </HStack>

                                }

                            </TabPanel>

                        </TabPanels>
                    </Tabs>


                </Box>

            </VStack>


            <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={modalIsOpen} size="4xl">
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
            </Modal>
        </Flex>
    )
}

export default MyIdeas