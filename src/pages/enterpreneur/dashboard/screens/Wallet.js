import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Text,
    Select,
    HStack,
    VStack,
    Box,
    Image,
    Flex,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
    Tab,
    Img,
    Heading,
    InputGroup,
    InputLeftElement,
    Input,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Spacer,
    Alert,
    AlertIcon,
    CheckboxGroup,
    Checkbox,
} from '@chakra-ui/react'
import SearchIcon from '../../../../assets/images/icons/icons-set/linear/search-normal.svg'
import WalletIcon from '../../../../assets/images/icons/icons-set/bold/wallet_dark.svg'




import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Singa from '../../../../assets/images/singa.png'
import InflowIcon from '../../../../assets/images/icons/inflow.svg'
import InvestmentIcon from '../../../../assets/images/icons/investments.svg'
import EmptyUser from '../../../../assets/images/empty-user.png'
import Walletsummary from '../components/walletsummary'



const Wallet = () => {
    const [modal, setModal] = useState(false);
    const [verify, setVerify] = useState(false);

    const navigate = useNavigate();


    const [withDrawFund, setWithDrawFund] = useState(false);
    const [transactions, setTransaction] = useState(1)
    const showModal = () => setModal(true);
    const onClose = () => setModal(false);
    const onVerify = () => {
        setModal(false);
        setVerify(true);
    }
    const onCloseVerify = () => setVerify(false);
    const onSubmit = (e) => e.preventDefault();
    const goBack = () => setWithDrawFund(false)






    return (
        <Box w="100%" height='fit-content'>

            {withDrawFund ?
                <VStack w="full" justifyContent="space-between" alignItems="flex-start" >

                    <Box w="full">

                        <HStack width="full" display="flex" flexDirection="row" alignItems="center" justifyContent={'space-between'}
                            padding='1rem 0'>
                            <HStack mb="24px">
                                <Text>Wallet &gt;&gt; </Text>
                                <Text fontSize="30px" fontWeight="700">Withdraw funds</Text>
                            </HStack>
                            <Button
                                size='md'
                                height='38px'
                                width='160px'
                                bgColor='green.500'
                                outline={'0'}
                                textColor='#fff'
                                letterSpacing={'1.6px'}
                                _hover={{ background: 'unset', color: 'green.500', border: ' 1px solid green' }} cursor="pointer" display={'flex'} gap='.5rem' w="fit-content" onClick={goBack}>
                                <Text>&larr;</Text>
                                <Text>Back</Text>
                            </Button>
                        </HStack>

                        <Alert status='info' borderRadius="16px" padding="16px" bg="#EFF6FA" border="1px solid #117DB7">
                            <AlertIcon />
                            <Text fontSize="14px" color="#0E6898" fontWeight="400">Please note that a conversion fee of 20% would be charged on your withdrawals.</Text>
                        </Alert>

                        <HStack justifyContent="space-between" alignItems="flex-start" padding="64px">
                            <VStack w="682px" alignItems="flex-start" pl="32px" pr="64px" borderRight="2px solid #CFCFD5">
                                <HStack w="full" justifyContent="space-between" mb="32px">
                                    <HStack>
                                        <HStack padding="16px" w="72px" h="56px" bg="#D5F4E2" justifyContent="center" alignItems="center" borderRadius="16px">
                                            <Image src={WalletIcon} alt="Wallet icon" />
                                        </HStack>
                                        <VStack ml="16px">
                                            <Text>Available balance</Text>
                                            <Text fontWeight="700">SC 200,000,000</Text>
                                        </VStack>
                                    </HStack>

                                    <Text color="secondary.100" fontSize="20px" fontWeight="700">NGN 200,000,000</Text>
                                </HStack>
                                <Spacer />
                                <Text fontWeight="700" mb="16px">Recipient details</Text>

                                <form style={{ width: "100%" }} onSubmit={onSubmit}>
                                    <Box mb="24px">
                                        <Text mb="8px" fontWeight="500">Bank Name</Text>
                                        <Select placeholder="Select bank" w="full" size="lg">

                                        </Select>
                                    </Box>

                                    <Box mb="24px">
                                        <Text mb="8px" fontWeight="500">Account Number</Text>
                                        <Input placeholder="Enter account number" w="full" size="lg" />
                                    </Box>

                                    <Box mb="24px">
                                        <Text mb="8px" fontWeight="500">Account Name</Text>
                                        <Input placeholder="Enter account number" w="full" size="lg" />
                                    </Box>

                                    <Box mb="24px">
                                        <Text mb="8px" fontWeight="500">Amount</Text>
                                        <Input placeholder="NGN0.00" w="full" size="lg" />
                                    </Box>

                                    <Box mb="24px">
                                        <Text mb="8px" fontWeight="500">Naration (Option)</Text>
                                        <Input placeholder="Enter narration here..." w="full" size="lg" />
                                    </Box>

                                    <CheckboxGroup colorScheme='green' size="lg">
                                        <VStack spacing={[1, 5]} alignItems="flex-start">
                                            <Checkbox value='save-beneficiary-details'><Text>Save beneficiary details</Text></Checkbox>
                                            <Checkbox value='confirm'><Text>I confirm receipient details entered here are correct and valid.</Text></Checkbox>
                                        </VStack>
                                    </CheckboxGroup>

                                    <Button mt="24px" bgColor={'green.500'} _hover={{ background: 'unset', color: 'green.500', border: ' 1px solid green' }} textColor={'white'} w="full" onClick={showModal} >
                                        Withdraw funds
                                    </Button>
                                </form>

                            </VStack>

                            <VStack>

                            </VStack>


                            {/* Right */}
                            <VStack alignItems="flex-start" spacing="24px" px="60px">
                                <Text fontWeight="700">Withdrawal details</Text>
                                <VStack alignItems="flex-start">
                                    <Text>Recipient details</Text>
                                    <Text fontWeight="700">Kudirat Bakare, 0022000358, First Bank</Text>
                                </VStack>

                                <VStack alignItems="flex-start">
                                    <Text>Amount (NGN)</Text>
                                    <Text fontWeight="700">NGN 20,000,000</Text>
                                </VStack>

                                <VStack alignItems="flex-start">
                                    <Text>Conversion fee (20%)</Text>
                                    <Text fontWeight="700">NGN 40,000</Text>
                                </VStack>

                                <VStack alignItems="flex-start">
                                    <Text>Total amount</Text>
                                    <Text fontSize="25px" fontWeight="700" color="secondary.100">NGN 20,040,000</Text>
                                </VStack>

                            </VStack>
                        </HStack>

                        {
                            modal
                            &&
                            <Modal isOpen={modal} onClose={onClose} size="2xl">
                                <ModalOverlay />
                                <ModalContent maxW={'30vw'}>
                                    <ModalHeader></ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <VStack alignItems="center" spacing="24px">
                                            <Text fontWeight="700" fontSize="25px">Transaction</Text>

                                            <Alert status='info' borderRadius="16px" padding="16px" bg="#EFF6FA" border="1px solid #117DB7">
                                                <AlertIcon />
                                                <Text fontSize="14px" color="#0E6898" fontWeight="400"> Please enter your transaction PIN to finalize withdrawl request.</Text>
                                            </Alert>
                                            <Spacer />

                                            <Button onClick={onVerify} filled text="Verify" />
                                        </VStack>
                                    </ModalBody>


                                </ModalContent>
                            </Modal>
                        }

                        {
                            verify
                            &&
                            <Modal isOpen={verify} onClose={onCloseVerify} size="xl">
                                <ModalOverlay />
                                <ModalContent maxW='30vw'>
                                    <ModalHeader></ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody mb="56px">
                                        <VStack alignItems="center" spacing="24px">
                                            <Text fontWeight="700" fontSize="25px">Withdrawal request sent</Text>

                                            <Text fontSize="14px" textAlign="center" fontWeight="400"> Your withdrawal request has been sent.Funds would be remitted in 10 minutes..</Text>
                                        </VStack>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
                        }

                    </Box>
                </VStack>

                : <VStack w="full" justifyContent="space-between" alignItems="flex-start">
                    <Box width="full" display="flex" flexDirection="row" alignItems="center" justifyContent={'space-between'}
                        padding='1rem 0'>
                        <Box> <Heading as='h1' fontSize={'25px'}>Wallet</Heading></Box>
                        <Box display={'flex'} gap='1rem' >
                            <Button
                                size='md'
                                height='38px'
                                width='160px'
                                bgColor='green.500'
                                outline={'0'}
                                textColor='#fff'
                                letterSpacing={'1.6px'}
                                _hover={{ background: 'unset', color: 'green.500', border: ' 1px solid green' }}
                            >
                                Fund wallet
                            </Button>
                            <Button
                                size='md'
                                height='38px'
                                width='160px'
                                border=' 1px solid green'
                                bgColor={'unset'}
                                textColor='green.500'
                                letterSpacing={'1.6px'}
                                _hover={{ background: 'green.500', color: 'white', border: 'none' }}
                                onClick={() => setWithDrawFund(true)}
                            >
                                Withdraw fund
                            </Button>
                        </Box>
                    </Box>
                    <HStack width={'100%'} justifyContent={'space-between'}>
                        <Walletsummary />
                        <Walletsummary />
                        <Walletsummary />

                    </HStack>
                    <HStack w="100%">
                        <VStack width={'70%'} padding='1rem'>
                            <Box h={'50vh'} width='100%' borderRadius={'20px'} border={'1px solid red'}>

                            </Box>
                        </VStack>
                        <VStack display="flex" flexDirection="column" alignItems="center" justifyContent="center" w="28%" className="px-5 py-3" bg="white">
                            <img src={Singa} />

                            <Text fontWeight={'bold'}>1 Singa coin = 1 Naira</Text>

                        </VStack>
                    </HStack>
                    <HStack w="100%">
                        <VStack width={'70%'} padding='1rem'>
                            <Text alignSelf={'start'} padding='.2rem 0' fontSize={'16px'} fontWeight='bold'>Wallet balances</Text>
                            <Table variant='unstyled' colorScheme='teal'>
                                <Thead>
                                    <Tr bgColor={'#f5f5f7'}>
                                        <Th>Name</Th>
                                        <Th>Wallet number</Th>
                                        <Th isNumeric>Wallet balance (SC)</Th>
                                        <Th>Withdrawal status</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>My wallet</Td>
                                        <Td>001111855GYR6</Td>
                                        <Td isNumeric>55,502</Td>
                                        <Td textColor={'#0E6898'}>Non withdrawable</Td>

                                    </Tr>
                                    <Tr>
                                        <Td>My wallet</Td>
                                        <Td>001111855GYR6</Td>
                                        <Td isNumeric>55,502</Td>
                                        <Td textColor={'#0E6898'}>Non withdrawable</Td>

                                    </Tr>
                                    <Tr>
                                        <Td>My wallet</Td>
                                        <Td>001111855GYR6</Td>
                                        <Td isNumeric>55,502</Td>
                                        <Td textColor={'#0E6898'}>Non withdrawable</Td>

                                    </Tr>
                                    <Tr>
                                        <Td>My wallet</Td>
                                        <Td>001111855GYR6</Td>
                                        <Td isNumeric>55,502</Td>
                                        <Td textColor={'#0E6898'}>Non withdrawable</Td>

                                    </Tr>
                                    <Tr>
                                        <Td>My wallet</Td>
                                        <Td>001111855GYR6</Td>
                                        <Td isNumeric>55,502</Td>
                                        <Td textColor={'#0E6898'}>Non withdrawable</Td>

                                    </Tr>
                                    <Tr>
                                        <Td>My wallet</Td>
                                        <Td>001111855GYR6</Td>
                                        <Td isNumeric>55,502</Td>
                                        <Td textColor={'#0E6898'}>Non withdrawable</Td>

                                    </Tr>
                                    <Tr>
                                        <Td>My wallet</Td>
                                        <Td>001111855GYR6</Td>
                                        <Td isNumeric>55,502</Td>
                                        <Td textColor={'#0E6898'}>Non withdrawable</Td>

                                    </Tr>

                                </Tbody>

                            </Table>
                        </VStack>
                        <VStack display="flex" flexDirection="column" alignItems="center" justifyContent="center" w="28%" border="1px" borderStyle="solid" borderColor="#DFDFE3" borderRadius="16px" className="px-5 py-3" bg="white">
                            <HStack width="full" justifyContent="space-between" mt="1">
                                <Text fontWeight="700">Transaction history</Text>
                                {transactions > 0 ? <Text fontWeight="700" color="secondary.100">View All</Text> : null}
                            </HStack>
                            {/* Transactions List */}
                            {
                                transactions > 0
                                    ?
                                    <Tabs>
                                        <TabList>
                                            <Tab _selected={{ color: 'green.400', borderBottom: '3px solid #2DC86D' }}>Wallet </Tab>
                                            <Tab _selected={{ color: 'green.400', borderBottom: '3px solid #2DC86D' }}>Pay per Click</Tab>
                                        </TabList>
                                        <TabPanels>
                                            <TabPanel>
                                                <Box w="full">
                                                    <Text mt="8px">Sep 13, 2021</Text>
                                                    <Transaction source="Wallet" transactionState="Top up" amount="2,000,000" incoming={false} />

                                                    <Transaction source="Jeji" transactionState="Idea Investment" amount="12,000,000" incoming={true} />

                                                    <Transaction source="Jeji" transactionState="Idea Investment" amount="12,000,000" incoming={true} />

                                                    <Transaction source="Wallet" transactionState="Top up" amount="2,000,000" incoming={false} />

                                                    <Transaction source="Jeji" transactionState="Idea Investment" amount="12,000,000" incoming={true} />
                                                </Box>
                                            </TabPanel>
                                            <TabPanel>
                                                <Box w="full">
                                                    <Text mt="8px">Sep 13, 2021</Text>
                                                    <Transaction source="Wallet" transactionState="Top up" amount="2,000,000" incoming={false} />

                                                    <Transaction source="Jeji" transactionState="Idea Investment" amount="12,000,000" incoming={true} />

                                                    <Transaction source="Jeji" transactionState="Idea Investment" amount="12,000,000" incoming={true} />

                                                    <Transaction source="Wallet" transactionState="Top up" amount="2,000,000" incoming={false} />

                                                    <Transaction source="Jeji" transactionState="Idea Investment" amount="12,000,000" incoming={true} />
                                                </Box>
                                            </TabPanel>
                                        </TabPanels>
                                    </Tabs>
                                    :

                                    <>
                                        <Image src={EmptyUser} alt="Empty user" w="145px" mt="20px" mb="20px" />
                                        <p>No transaction history available</p>
                                    </>
                            }

                        </VStack>
                    </HStack>
                </VStack>
            }
        </Box>
    )
}


const Transaction = ({ incoming, source, transactionState, amount }) => {
    return (
        <Box w="full" display="flex" alignItems="flex-start" justifyContent="space-between" mt="16px">
            <HStack alignItems="flex-start">

                <Box bg={incoming ? "#FCDCDC" : "#F2F7F0"} borderRadius="8px" w="32px" h="32px" display="flex" alignItems="center" justifyContent="center">
                    <Image src={incoming ? InflowIcon : InvestmentIcon} alt="Import/Export Icon" />
                </Box>

                <VStack alignItems="flex-start">
                    <Text fontWeight="700">{source}</Text>
                    <Text fontSize="14px">{transactionState}</Text>
                </VStack>

            </HStack>


            <Text fontWeight="700" fontColor={incoming ? "#AA0A0A" : "#2A5D19"}>SC {amount}</Text>

        </Box>
    )
}


export default Wallet
