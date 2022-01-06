import { Avatar, Box, Button, Flex, Grid, Heading, Text, VStack, Input, InputGroup, InputLeftElement, Stack, Spacer, Select, HStack, Image, CloseButton, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React, { useState } from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import SearchIcon from '../../../assets/images/icons/icons-set/linear/search-normal.svg'
import Drop from '../../../assets/images/icons/icons-set/bold/drop.svg'
import IdeaCard, { Cards } from '../components/IdeaCard'
import SirTAvatar from '../../../assets/images/users/Tochukwu.jpg'

const MyIdeas = ()=> {
    const [ideas, setIdeas] = useState([
        {
            image: SirTAvatar, 
            seller: {name: "JEJI"},
            tag: "Fintech, Agriculture",
            invState: "Equity",
            percentage: "5%",
            isSelected: true

        },
        {
            image: SirTAvatar, 
            seller: {name: "JEJI"},
            tag: "Fintech, Agriculture",
            invState: "Equity",
            percentage: "5%"

        },
        {
            image: SirTAvatar, 
            seller: {name: "JEJI"},
            tag: "Fintech, Agriculture",
            invState: "Equity",
            percentage: "5%"

        },
        {
            image: SirTAvatar, 
            seller: {name: "JEJI"},
            tag: "Fintech, Agriculture",
            invState: "Equity",
            percentage: "5%"

        },
    ]);

    return(
        <Flex width="full" height="100vh" direction="row">
                
                <VStack width="full" bg="background.100">
                    
                    <Heading display="flex" flexDirection="column" alignItems="flex-start" w="100%" mr = "20px">
                            My Ideas
                        </Heading>    

                        <Box width = "full" display="flex" flexDirection="column" alignItems="flex-start">
                            <Tabs w = "full">
                                <TabList width = "fit-content">
                                    <Tab>Active Ideas</Tab>
                                    <Tab>Inactive Ideas</Tab>
                                </TabList>

                                <TabPanels width = "full">

                                    <TabPanel width = "full">
                                    { /* Search section */ }
                                        <HStack width = "full" justifyContent= "flex-start">

                                            {/* Left for Active Ideas */}
                                            <VStack width="30%" alignItems="center" justifyContent="flex-start">
                                                    <Spacer/>
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
                                                                <IdeaCard key={idx} image = {idea.image} seller = {idea.seller} tag = {idea.tag} invState = {idea.invState} percentage = {idea.percentage} isSelected={idea.isSelected} />
                                                            ))
                                                        }
                                                       </Cards>
                                                    </VStack>

                                            </VStack>


                                            {/* Right for Active Ideas */}
                                            <VStack>

                                            </VStack>
                                        </HStack>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>two!</p>
                                    </TabPanel>
                                    
                                </TabPanels>
                                </Tabs>

                        
                        </Box>
                    
                </VStack>
            </Flex>
    )
}

export default MyIdeas