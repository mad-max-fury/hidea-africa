import { Avatar, Box, Button, Flex, Grid, InputRightElement, Heading, Modal, ModalBody, ModalContent, ModalOverlay, ModalCloseButton, ModalHeader, Text, VStack, Input, InputGroup, InputLeftElement, Stack, Spacer, Select, HStack, Image, CloseButton, Switch, Tabs, TabList, TabPanels, Tab, TabPanel, Link } from '@chakra-ui/react'

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Singa from '../../../assets/images/singa1.svg'
import InflowIcon from '../../../assets/images/icons/inflow.svg'
import InvestmentIcon from '../../../assets/images/icons/investments.svg'
import EmptyUser from '../../../assets/images/empty-user.png'
import SearchIcon from '../../../assets/images/icons/icons-set/linear/search-normal.svg'
import { ideasModel } from '../../../model/ideas.model'

import Investments from '../data/investment.data'



const Wallet = () => {

    const [transactions, setTransactions] = useState(1);
    const navigate = useNavigate();

    return (
        <Box w="100%">
            <HStack w="full" justifyContent="space-between" alignItems="flex-start">
                <VStack w="60%">
                        <HStack alignItems="flex-start" alignItems="center" w="full" h="max-content" borderRadius="1rem" color="#fff" className='wallet_aside' bgColor="primary.100">
                            <VStack alignItems="flex-start" p="3rem" h="50%" borderRightStyle="solid" borderRightColor="#E5E5E5">
                                <Text alignSelf="start" fontWeight="light">Wallet Balance</Text>
                                <Spacer />
                                <Heading fontSize="3xl">SC 200,000,000</Heading>
                                <Spacer />
                                <Spacer />
                                <Spacer />
                        
                                
                                <VStack spacing="6" mb="4rem" w='full' alignItems="flex-start" justifyContent="space-between">
                                    {/* <Button p="1rem" w='100%' h="50px" fontWeight="light" alignSelf="start" bgColor="secondary.100">
                                        Fund Wallet
                                    </Button> */}
                          
                                <Box
                                as='button'
                                w="80%"
                                lineHeight='1.2'
                                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                border='1px'
                                px='30px'
                                py='15px'
                                borderRadius='5px'
                                fontSize='14px'
                                fontWeight='semibold'
                                bg='secondary.100'
                                borderColor='secondary.100'
                                color='#fff'
                                _hover={{ bg: '' }}
                                _active={{
                                    bg: '#dddfe2',
                                    transform: 'scale(0.98)',
                                    borderColor: '#bec3c9',
                                }}
                                _focus={{
                                    boxShadow:
                                    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                                    }}
                                    onClick={()=> navigate('./fund-wallet')}
                                >
                                Fund Wallet
                                </Box>

                                    {/* <Button p="1rem" w='100%' h="50px" fontWeight="light" alignSelf="start" color="secondary.100" bgColor="transparent" borderStyle="solid" border="1px" borderColor="secondary.100">
                                    Withdraw fund
                                    </Button> */}
                                
                                
                                <Box
                                as='button'
                                w="80%"
                                lineHeight='1.2'
                                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                border='1px'
                                px='30px'
                                py='15px'
                                borderRadius='5px'
                                fontSize='14px'
                                fontWeight='semibold'
                                bg='transparent'
                                borderColor='secondary.100'
                                color='secondary.100'
                                _hover={{ bg: '' }}
                                _active={{
                                    bg: '#dddfe2',
                                    transform: 'scale(0.98)',
                                    borderColor: '#bec3c9',
                                }}
                                _focus={{
                                    boxShadow:
                                    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                                    }}
                                 onClick={()=> navigate('./withdraw-fund')}
                                >
                                Withdraw fund
                                </Box>
                                </VStack>
                                    
                            </VStack>

                            

                            <VStack borderLeft="1px solid #555" p="3rem" spacing="10px" fontSize="15px" alignItems="flex-start" h="min-content" paddingTop="0" paddingBottom="0">
                                <HStack  justifyContent="space-between">
                                    <Image src={Singa} alt="One Singa coin" />
                                    <Text fontWeight="700"> 1 Singa coin = 1 Naira</Text>
                                </HStack>
                                <Spacer />
                                <Spacer />

                                <HStack>
                                    <Image src={InflowIcon} alt="Icon depicting inflow of investments" />

                                    <VStack alignItems="flex-start">
                                        <Text>Inflow</Text>
                                        <Text fontWeight="700">SC 420,000,000</Text>
                                    </VStack>
                                </HStack>

                                <Spacer />
                                <HStack>
                                    <Image src={InvestmentIcon} alt="Icon depicting inflow of investments" />

                                    <VStack alignItems="flex-start">
                                        <Text>Investments</Text>
                                        <Text fontWeight="700">SC 420,000,000</Text>
                                    </VStack>
                                </HStack>
                                
                            </VStack>
                        </HStack>

                    <Spacer />
                    <Spacer />
                    <HStack w="full" justifyContent="space-between">
                        <Text fontWeight="black">Investments (20)</Text>
                        <InputGroup width="30%" variant="filled">
                            <InputLeftElement
                            pointerEvents='none'
                            children={<Image src={ SearchIcon } alt="Search Icon" color='gray.300' />}
                            />
                            <Input type='text' placeholder='Search' />
                        </InputGroup>
                    </HStack>

                    <Flex w="full">
                        <Investments />
                    </Flex>

                </VStack>


                <VStack w="35%">
                    <VStack alignItems="flex-end" padding="15px" bgColor="#fff" w="full" border="1px" borderStyle="solid" borderColor="#DFDFE3" borderRadius="16px">
                        <HStack w="full" justifyContent="space-between">
                            <Text fontWeight="black" fontSize="14px">Transaction Overview</Text>
                            <Select fontWeight="700" fontSize="14px" alignSelf="flex-end" w="fit-content" iconColor="secondary.100" variant="unstyled" textColor="secondary.100">
                                <option>Weekly</option>
                                <option>Daily</option>
                                <option>Monthly</option>
                            </Select>
                        </HStack>

                        <HStack fontSize="14" justifyContent="flex-end">
                            <Box w=".8rem" h=".8rem" border="1px" borderStyle="solid" color="#e5e5e5" borderRadius="50%" bgColor="#93A2FF"> </Box> <Text> Inflow</Text>
                            <Box className="block" w=".8rem" height=".8rem" borderRadius="50%" bgColor="yellow.100"> </Box> <Text> Expense</Text>
                        </HStack>
                    </VStack>

                    <VStack display="flex" flexDirection="column" alignItems="center" justifyContent="center" w="full" border="1px" borderStyle="solid" borderColor="#DFDFE3" borderRadius="16px" borderRadius="16px" className="px-5 py-3" bg="white">
        
                        <HStack width="full" justifyContent="space-between" mt="1">
                            <Text fontWeight="700">Transaction history</Text>
                            { transactions > 0 ? <Link fontWeight="700" href="./wallet/transaction-history" color="secondary.100">View All</Link> : null }
                        </HStack>

                        {/* Transactions List */}
                        {

                            transactions > 0  

                            ?
                            <Box w="full">
                                <Text mt="8px">Sep 13, 2021</Text>
                                <Transaction source="Wallet" transactionState="Top up" amount="2,000,000" incoming={false} />

                                <Transaction source="Jeji" transactionState="Idea Investment" amount="12,000,000" incoming={true} />

                                    <Transaction source="Jeji" transactionState="Idea Investment" amount="12,000,000" incoming={true} />
                                    
                                     <Transaction source="Wallet" transactionState="Top up" amount="2,000,000" incoming={false} />

                                <Transaction source="Jeji" transactionState="Idea Investment" amount="12,000,000" incoming={true} />

                                    <Transaction source="Jeji" transactionState="Idea Investment" amount="12,000,000" incoming={true} />
                                     <Transaction source="Wallet" transactionState="Top up" amount="2,000,000" incoming={false} />

                                <Transaction source="Jeji" transactionState="Idea Investment" amount="12,000,000" incoming={true} />

                                <Transaction source="Jeji" transactionState="Idea Investment" amount="12,000,000" incoming={true} />
                            </Box>
                            :
                            
                            <>
                                <Image src={ EmptyUser } alt="Empty user" w="145px" mt="20px" mb="20px" />
                                <p>No transaction history available</p>
                            </>
                        }

                    </VStack>
                    
                </VStack>
            </HStack>
        </Box>
    )
}


const Transaction = ({ incoming, source, transactionState, amount })=> {
    return (
        <Box w="full" display="flex" alignItems="flex-start" justifyContent="space-between" mt="16px">
            <HStack alignItems="flex-start">

                <Box bg={incoming ? "#FCDCDC" : "#F2F7F0"} borderRadius="8px" w="32px" h="32px" display="flex" alignItems="center" justifyContent="center">
                    <Image src={incoming ? InflowIcon : InvestmentIcon} alt="Import/Export Icon" />
                </Box>

                <VStack alignItems="flex-start">
                    <Text fontWeight="700">{ source }</Text>
                    <Text fontSize="14px">{ transactionState }</Text>
                </VStack>
                        
            </HStack> 


            <Text fontWeight="700" fontColor={incoming ? "#AA0A0A" : "#2A5D19"}>SC { amount }</Text>

        </Box>
    )
}

// const Investments = ({ image, title, category, amount, roi, progress})=>{
//     return(
//         <Box>
//             <HStack>
//                 {image}
//             </HStack>
//         </Box>
//     )
// }

export default Wallet
