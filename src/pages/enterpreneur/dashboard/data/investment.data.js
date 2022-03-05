import React, { useState, useEffect } from 'react'
import { Avatar, Box, Text, VStack, HStack, Grid } from '@chakra-ui/react'
import { ideasModel } from '../../../../model/ideas.model'


const Investment = ({ seller, sector, investmentAmount, roi, progress }) => {
    return (
        <VStack spacing="6" alignItems="flex-start" justifyContent="flex-start" w="100%" h="82px" bg="#fff" borderRadius="16px" mb="32">
            <HStack>
                <Avatar src={seller.image} borderRadius="8px" w="50px" h="50px" mr="4" />
                <VStack mr="50px" alignItems="flex-start">
                    <Text fontWeight="700">{seller.seller_name}</Text>
                    <Text fontSize="14px">{sector}</Text>
                </VStack>
            </HStack>

            <Box>
                <Text>Investment amount</Text>
                <Text fontWeight="700">{investmentAmount}</Text>
            </Box>

            <Box>
                <Text>Return on investment</Text>
                <Text fontWeight="700">{roi} Equity</Text>
            </Box>

            <HStack w="full" justifyContent="space-between">
                <Text px="15px" py="8px" borderRadius="10px" bg={progress < 100 ? "yellow.300" : "secondary.100"}>{progress < 100 ? "In progress" : "Completed"}</Text>
                <Text fontWeight="700">{progress}%</Text>
            </HStack>

        </VStack>
    )
}


const Investments = () => {
    return (
        <Grid pl="8" mt="40px" w="full" templateColumns="repeat(2, 1fr)" gap="32">

            {
                ideasModel.map(idea => (
                    <Investment seller={{ seller_name: idea.seller.seller_name, image: idea.seller.image }} sector={idea.sector} investmentAmount={idea.investment.amount} roi={idea.investment.interest_of_capital} progress={idea.progress} />
                ))
            }

        </Grid>
    )
}


export default Investments;