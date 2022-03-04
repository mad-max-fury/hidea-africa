import { Avatar, Box, Button, Flex, Grid, Heading, Text, VStack, Input, InputGroup, InputLeftElement, Stack, Spacer, Select, HStack, Image, CloseButton, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react'
import Drop from '../../../assets/images/icons/icons-set/bold/drop.svg'

const IdeasPool = ()=> {
    return (
        <Box width="full" height="100vh" direction="row">
            <Flex width='full'>
                <VStack bg='#fff' width='20%' mt='20px'>
                    <Box>
                        <Select bg='#fff' icon= {<Image src = {Drop}/>} variant='filled'>
                            <option value="A-Z">Investment Amount</option>
                            <option value="A-Z">N 50,000</option>
                            <option value="A-Z">N 100,000</option>
                            <option value="A-Z">N 150,000</option>
                            <option value="A-Z">N 250,000</option>
                            <option value="A-Z">N 500,000</option>
                            
                            
                            
                        </Select>   
                        <Select bg='#fff' icon= {<Image src = {Drop}/>} variant='filled'>
                            <option value="A-Z">Category</option>
                            
                        </Select>   
                        <Select bg='#fff' icon= {<Image src = {Drop}/>} variant='filled'>
                            <option value="A-Z">ROI</option>
                            
                        </Select>    
                    </Box>
                </VStack>

                <HStack>

                </HStack>
            </Flex>

        </Box>        
    )
}

export default IdeasPool
