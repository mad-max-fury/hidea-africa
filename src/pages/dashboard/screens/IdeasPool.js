import { Avatar, Box, Button, Flex, Grid, Checkbox, CheckboxGroup, Modal, ModalBody, ModalContent, ModalFooterProps, ModalHeader, ModalOverlay, ModalCloseButton, Heading, Text, VStack, Input, InputGroup, InputLeftElement, Stack, Spacer, Select, HStack, Image, CloseButton, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React, { useState } from 'react'
import Drop from '../../../assets/images/icons/icons-set/bold/drop.svg'
import Techy from '../../../assets/images/techy.jpg'
import Eye from '../../../assets/images/icons/eye.svg'
import Bookmark from '../../../assets/images/bookmark.svg'
import Warning from '../../../assets/images/icons/icons-set/bold/wallet.svg'


import { ideasModel } from '../../../model/ideas.model.js'


const IdeasPool = ()=> {
    const [investor, setInvestor] = useState('true');
    const [category, setCategory] = useState('true');
    const [roi, setRoi] = useState('true');


    const onClose = ()=> setModalIsOpen(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (

        <Box width="full" direction="row">
            <Flex width='full' justifyContent="space-between">
                <VStack bg='#fff' width='25%' height="fit-content">
                    
                    {/* Investment selection options */}

                    <Box w="full" p="1rem">
                        
                        <HStack bgColor='#fff' cursor="pointer" justifyContent="space-between" onClick={()=> {
                                if (investor == 'true')
                                    setInvestor('false')
                                else
                                    setInvestor('true')
                            }}>
                            <Text fontWeight="black" >Investment amount</Text>
                            <Image src={ Drop } />
                        </HStack>

                        <VStack 
                        style={investor === 'true'? {display:'none'}: {display:'block'}} >
                            <Text color="blackAlpha.600" mt="0.5rem" alignSelf="flex-start">Minimum Amount</Text>
                            <Input placeholder='0000000' size='md' />

                            <Text color="blackAlpha.600" mt="0.5rem" alignSelf="flex-start">Maximum Amount</Text>
                            <Input placeholder='1,000,000,000,000' size='md' />
                        </VStack>
                    </Box>

                    {/* Category search */}

                    <Box w="full" p="1rem">
                        
                        <HStack bgColor='#fff' cursor="pointer" justifyContent="space-between"
                        onClick={()=> {
                            if (category == 'true')
                                setCategory('false')
                            else
                                setCategory('true')
                        }}>
                            <Text fontWeight="black" >Category</Text>
                            <Image src={ Drop } />
                        </HStack>

                        <VStack mt="0.5rem" spacing={[1, 5]} direction={['column', 'row']}
                        style={category === 'true'? {display:'none'}: {display:'flex'}}>
    
                            <Checkbox alignSelf="flex-start" size='md' colorScheme='green'>
                                Agriculture
                            </Checkbox>

                            <Checkbox alignSelf="flex-start" size='md' colorScheme='green'>
                                Education
                            </Checkbox>

                            <Checkbox alignSelf="flex-start" size='md' colorScheme='green'>
                                Entertainment
                            </Checkbox>

                            <Checkbox alignSelf="flex-start" size='md' colorScheme='green'>
                                Fintech
                            </Checkbox>

                            <Checkbox alignSelf="flex-start" size='md' colorScheme='green'>
                                Games
                            </Checkbox>

                            <Checkbox alignSelf="flex-start" size='md' colorScheme='green'>
                                Health
                            </Checkbox>

                            <Checkbox alignSelf="flex-start" size='md' colorScheme='green'>
                                Transportation
                            </Checkbox>
                            
                        </VStack>

                    </Box>

                    {/* ROI search options */}

                    <Box w="full" p="1rem">
                        
                        <HStack bgColor='#fff' cursor="pointer" justifyContent="space-between"
                        onClick={()=> {
                            if (roi == 'true')
                                setRoi('false')
                            else
                                setRoi('true')
                        }}>
                            <Text fontWeight="black">ROI</Text>
                            <Image src={ Drop } />
                        </HStack>

                        <VStack mt="0.5rem" spacing={[1, 5]} direction={['column', 'row']}
                        style={roi === 'true'? {display:'none'}: {display:'flex'}}>
    
                            <Checkbox alignSelf="flex-start" size='md' colorScheme='green'>
                                Interest on capital
                            </Checkbox>

                            <Checkbox alignSelf="flex-start" size='md' colorScheme='green'>
                                Equity
                            </Checkbox>

                            <Checkbox alignSelf="flex-start" size='md' colorScheme='green'>
                                Shares
                            </Checkbox>
                        </VStack>

                    </Box>
                </VStack>

                <Stack w="70%" height="fit-content">
                    <HStack w="full" justifyContent="space-between">
                        <Text fontWeight="black">Recommended for you</Text>
                        <Text color="secondary.100" cursor="pointer">View All</Text>
                    </HStack>

                    {/* IdeaPool ideacards */}

        
                    <Grid templateColumns='repeat(5, 1fr)' width="150%" gap={6}>
                        <IdeaCardType onClick={()=> setModalIsOpen(true)}/>
                        <IdeaCardType onClick={()=> setModalIsOpen(true)}/>
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


                <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={modalIsOpen} size="4xl">
                    <ModalOverlay />
                    <ModalContent maxWidth="40vw" maxHeight="fit-content">
                    <br /><br />
                        <ModalCloseButton />
                        <ModalBody margin="auto" w="90%">
                            <ModalHeader>
                                Please read information carefully.
                            </ModalHeader>

                            <HStack bgColor="#FEF8E6" justifyContent="center">
                                <Image src={ Warning } alt="warning sign" />
                                <Text padding="0" bgColor="#FEF8E6">
                                    This is not a buying and selling transaction, this is for viewing purposes only. 
                                    Any idea stolen from here is tantamount to intellectual property fraud, stealing by conversion.
                                </Text>
                            </HStack>
                        </ModalBody>
                    </ModalContent>

                </Modal>
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
