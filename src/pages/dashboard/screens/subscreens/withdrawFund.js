import React, { useState } from 'react'
import {
Text,
Box,
HStack,
VStack,
Image,
Spacer,
Alert,
AlertIcon,
Input,
Select,
CheckboxGroup,
Checkbox,
Heading,
Modal,
ModalOverlay,
ModalContent,
ModalHeader,
ModalFooter,
ModalBody,
ModalCloseButton,

} from '@chakra-ui/react'
import WalletIcon from '../../../../assets/images/icons/icons-set/bold/wallet_dark.svg'

import { Button } from '../../../../components/UI/Button'

import { useNavigate } from 'react-router-dom'


const WithDrawFund = () => {

    const [modal, setModal] = useState(false);
    const [verify, setVerify] = useState(false);

    const navigate = useNavigate();
    


    const showModal = () => setModal(true);
    const onClose = () => setModal(false);
    const onVerify = () => {
        setModal(false);
        setVerify(true);
    }
    const onCloseVerify = () => setVerify(false);
    const onSubmit = (e) => e.preventDefault();
    const goBack = () => navigate("/dashboard/wallet")

    return (
        <Box w="full">

            <HStack cursor="pointer" w="fit-content" onClick={ goBack }>
                <Text>&larr;</Text>
                <Text>Back</Text>
            </HStack>

            <HStack mb="24px">
                <Text>Wallet &gt;&gt; </Text>
                <Text fontSize="30px" fontWeight="700">Withdraw funds</Text>
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
                                <Image src={ WalletIcon } alt="Wallet icon" />
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

                    <form style={{width: "100%"}} onSubmit={ onSubmit }>
                        <Box mb="24px">
                            <Text mb="8px" fontWeight="500">Bank Name</Text>
                            <Select placeholder="Select bank" w="full" size="lg">
                                
                            </Select>
                        </Box>

                        <Box mb="24px">
                            <Text mb="8px" fontWeight="500">Account Number</Text>
                            <Input placeholder="Enter account number" w="full" size="lg"/>
                        </Box>

                        <Box mb="24px">
                            <Text mb="8px" fontWeight="500">Account Name</Text>
                            <Input placeholder="Enter account number" w="full" size="lg"/>
                        </Box>

                        <Box mb="24px">
                            <Text mb="8px" fontWeight="500">Amount</Text>
                            <Input placeholder="NGN0.00" w="full" size="lg"/>
                        </Box>

                        <Box mb="24px">
                            <Text mb="8px" fontWeight="500">Naration</Text>
                            <Input placeholder="Enter narration here..." w="full" size="lg"/>
                        </Box>

                        <CheckboxGroup colorScheme='green' size="lg">
                            <VStack spacing={[1, 5]} alignItems="flex-start">
                                <Checkbox value='save-beneficiary-details'><Text>Save beneficiary details</Text></Checkbox>
                                <Checkbox value='confirm'><Text>I confirm receipient details entered here are correct and valid.</Text></Checkbox>
                            </VStack>
                        </CheckboxGroup>

                        <Button mt="24px" filled w="full" text="Withdraw funds" onClick={showModal} />
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
                    <ModalContent>
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
                <Modal isOpen={verify} onClose={onCloseVerify} size="2xl">
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mb="56px">
                        <VStack alignItems="center" spacing="24px">
                            <Text fontWeight="700" fontSize="25px">Withdrawal request sent</Text>
                                    
                            <Text fontSize="14px" textAlign="center" fontWeight="400"> Your withdrawal request has been sent. Funds would be remitted within 24 hours.</Text>
                        </VStack>
                    </ModalBody>
                    </ModalContent>
                </Modal>
            }

        </Box>
    );
}


export default WithDrawFund