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
        </Flex >
    )
}

export default MyIdeas