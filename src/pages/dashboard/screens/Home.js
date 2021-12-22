import { Avatar, Box, Button, Flex, Grid, Heading, Text, VStack, Spacer, Select, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import SirTAvatar from '../../../assets/images/users/Tochukwu.jpg'
import MiraAvatar from '../../../assets/images/users/mira.jpg'
import MeadAvatar from '../../../assets/images/users/mead.jpg'
import GregAvatar from '../../../assets/images/users/gregoryanthony.jpg'
import AfenaAvatar from '../../../assets/images/users/afena.jpg'
import SingaCoin from '../../../assets/images/singa.png'

import ImportIcon from '../../../assets/images/icons/icons-set/linear/import.svg'
import ExportIcon from '../../../assets/images/icons/icons-set/linear/export.svg'

const Home = ()=> {

    return (
        <Box width="full">
            <Text fontWeight="700" fontSize="24px">Welcome Allison,</Text>
            <Flex width="full" justifyContent="space-between" alignItems="flex-start" mt="8">

                <Box display="flex" flexDirection="column" alignItems="flex-start" w="65%">
                    <Box display="flex" flexDirection="row" mb="8" padding="25px" pb="6" h="fit-content" width="fit-content" bg="white" borderRadius="16px" w="100%">
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

                            <Button bg="secondary.100" color="white" w="80%" h="48px" mt="56px" mb="10px">View report</Button>
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
                            <IdeaCard image={MiraAvatar} title="Mira Ahmadeen" caption="Gaming Industry" invState="Equity" percentage="5%" />
                            <IdeaCard image={MeadAvatar} title="Anita Edward" caption="Education" invState="Equity" percentage="5%" />
                            <IdeaCard image={GregAvatar} title="Gregory Anthony" caption="Politics" invState="Equity" percentage="5%" />
                            <IdeaCard image={AfenaAvatar} title="Afena Athai" caption="Fintech, Agriculture" invState="Equity" percentage="5%" />
                            <IdeaCard image={SirTAvatar} title="JEJI" caption="Fintech, Agriculture" invState="Equity" percentage="5%" />


                        </Grid>
                    </VStack>

                </Box>



                {/* Right section */}
                <Box>
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
                            <Text fontWeight="700">Transaction history</Text>
                            <Text color="secondary.100" fontWeight="700">View All</Text>
                        </HStack>

                        {/* Transactions List */}
                        <Box w="full">
                            <Text mt="8px">Sep 13, 2021</Text>
                            <Transaction source="Wallet" transactionState="Top up" amount="2,000,000" incoming={false} />
                        </Box>

                        <Box w="full">
                            <Transaction source="Jeji" transactionState="Idea Investment" amount="12,000,000" incoming={true} />
                        </Box>

                        <Box w="full">
                            <Transaction source="Jeji" transactionState="Idea Investment" amount="12,000,000" incoming={true} />
                        </Box>


                    </Box>
                    

                </Box>

                </Flex>
        </Box>
    )
}


//Transaction component
const Transaction = ({ incoming, source, transactionState, amount })=> {
    return (
        <Box w="full" display="flex" alignItems="flex-start" justifyContent="space-between" mt="8px">
            <HStack alignItems="flex-start">

                <Box bg={incoming ? "#FCDCDC" : "#F2F7F0"} borderRadius="8px" w="32px" h="32px" display="flex" alignItems="center" justifyContent="center">
                    <Image src={incoming ? ImportIcon : ExportIcon} alt="Import/Export Icon" />
                </Box>

                <VStack>
                    <Text fontWeight="700">{ source }</Text>
                    <Text fontSize="14px">{ transactionState }</Text>
                </VStack>
                        
            </HStack> 


            <Text fontWeight="700" fontColor={incoming ? "#AA0A0A" : "#2A5D19"}>SC { amount }</Text>

        </Box>
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
