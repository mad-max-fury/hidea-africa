import { Avatar, Box, Button, Flex, Grid, Heading, Text, VStack, Input, InputGroup, InputLeftElement, Stack, Spacer, Select, HStack, Image, CloseButton, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React, { useState } from 'react'
import Drop from '../../../assets/images/icons/icons-set/bold/drop.svg'
import Techy from '../../../assets/images/techy.jpg'
import Eye from '../../../assets/images/icons/eye.svg'
import Bookmark from '../../../assets/images/bookmark.svg'


import { ideasModel } from '../../../model/ideas.model.js'



const IdeasPool = ()=> {

    return (

        <Box width="full" direction="row">
            <Flex width='full' justifyContent="space-between">
                <VStack bg='#fff' width='25%' height="fit-content">
                    <Box w="full" p="1rem">

                        {/* Investment selection options */}

                        <Select bg='#fff' mb="20px" icon={<Image src={Drop} />} variant='filled'>
                            <option value="A-Z">Investment amount</option>

                            <Input type="text" />
                            <option value="A-Z">N 50,000</option>
                            <option value="A-Z">N 100,000</option>
                            <option value="A-Z">N 150,000</option>
                            <option value="A-Z">N 250,000</option>

                            <option value="A-Z">N 500,000</option>
                        </Select>
                        <Select bg='#fff' mb="20px" icon={<Image src={Drop} />} variant='filled'>
                            <option value="A-Z">Category</option>

                        </Select>
                        <Select bg='#fff' icon={<Image src={Drop} />} variant='filled'>
                            <option value="A-Z">ROI</option>

                        </Select>
                    </Box>
                </VStack>

                <Stack w="70%" height="fit-content">
                    <HStack w="full" justifyContent="space-between">
                        <Text fontWeight="black">Recommended for you</Text>
                        <Text color="secondary.100" cursor="pointer">View All</Text>
                    </HStack>

                    {/* IdeaPool ideacards */}

        
                    <Grid templateColumns='repeat(5, 1fr)' width="150%" gap={6}>
                        <IdeaCardType/>
                        <IdeaCardType/>
                        <IdeaCardType/>
                        <IdeaCardType/>
                        <IdeaCardType/>
                        
                    </Grid>
                    
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Text fontWeight="black">All category</Text>

                    {/* Grid for 'all category' section of the ideapool */}
                    <Grid templateColumns='repeat(2, 1fr)'gap={6}>
                        <IdeaCardType height="60%"/>
                        <IdeaCardType height="60%"/>
                        <IdeaCardType height="60%"/>
                        <IdeaCardType height="60%"/>
                        <IdeaCardType height="60%"/>
                        <IdeaCardType height="60%"/>
                    </Grid>

                </Stack>

            </Flex>



        </Box>
    )
}

const IdeaCardType = (height) => {
    const [ideas, setIdeas] = useState(ideasModel);

    const TextDescription = ["Bridging the gap betwen consumers and farmers while providing a platform"]
    const ShowMore = (ev) => {
      let { target } = ev
      let { id } = target
      if (target.classList.contains('active')) {
        target.innerText = 'Read More'
        target.previousElementSibling.innerText = getText(TextDescription[0]) + '...'
        target.classList.remove('active')
      } else {
        target.previousElementSibling.innerText = TextDescription[0]
        target.innerText = 'Show Less'
        target.classList.add('active')
      }
    }
  
    const getText = (text) => {
      if (text.length > 20) {
        return (
          text.slice(0, 15)
        );
      }
    };
    return (


        <Box display="flex" h="fit-content" w="full">
            <VStack width="100%" bgColor="#fff" borderRadius="16px" padding="1rem" height="fit-content" alignItems="flex-start">
                <Image borderRadius="10px" width="100%" position="relative" height={height ? height : "40%"} src= {Techy}/>

                <Image src={Bookmark} alt="option to save  idea"  position="absolute" />
                <Text fontSize="12px" color="blackAlpha.700"> Fintech, agriculture</Text>
                <Text fontWeight="bold">JEJI</Text>
                <Text mt="2rem" fontSize="0.8rem" width="100%" height="fit-content" color="blackAlpha.700">
                {getText(TextDescription) + '...'}
                </Text><Text id={(0).toString()} cursor="pointer" style={{fontWeight:'bolder', fontSize:'14px'}} color="secondary.100" onClick={ShowMore}>Read More</Text>
                
                <HStack>
                    <Image width="1rem" src={ Eye } alt="Number of views" />
                    <Text fontSize="10px" color="blackAlpha.700"> 2000 Views</Text>
                </HStack>
                
            </VStack>


        </Box>
    )

}

export default IdeasPool
