import { Box, Button, Flex, Heading, Text, VStack, Spacer, Select } from '@chakra-ui/react'
import React from 'react'

const Home = ()=> {

    return (
        <Flex>

            <VStack alignItems="flex-start">

                <Text fontWeight="700" fontSize="24px">Welcome Allison,</Text>
                <Box display="flex" flexDirection="row" mt="8" mb="8" padding="16px" pb="6" h="fit-content" width="fit-content" bg="white" borderRadius="16px" w="704px">
                    <Box alignItems="flex-start" flex="1">
                        <p>Total investments</p>
                        <Heading>SC 42,000,000</Heading>

                        {/* Percentage reading */}
                        <Flex w="full" justifyContent="space-between" mt="8">
                            <VStack alignItems="flex-start" flex="1">
                                <p className="text-xs">Total equity</p>
                                <Text fontWeight="700">10%</Text>
                            </VStack>

                            <VStack alignItems="flex-start" flex="1">
                                <p className="text-xs">Total interest</p>
                                <Text fontWeight="700">25%</Text>
                            </VStack>
                        </Flex>

                        <Button bg="secondary.100" color="white" w="90%" h="48px" mt="56px">View report</Button>
                    </Box>


                    {/* Graph section */}
                    <VStack flex="1" alignItems="flex-end">

                        <Select w="fit-content" iconColor="secondary.100" variant="unstyled" textColor="secondary.100">
                            <option>Weekly</option>
                            <option>Daily</option>
                            <option>Monthly</option>
                        </Select>
                        
                    </VStack>


                </Box>


                {/* Active ideas section */}

            </VStack>

        </Flex>
    )
}

export default Home
