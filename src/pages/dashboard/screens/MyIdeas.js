import { Avatar, Box, Button, Flex, Grid, Heading, Text, VStack, Input, InputGroup, InputLeftElement, Stack, Spacer, Select, HStack, Image, CloseButton, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React, { useState } from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import SearchIcon from '../../../assets/images/icons/icons-set/linear/search-normal.svg'
import Drop from '../../../assets/images/icons/icons-set/bold/drop.svg'
import IdeaCard, { Cards } from '../components/IdeaCard'
import SirTAvatar from '../../../assets/images/users/Tochukwu.jpg'

const MyIdeas = ()=> {
    const [active, setActive] = useState(0);

    const [ideas, setIdeas] = useState([
        {
            image: SirTAvatar, 
            seller: {seller_name: "JEJI"},
            tag: "Fintech, Agriculture",
            invState: "Equity",
            percentage: "5%",
            isSelected: true

        },
        {
            image: SirTAvatar, 
            seller: {seller_name: "Paul Oke"},
            tag: "Health",
            invState: "Equity",
            percentage: "5%",
            isSelected: false,

        },
        {
            image: SirTAvatar, 
            seller: {seller_name: "Vicki Chan"},
            tag: "Education",
            invState: "Equity",
            percentage: "5%",
            isSelected: false,

        },
        {
            image: SirTAvatar, 
            seller: {seller_name: "Jerry Hans"},
            tag: "Enterpreneurship",
            invState: "Equity",
            percentage: "5%",
            isSelected: false,

        },
        {
            image: SirTAvatar, 
            seller: {seller_name: "Jerry Hans"},
            tag: "Enterpreneurship",
            invState: "Equity",
            percentage: "5%",
            isSelected: false,

        },
        {
            image: SirTAvatar, 
            seller: {seller_name: "Jerry Hans"},
            tag: "Enterpreneurship",
            invState: "Equity",
            percentage: "5%",
            isSelected: false,

        },
    ]);

    // const clickFnExec = _ => {
    //     const ideas_copy = ideas.map(idea => idea.isSelected = false);
    //     setIdeas(ideas_copy);

    // }

    return(
        <Flex width="full" height="100vh" direction="row">
                
                <VStack width="full" bg="background.100">
                    
                    <Heading display="flex" flexDirection="column" alignItems="flex-start" w="100%" mr = "20px" fontWeight='700' fontSize='25px'>
                            My Ideas
                        </Heading>    

                        <Box width = "full" display="flex" flexDirection="column" alignItems="flex-start">
                            <Tabs w = "full">
                                <TabList width = "fit-content" >
                                    <Tab>Active Ideas</Tab>
                                    <Tab>Inactive Ideas</Tab>
                                </TabList>

                                <TabPanels width = "full" >

                                    <TabPanel width = "full">
                                    
                                        <HStack width = "full" justifyContent= "space-between" alignItems = "flex-start" spacing = "4">

                                            {/* Left for Active Ideas */}
                                            <VStack width="30%" alignItems="center" justifyContent ="flex-start">
                                                    <Spacer/>
                                                    { /* Search section */ }
                                                    <InputGroup width="90%" variant="filled">
                                                        <InputLeftElement
                                                        pointerEvents='none'
                                                        children={<Image src={ SearchIcon } alt="Search Icon" color='gray.300' />}
                                                        />
                                                        <Input type='text' placeholder='Search' />
                                                    </InputGroup>
                                                    <Spacer/>
                                                

                                                
                                                    <HStack w = "full" justifyContent= "space-between">
                                                        <Text>
                                                            26 Active Ideas
                                                        </Text>
                                                        <Box>
                                                            <Select icon= {<Image src = {Drop}/>} variant='filled'>
                                                                <option value="A-Z">A-Z</option>
                                                                <option value="Z-A">Z-A</option>
                                                            </Select>    
                                                        </Box>

                                                    </HStack>
                                                    {/* Active Ideas */}
                                                    <VStack w = "full">
                                                       <Cards>
                                                        {
                                                            ideas.map((idea, idx) => (
                                                                <IdeaCard idx={idx} key={idx} image = {idea.image} seller = {idea.seller} tag = {idea.tag} invState = {idea.invState} percentage = {idea.percentage} isSelected={idea.isSelected} ideas={ideas} setIdeas={setIdeas} setActive={setActive} />
                                                            ))
                                                        }
                                                       </Cards>
                                                    </VStack>

                                            </VStack>


                                            {/* Right for Active Ideas */}
                                            <VStack w = "65%" spacing="0">
                                                        <HStack w = "full" justifyContent = "space-between">
                                                            <Box bg = "#fff" px = "5" py = "2" borderTopLeftRadius = "16px" borderTopRightRadius = "16px" color="#030309">
                                                                Investment Details
                                                            </Box>

                                                            <Text fontWeight="bold" color= "secondary.100">
                                                                View Idea Information
                                                            </Text>
                                                        </HStack>

                                                        <Box w = "full" justifyContent = "space-between" bg = "#fff" pt = "8" pr = "8" pb = "4"
                                                        pl = "8" borderTopRightRadius = "16px" borderBottomLeftRadius = "16px" borderBottomLeftRadius = "16px">

                                                            <HStack w = "full" justifyContent = "space-between" bg = "#fff">
                                                                <VStack alignItems = "flex-start" justifyContent = "flex-start">
                                                                    <Text fontSize="14px" color="#878696">
                                                                        Investment amount
                                                                    </Text>
                                                                    <Heading color= "secondary.100">
                                                                        SC 200,000,000.00
                                                                    </Heading>
                                                                    <Text color="#57575B">
                                                                        {ideas[active].tag}
                                                                    </Text>
                                                                </VStack>

                                                                <Box bg="#FEF8E6" color="#7A6003" className="px-4 py-2" borderRadius="16px">In progress</Box>
                                                            </HStack>

                                                            {/* Graph */}
                                                            <VStack mt="32px" mb="68px" alignItems="flex-start"> 
                                                                <Text fontWeight="700">Projected earning</Text>
                                                                <Spacer />
                                                                <Box bg="red.300" width="full" height="170px"></Box>
                                                            </VStack>

                                                            <VStack w="full">
                                                                <HStack w="full" justifyContent="space-between" alignItems="flex-start" spacing="50px">
                                                                    <VStack alignItems="flex-start" w="50%">
                                                                        <Text fontWeight="700">Projected timelines</Text>
                                                                        <VStack w="full" spacing="20px">
                                                                            <HStack w="full" justifyContent="space-between">
                                                                                <Text>Project start date</Text>
                                                                                <Text fontWeight="700">Jan 6, 2022</Text>
                                                                            </HStack>
                                                                            <HStack w="full" justifyContent="space-between">
                                                                                <Text>Project start date</Text>
                                                                                <Text fontWeight="700">Jan 6, 2022</Text>
                                                                            </HStack>
                                                                            <HStack w="full" justifyContent="space-between">
                                                                                <Text>Project start date</Text>
                                                                                <Text fontWeight="700">Jan 6, 2022</Text>
                                                                            </HStack>
                                                                        </VStack>
                                                                    </VStack>

                                                                    <VStack alignItems="flex-start" w="50%">
                                                                        <Text fontWeight="700">Return on investment</Text>
                                                                        <VStack w="full" spacing="20px">
                                                                            <HStack w="full" justifyContent="space-between">
                                                                                <Text>Equity</Text>
                                                                                <Text fontWeight="700">5%</Text>
                                                                            </HStack>
                                                                            <HStack w="full" justifyContent="space-between">
                                                                                <Text>Interest on capital</Text>
                                                                                <Text fontWeight="700">0%</Text>
                                                                            </HStack>
                                                                        </VStack>
                                                                    </VStack>
                                                                </HStack>
                                                            </VStack>
                                                            
                                                        </Box>
                                                        
                                            </VStack>
                                        </HStack>
                                    </TabPanel>
                                    <TabPanel width="full">
                                         <HStack width = "full" justifyContent= "space-between" alignItems = "flex-start" spacing = "4">

                                            {/* Left for Active Ideas */}
                                            <VStack width="30%" alignItems="center" justifyContent ="flex-start">
                                                    <Spacer/>
                                                    { /* Search section */ }
                                                    <InputGroup width="90%" variant="filled">
                                                        <InputLeftElement
                                                        pointerEvents='none'
                                                        children={<Image src={ SearchIcon } alt="Search Icon" color='gray.300' />}
                                                        />
                                                        <Input type='text' placeholder='Search' />
                                                    </InputGroup>
                                                    <Spacer/>
                                                

                                                
                                                    <HStack w = "full" justifyContent= "space-between">
                                                        <Text>
                                                            4 Inactive Ideas
                                                        </Text>
                                                        <Box>
                                                            <Select icon= {<Image src = {Drop}/>} variant='filled'>
                                                                <option value="A-Z">A-Z</option>
                                                                <option value="Z-A">Z-A</option>
                                                            </Select>    
                                                        </Box>

                                                    </HStack>
                                                    {/* Active Ideas */}
                                                    <VStack w = "full">
                                                    <Cards>
                                                        {
                                                            ideas.map((idea, idx) => (
                                                                <IdeaCard idx={idx} key={idx} image = {idea.image} seller = {idea.seller} tag = {idea.tag} invState = {idea.invState} percentage = {idea.percentage} isSelected={idea.isSelected} ideas={ideas} setIdeas={setIdeas} setActive={setActive} />
                                                            ))
                                                        }
                                                    </Cards>
                                                    </VStack>

                                            </VStack>


                                    {/* Right for Active Ideas */}
                                    <VStack w = "65%" spacing="0">
                                                <HStack w = "full" justifyContent = "space-between">
                                                    <Box bg = "#fff" px = "5" py = "2" borderTopLeftRadius = "16px" borderTopRightRadius = "16px" color="#030309">
                                                        Investment Details
                                                    </Box>

                                                    <Text fontWeight="bold" color= "secondary.100">
                                                        View Idea Information
                                                    </Text>
                                                </HStack>

                                                <Box w = "full" justifyContent = "space-between" bg = "#fff" pt = "8" pr = "8" pb = "4"
                                                pl = "8" borderTopRightRadius = "16px" borderBottomLeftRadius = "16px" borderBottomLeftRadius = "16px">

                                                    <HStack w = "full" justifyContent = "space-between" bg = "#fff">
                                                        <VStack alignItems = "flex-start" justifyContent = "flex-start">
                                                            <Text fontSize="14px" color="#878696">
                                                                Investment amount
                                                            </Text>
                                                            <Heading color= "secondary.100">
                                                                SC 200,000,000.00
                                                            </Heading>
                                                            <Text color="#57575B">
                                                                {ideas[active].tag}
                                                            </Text>
                                                        </VStack>

                                                        <Box bg="#FEF8E6" color="#7A6003" className="px-4 py-2" borderRadius="16px">In progress</Box>
                                                    </HStack>

                                                    
                                                    <VStack w="full">
                                                        <Spacer/>
                                                        <Spacer/>
                                                        <Spacer/>
                                                        <Spacer/>
                                                        <Spacer/>
                                                        <Spacer/>
                                                        <Spacer/>
                                                        <HStack w="full" justifyContent="space-between" alignItems="flex-start" spacing="50px">
                                                            <VStack alignItems="flex-start" w="50%">
                                                                <Text fontWeight="700">Projected timelines</Text>
                                                                <VStack w="full" spacing="20px">
                                                                    <HStack w="full" justifyContent="space-between">
                                                                        <Text>Project start date</Text>
                                                                        <Text fontWeight="700">Jan 6, 2022</Text>
                                                                    </HStack>
                                                                    <HStack w="full" justifyContent="space-between">
                                                                        <Text>Project start date</Text>
                                                                        <Text fontWeight="700">Jan 6, 2022</Text>
                                                                    </HStack>
                                                                    <HStack w="full" justifyContent="space-between">
                                                                        <Text>Project start date</Text>
                                                                        <Text fontWeight="700">Jan 6, 2022</Text>
                                                                    </HStack>
                                                                </VStack>
                                                            </VStack>

                                                            <VStack alignItems="flex-start" w="50%">
                                                                <Text fontWeight="700">Return on investment</Text>
                                                                <VStack w="full" spacing="20px">
                                                                    <HStack w="full" justifyContent="space-between">
                                                                        <Text>Equity</Text>
                                                                        <Text fontWeight="700">5%</Text>
                                                                    </HStack>
                                                                    <HStack w="full" justifyContent="space-between">
                                                                        <Text>Interest on capital</Text>
                                                                        <Text fontWeight="700">0%</Text>
                                                                    </HStack>
                                                                </VStack>
                                                            </VStack>
                                                        </HStack>
                                                    </VStack>
                
                                                </Box>
            
</VStack>
</HStack>
                                    </TabPanel>
                                    
                                </TabPanels>
                                </Tabs>

                        
                        </Box>
                    
                </VStack>
            </Flex>
    )
}

export default MyIdeas