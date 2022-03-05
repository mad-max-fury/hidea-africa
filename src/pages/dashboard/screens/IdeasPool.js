import { Avatar, Box, Button, Flex, Grid, Heading, Text, VStack, Input, InputGroup, InputLeftElement, Stack, Spacer, Select, HStack, Image, CloseButton, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React, {useState} from 'react'
import Drop from '../../../assets/images/icons/icons-set/bold/drop.svg'
import Techy from '../../../assets/images/techy.jpg'
import { ideasModel } from '../../../model/ideas.model.js'

const IdeasPool = ()=> {
    return (
        <Box width="full" direction="row">
            <Flex width='full' justifyContent="space-between">
                <VStack bg='#fff' width='25%'>
                    <Box w="full" p="1rem">

                        {/* Investment selection options */}

                        <Select bg='#fff' mb="20px" icon= {<Image src = {Drop}/>} variant='filled'>
                            <option value="A-Z">Investment amount</option>
                            <option value="A-Z">N 50,000</option>
                            <option value="A-Z">N 100,000</option>
                            <option value="A-Z">N 150,000</option>
                            <option value="A-Z">N 250,000</option>
                            <option value="A-Z">N 500,000</option>                
                        </Select>   
                        <Select bg='#fff' mb="20px" icon= {<Image src = {Drop}/>} variant='filled'>
                            <option value="A-Z">Category</option>
                            
                        </Select>   
                        <Select bg='#fff' icon= {<Image src = {Drop}/>} variant='filled'>
                            <option value="A-Z">ROI</option>
                            
                        </Select>    
                    </Box>
                </VStack>
                
                <Stack w="70%" >
                    <HStack w="full" justifyContent="space-between">
                        <Text fontWeight="black">Recommended for you</Text>
                        <Text color="secondary.100" cursor="pointer">View All</Text>
                    </HStack>

                    {/* IdeaPool ideacards */}
                    <HStack>
                        <IdeaCardType />
                        
                    </HStack>
                </Stack>
                
            </Flex>

            

        </Box>               
    )
}

const IdeaCardType = ()=> {
    const [ideas, setIdeas] = useState(ideasModel);
    return (
        <Box display="flex" h="40vh" w="100%">
            <VStack w="40%" h="40vh">
                <Image borderRadius="16px" height="30%" src= {Techy} />
                <Text>{ideas.sector}</Text>
            </VStack>
            <VStack w="40%" h="40vh">
                <Image borderRadius="16px" height="30%" src= {Techy} />
                <Text>{ideas.sector}</Text>
            </VStack>
           
            
        </Box>
    )

}

export default IdeasPool
