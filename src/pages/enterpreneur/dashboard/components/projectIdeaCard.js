import React, { useState, useEffect } from 'react'
import { Avatar, Box, Text, VStack, HStack, Heading, useDisclosure, Button, Flex, Image, } from '@chakra-ui/react'
import TopCardlayer from './TopCardlayer';
import BottomCardLayer from './BottomCardLayer';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import AfenaAvatar from '../../../../assets/images/users/afena.jpg'



const ProjectIdeaCard = ({ draft, Active, status }) => {


    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>

            <Box bg={'#ffffff'} cursor="pointer" display="flex" flexDirection={'column'} alignItems="start" gap={'1rem'} style={{ boxShadow: '0px 0px 4px #f5f5f7' }} padding="4" w="335px" h="fit-content" onClick={onOpen}>
                <TopCardlayer draft={draft} />
                <BottomCardLayer draft={draft} Active={Active} status={status} />
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxW={'40vw'} maxH='fit-content'>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display={'flex'} width='85%' margin={'auto'} flexDirection='column' gap={'4'}>
                        <Box width="full" display="flex" flexDirection="row" alignItems="center" justifyContent={'space-between'}
                            padding='1rem 0'>
                            <Box display={'flex'} gap='1rem' alignItems={'center'}>
                                <Avatar size='md' borderRadius={'md'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                <Box>
                                    <Heading as={'h3'} fontSize='30px' lineHeight={'24px'}>Avatar republic</Heading>

                                </Box>
                            </Box>
                            <Box display={'flex'} gap='.2rem' _hover={{ transition: 'all .1s ease-in', gap: '.3rem' }}>
                                <Button alignSelf={'flex-end'} bgColor={status === 'In-Progress' ? '#FEF8E6' : status === 'Completed' ? 'green.100' : 'red.100'} textColor={status === 'In-Progress' ? '#7A6003' : status === 'Completed' ? 'green.500' : 'red'} borderRadius='25px'>{status === 'In-Progress' ? 'In-Progress' : status === 'Completed' ? 'Completed' : 'Cancelled'}</Button>

                            </Box>
                        </Box>
                        <Box border={'1px'} height='8rem' borderRadius={'10px'}> </Box>
                        <Box width={'full'}>
                            <Text textColor={'#000'} fontWeight='bolder'>Description</Text>
                            <span style={{ fontSize: '14px' }} textColor={'grey'}>Bridging gap between farmers and  consumers by providing a platform for produce exchange while acting as the middle man between both parties</span>
                        </Box>
                        <Box display={'flex'} flexDirection='row' justifyContent={'space-between'}>
                            <Box display={'flex'} w='50%' flexDirection={'column'} gap='4' >
                                <Box>
                                    <Heading as='h3' fontSize='16px'>Amount</Heading>
                                    <Text textColor={'GrayText'}>SC 35,000,000 </Text>
                                </Box>
                                <Box>
                                    <Heading as='h3' fontSize='16px'>Category</Heading>
                                    <Text textColor={'GrayText'}>Fintech, Agriculture</Text>
                                </Box>
                                <Box>
                                    <Heading as='h3' fontSize='16px'>Investment duration</Heading>
                                    <Text textColor={'GrayText'}>2 years</Text>
                                </Box>
                            </Box>
                            <Box display={'flex'} w='50%' flexDirection={'column'} gap='4'>
                                <Box>
                                    <Heading as='h3' fontSize='16px'>Investor</Heading>
                                    <Text textColor={'green'}> Allison Uwa</Text>
                                </Box>
                                <Box>
                                    <Heading as='h3' fontSize='16px'> Return on Investment (ROI)</Heading>
                                    <Text textColor={'GrayText'}>5% Equity</Text>
                                </Box>
                                <Box>
                                    <Heading as='h3' fontSize='16px'>Maturity date</Heading>
                                    <Text textColor={'GrayText'}>12 July, 2027 </Text>
                                </Box>
                            </Box>

                        </Box>
                        <VStack w="full" alignItems="left">

                            <Text color="#000">Team Members</Text>


                            <Flex alignItems="left" w="full">

                                <VStack w="100%" alignItems="center">
                                    <Avatar size='md' borderRadius={'md'} name='Dan Abrahmov' src={AfenaAvatar} />

                                    <Text color="secondary.100">Olumide Francis</Text>
                                    <Text color="#57575B" fontSize="14px">CEO</Text>
                                </VStack>

                                <VStack w="100%" alignItems="center">
                                    <Avatar size='md' borderRadius={'md'} name='Dan Abrahmov' src={AfenaAvatar} />

                                    <Text color="secondary.100">Asabi Francis</Text>
                                    <Text color="#57575B" fontSize="14px">Co-founder</Text>
                                </VStack>

                                <VStack w="100%" alignItems="center">
                                    <Avatar size='md' borderRadius={'md'} name='Dan Abrahmov' src={AfenaAvatar} />

                                    <Text color="secondary.100">Kudirat Bakare</Text>
                                    <Text color="#57575B" fontSize="14px">Customer Service</Text>
                                </VStack>

                                <VStack w="100%" alignItems="center">
                                    <Avatar size='md' borderRadius={'md'} name='Dan Abrahmov' src={AfenaAvatar} />

                                    <Text color="secondary.100">Alex nwofor</Text>
                                    <Text color="#57575B" fontSize="14px">Marketing</Text>
                                </VStack>
                            </Flex>
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    )
}





export default ProjectIdeaCard;