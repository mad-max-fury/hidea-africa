import { Avatar, Box, Button, Flex, Grid, GridItem, Heading, Text, VStack, Input, InputGroup, InputLeftElement, Stack, Spacer, Select, HStack, Image, ModalBody, ModalContent, ModalOverlay, ModalCloseButton, ModalHeader, Tabs, TabList, TabPanels, Tab, TabPanel, Modal, useDisclosure, ModalFooter, Textarea, AvatarGroup } from '@chakra-ui/react'
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
import TriangleRightIcon from '../../../../assets/images/icons/trianglerighticon.png'
import HowToAccordion from '../components/HowToAccordion'
import Foldercard from '../components/Foldercard'
import LegalServicesCard from '../components/Legalservicescard'




const LegalServices = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let [value, setValue] = React.useState('')

    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }





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
                            onClick={onOpen}
                        >
                            Request service
                        </Button>
                    </Box>
                </Box>

                <Box width="full" display="flex" flexDirection="column" alignItems="flex-start" >
                    <Tabs w="full" >
                        <TabList width="fit-content" border={'none'}>
                            <Tab _selected={{ color: 'green.400', borderBottom: '3px solid #2DC86D' }}>Service & file template </Tab>
                            <Tab _selected={{ color: 'green.400', borderBottom: '3px solid #2DC86D' }}>Legal history </Tab>
                            <Tab _selected={{ color: 'green.400', borderBottom: '3px solid #2DC86D' }}>Articles </Tab>

                        </TabList>
                        <TabPanels width="full" height='full'>
                            {/* //Active */}
                            <TabPanel width={'100%'} display='flex'>
                                <Flex width='full'>
                                    <Tabs isLazy width={'full'} display='flex' justifyContent={'space-between'}>
                                        <TabList display={'flex'} flexDirection='column' borderBottom={'none'} gap='1rem'>
                                            {
                                                ['Business registration', 'Patent & copyright', 'Pitch deck', 'Sales pitch', 'Business Registration', 'Business Registration'].map(tabText => {
                                                    return <Tab _selected={{ background: '#D5F4E2' }} display='flex' _hover={{ background: `green.100` }} gap={'4rem'} borderRadius='10px' justifyContent='space-between' padding={'1rem 1rem'}>
                                                        <HStack w="fit-content" borderRadius="6px">
                                                            <HStack flex="1">
                                                                <Image src={FolderIcon} mr="10px" alt="folder icon" />
                                                                <Text color="#000">{tabText}</Text>
                                                            </HStack>
                                                            <Text alignContent="right">23 files</Text>
                                                        </HStack>
                                                    </Tab>
                                                })
                                            }
                                        </TabList>
                                        <TabPanels maxW={'70%'}>
                                            <TabPanel >
                                                <Box maxW={'80%'} bgColor='white' display={'flex'} flexDirection='column' gap='1rem'>
                                                    {
                                                        [1, 2, 3, 4, 5, 5, 6, 7, 8, 1, 2, 34, 5, 5, 6, 7, 7, 3].map(a => {
                                                            return <Foldercard text={'CAC registration form'} />
                                                        })
                                                    }
                                                </Box>
                                            </TabPanel>
                                            {/* initially not mounted */}
                                            <TabPanel >
                                                <Box maxW={'80%'} bgColor='white' display={'flex'} flexDirection='column' gap='1rem'>
                                                    {
                                                        [1, 2, 3, 4, 5, 5, 6, 7, 8, 1, 2, 34, 5, 5, 6, 7, 7, 3].map(a => {
                                                            return <Foldercard text={'CAC enguiry form'} />
                                                        })
                                                    }
                                                </Box>
                                            </TabPanel>
                                            <TabPanel>
                                                <Box maxW={'80%'} bgColor='white' display={'flex'} flexDirection='column' gap='1rem'>
                                                    {
                                                        [1, 2, 3, 4, 5, 5, 2, 34, 5, 5, 6, 7, 7, 3].map(a => {
                                                            return <Foldercard text={'Patent & copyright form'} />
                                                        })
                                                    }
                                                </Box>
                                            </TabPanel>
                                            <TabPanel >
                                                <Box maxW={'80%'} bgColor='white' display={'flex'} flexDirection='column' gap='1rem'>
                                                    {
                                                        [1, 2, 3, 4, 5, 5, 6, 7, 8, 1, 2, 34, 5, 7, 3].map(a => {
                                                            return <Foldercard text={'Pitch deck form'} />
                                                        })
                                                    }
                                                </Box>
                                            </TabPanel>
                                            {/* initially not mounted */}
                                            <TabPanel >
                                                <Box maxW={'80%'} bgColor='white' display={'flex'} flexDirection='column' gap='1rem'>
                                                    {
                                                        [1, 2, 3, 4, 5, 5, 6, 7, 7, 3].map(a => {
                                                            return <Foldercard text={'CAC registration '} />
                                                        })
                                                    }
                                                </Box>
                                            </TabPanel>
                                            <TabPanel>
                                                <Box maxW={'80%'} bgColor='white' display={'flex'} flexDirection='column' gap='1rem'>
                                                    {
                                                        [34, 5, 5, 6, 7, 7, 3].map(a => {
                                                            return <Foldercard text={'Sales pitch form'} />
                                                        })
                                                    }
                                                </Box>
                                            </TabPanel>
                                        </TabPanels>
                                    </Tabs>
                                </Flex>
                            </TabPanel>
                            {/* //Inactive */}
                            <TabPanel >
                                <Grid rowGap='12' columnGap={'12'} templateColumns={{ base: 'auto', md: 'repeat(3, auto)' }} width='full'>
                                    {
                                        [1, 2, 3, 4, 5, 6].map((a) => {
                                            return <GridItem margin={'auto'} ><LegalServicesCard bgColor={a % 2 === 0 ? 'green' : '#D43535'} text={a % 2 === 0 ? 'Open' : 'Closed'} /></GridItem>
                                        })
                                    }
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
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxW={'40vw'} maxH='fit-content'>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display={'flex'} paddingTop='2rem' width={'80%'} margin='auto' gap='2rem' flexFlow='column'>
                        <Text margin={'auto'} padding='.5rem' fontSize={'20px'} fontWeight='800'>Request service</Text>
                        <VStack w='100%' alignItems='start'>
                            <Text fontWeight={'sem-bold'} textColor='#000'>Type of legal service required</Text>
                            <Select placeholder='Search service needed' border='1px solid #D5D5D6' textColor={'GrayText'} _focus={{ border: '1px solid grey' }}>
                                <option value='Business regisrtaion'>Business regisrtaion</option>
                                <option value='Pitch deck'>Pitch deck </option>
                                <option value='Patent & copyright'>Patent & copyright</option>
                                <option value='Sales pitch'>Sales pitch</option>

                            </Select>
                            <Text textColor={'green.400'}>Service cost: SC {0}</Text>
                        </VStack>
                        <VStack w='100%' alignItems='start'>
                            <Text fontWeight={'sem-bold'} textColor='#000'>Supporting document</Text>
                            <Box
                                width='full'
                                height={'15rem'}
                                border='3px dashed #D5D5D6'
                                borderRadius={'10px'}
                                textColor={'GrayText'}
                                display='flex'

                            >
                                <Box width='50%' height={'fit-content'} margin={'auto'} textAlign='center'>
                                    <Avatar size='md' borderRadius={'10px'} name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />{' '}
                                    <Text>Upload file. File format allowed are doc, docx, pdf</Text>
                                    <Button bgColor={'unset'} textColor='green.200'><h4>Select file</h4></Button>

                                </Box>
                            </Box>
                        </VStack>
                        <VStack w='100%' alignItems='start'>
                            <Text fontWeight={'sem-bold'} textColor='#000'>Any comments</Text>
                            <Textarea
                                value={value}
                                onChange={handleInputChange}
                                placeholder='Here is a sample placeholder'
                                size='md'
                                height={'10rem'}
                                border='1px solid #D5D5D6'
                                textColor={'GrayText'}
                                _focus={{ border: '1px solid grey' }}
                            />
                        </VStack>
                    </ModalBody>

                    <ModalFooter width={'80%'} margin='auto'>
                        <Button padding={'1.8rem 0'} width='100%' bgColor={'green.400'} textColor='white' _hover={{ backgroundColor: 'green.500' }}>Request service</Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex >
    )
}


//Transaction component





export default LegalServices
