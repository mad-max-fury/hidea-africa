import { Avatar, Box, Button, Flex, Grid, Heading, Text, VStack, Spacer, Select, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import SirTAvatar from '../../../assets/images/users/Tochukwu.jpg'
import SingaCoin from '../../../assets/images/singa.png'

const Home = ()=> {

    return (
        <Flex width="full" justifyContent="space-between" alignItems="flex-start">

            <Box display="flex" flexDirection="column" alignItems="flex-start">

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
                <VStack w="full" mt="40px">
                    <HStack w="full" justifyContent="space-between">
                        <Text fontWeight="700">Active ideas</Text>
                        <Text fontWeight="700" color="secondary.100">View All</Text>
                    </HStack>
                    <Spacer />

                    <Grid templateColumns="repeat(2, 1fr)" gap="4">

                        <IdeaCard image={SirTAvatar} title="JEJI" caption="Fintech, Agriculture" invState="Equity" percentage="5%" />
                        <IdeaCard image={SirTAvatar} title="JEJI" caption="Fintech, Agriculture" invState="Equity" percentage="5%" />
                        <IdeaCard image={SirTAvatar} title="JEJI" caption="Fintech, Agriculture" invState="Equity" percentage="5%" />
                        <IdeaCard image={SirTAvatar} title="JEJI" caption="Fintech, Agriculture" invState="Equity" percentage="5%" />
                        <IdeaCard image={SirTAvatar} title="JEJI" caption="Fintech, Agriculture" invState="Equity" percentage="5%" />
                        <IdeaCard image={SirTAvatar} title="JEJI" caption="Fintech, Agriculture" invState="Equity" percentage="5%" />


                    </Grid>
                </VStack>

            </Box>



            {/* Right section */}
            <Box mt="57px">
                <VStack width="350px" height="239px" bg="white" alignItems="center" justifyContent="center" borderRadius="16px">

                    <Image src={ SingaCoin } alt="SingaCoin" width="222px" />
                    <Text fontWeight="700">1 Singa coin = 1 Naira</Text>

                </VStack>

                <Text fontWeight="700" mt="40px" mb="8px">Wallet</Text>

                {/* Transaction section */}
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" borderRadius="16px" className="px-5 py-3" bg="white
                ">
                    <Text>Balance</Text>
                    <Heading fontSize="25px" mb="8">SC 200,000,000</Heading>
                    <Button variant="outline" borderColor="secondary.100" w="70%" h="48px" color="secondary.100">Fund wallet</Button>
                    <HStack width="full" justifyContent="space-between" mt="8">
                        <Text>Transaction history</Text>
                        <Text color="secondary.100">View All</Text>
                    </HStack>
                </Box>
                

            </Box>

        </Flex>
    )
}


//Transaction component
const Transaction = ()=> {
    return (
        
    )
}

const IdeaCard = ({ image, title, caption, invState, percentage })=> {
    return (
        <Box display="flex" alignItems="center" justifyContent="flex-start" padding="4" w="344px" h="82px" bg="white">
            <Avatar src={ image } borderRadius="8px" w="50px" h="50px" mr="4" />
            <VStack mr="50px" alignItems="flex-start">
                <Text color="#57575b" fontWeight="700">{ title }</Text>
                <Text color="#5F5E73" fontSize="14px">{ caption }</Text>
            </VStack>

            <VStack alignItems="flex-start">
                <Text color="#5F5E73" fontSize="14px">{ invState }</Text>
                <Text color="secondary.100">{ percentage }</Text>
            </VStack>


        </Box>
    )
}

export default Home
