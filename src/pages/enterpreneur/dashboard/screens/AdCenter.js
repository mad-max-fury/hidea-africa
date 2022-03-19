import { Avatar, Box, Button, Flex, Grid, Heading, Text, VStack, Input, InputGroup, InputLeftElement, Stack, Spacer, Select, HStack, Image, CloseButton, Tabs, TabList, TabPanels, Tab, TabPanel, Td, Thead, Tr, Th, Table, Tbody } from '@chakra-ui/react'
import React, { useState } from 'react'
import Drop from '../../../../assets/images/icons/icons-set/bold/drop.svg'
import SearchIcon from '../../../../assets/images/icons/icons-set/linear/search-normal.svg'

const AdCenter = () => {
    const [viewMore, setViewMore] = useState(false)
    const viewAdsData = viewMore ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <Box width="full" height="100vh" direction="row">
            <HStack width="full" display="flex" flexDirection="row" alignItems="center" justifyContent={'space-between'}
                padding='1rem 0'>
                {viewMore ? <HStack mb="24px" fontSize="24px">
                    <Text>Ad center &gt; </Text>
                    <Text fontWeight="700">Recent ad activities</Text>
                </HStack> : <Text fontSize={'24px'}>Ad center</Text>}

                <HStack gap='1rem'>

                    {viewMore ? <>   <InputGroup width="160px" height={'38px'} boxShadow='0px 0px 2px grey' borderRadius={'10px'} variant="filled">
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
                            _hover={{ background: 'unset', color: 'green.500', border: ' 1px solid green' }} cursor="pointer" display={'flex'} gap='.5rem' w="fit-content" onClick={() => setViewMore(false)} >
                            <Text>&larr;</Text>
                            <Text>Back</Text>
                        </Button>
                    </>
                        :
                        <Button
                            size='md'
                            height='38px'
                            width='160px'
                            bgColor='green.500'
                            outline={'0'}
                            textColor='#fff'
                            letterSpacing={'1.6px'}
                            _hover={{ background: 'unset', color: 'green.500', border: ' 1px solid green' }} cursor="pointer" display={'flex'} gap='.5rem' w="fit-content"  >
                            <Text>Promote Idea</Text>
                        </Button>
                    }
                </HStack>
            </HStack>
            {viewMore ? null :
                <VStack>
                    <HStack width={'100%'} justifyContent={'space-between'}>
                        <Box display={'flex'} gap='1rem' bgColor={'white'} align-items='center' justifyContent={'start'} shadow='0 0 2px #f5f5f7' width={'320px'} height='fit-content' padding={'1rem'} borderRadius='10px' >
                            <Box display='flex' alignSelf={'start'}>
                                <Avatar size='md' borderRadius={'10px'} name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />{' '}
                            </Box>
                            <Box>
                                <Text alignSelf={'start'} textColor='GrayText'>Active</Text>
                                <Heading alignSelf={'start'} as={'h5'} fontSize='18px'>2</Heading>
                            </Box>
                        </Box>
                        <Box display={'flex'} gap='1rem' bgColor={'white'} align-items='center' justifyContent={'start'} shadow='0 0 2px #f5f5f7' width={'320px'} height='fit-content' padding={'1rem'} borderRadius='10px' >
                            <Box display='flex' alignSelf={'start'}>
                                <Avatar size='md' borderRadius={'10px'} name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />{' '}
                            </Box>
                            <Box>
                                <Text alignSelf={'start'} textColor='GrayText'>Total Ads</Text>
                                <Heading alignSelf={'start'} as={'h5'} fontSize='18px'>10</Heading>
                            </Box>
                        </Box>
                        <Box display={'flex'} gap='1rem' bgColor={'white'} align-items='center' justifyContent={'start'} shadow='0 0 2px #f5f5f7' width={'320px'} height='fit-content' padding={'1rem'} borderRadius='10px' >
                            <Box display='flex' alignSelf={'start'}>
                                <Avatar size='md' borderRadius={'10px'} name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />{' '}
                            </Box>
                            <Box>
                                <Text alignSelf={'start'} textColor='GrayText'>Total spent</Text>
                                <Heading alignSelf={'start'} as={'h5'} fontSize='18px'>SC 120,455.34</Heading>
                            </Box>
                        </Box>
                    </HStack>

                    <HStack w="100%">
                        <VStack width={'70%'} padding='1rem'>
                            <Box h={'50vh'} width='100%' borderRadius={'20px'} boxShadow={'0 0 2px grey'} borderRadius='10px'>

                            </Box>
                        </VStack>
                        <VStack display="flex" flexDirection="column" alignItems="center" boxShadow={'0 0 2px grey'} borderRadius='10px' justifyContent="center" h={'50vh'} w="28%" className="px-5 py-3" bg="white">


                            {/* <Text fontWeight={'bold'}>1 Singa coin = 1 Naira</Text> */}

                        </VStack>
                    </HStack>
                </VStack>}

            <VStack width={'100%'} padding='1rem'>
                {!viewMore ? <HStack w='full' justifyContent={'space-between'} padding='1rem 0'>
                    <Heading as={'h5'} fontSize={'18px'}>Recent ad activities</Heading>
                    <Text textColor={'green.500'} fontWeight='bold' onClick={() => setViewMore(true)} cursor='pointer'>View history</Text>
                </HStack> : null}
                <Table variant='unstyled' colorScheme='teal'>
                    <Thead>
                        <Tr bgColor={'#f5f5f7'}>
                            <Th>Date</Th>
                            <Th>ID number</Th>
                            <Th >Idea name</Th>
                            <Th isNumeric>Clicks</Th>
                            <Th isNumeric>Views</Th>
                            <Th isNumeric>Cost (SC)</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            viewAdsData.map(tabRowItems => {
                                return <Tr>
                                    <Td>10 Jul, 2021</Td>
                                    <Td>AX23912948GD</Td>
                                    <Td >Apex matrass he..</Td>
                                    <Td isNumeric>200</Td>
                                    <Td isNumeric>3000</Td>
                                    <Td isNumeric>2000</Td>
                                    <Td color={'green.400'} display='flex' alignItems={'center'} gap='.5rem'> <Box h='12px' w='12px' borderRadius='50%' bgColor={'green.500'}></Box><Text>Active</Text></Td>

                                </Tr>
                            })
                        }

                    </Tbody>

                </Table>
            </VStack>

        </Box>
    )
}

export default AdCenter
