import React from 'react'
import { Text, Box, HStack, VStack, Heading, Spacer, Alert, AlertIcon } from '@chakra-ui/react';


const WithDrawFund = () => {
    return (
        <VStack alignItems="flex-start" w="full" h="full">

            <HStack>
                <Text>&larr;</Text>
                <Text>Back</Text>
            </HStack>

            <HStack>
                <Text>Wallet &gt;&gt; </Text>
                <Text fontSize="30px" fontWeight="700">Withdraw funds</Text>
            </HStack>

            <Alert status='info' borderRadius="16px" padding="16px" bg="#EFF6FA" border="1px solid #117DB7">
                <AlertIcon />
                <Text fontSize="14px" color="#0E6898" fontWeight="400">Please note that a conversion fee of 20% would be charged on your withdrawals.</Text>
            </Alert>

        </VStack>
    );
}


export default WithDrawFund