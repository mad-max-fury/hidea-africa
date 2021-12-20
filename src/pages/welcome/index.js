import React from 'react'
import { Heading, Box, Container, Image, Grid, VStack, Button } from '@chakra-ui/react'

import { Link as Rlink } from 'react-router-dom';


import crypto from "../../assets/images/icons/crypto.svg"
import mouse from "../../assets/images/icons/mouse.svg"



const Welcome = ()=> {
    return (
        <Box display={{md: "flex", sm: "block"}} width="full" height="100vh">
            {/* Left Box */}
            <Box width={{md: "40%", sm: "100%"}} h="full"  bg="primary.100">

            </Box>


            {/* Right Box */}
            <Box display="flex" justifyContent="center" alignItems="center" width={{md: "60%", sm: "100%"}} h="full" bg="#fff">

                <Container>

                    <Heading>Welcome Allison,</Heading>
                    <p>Thank you for signing up to Hidea Africa</p>

                    <LearnMore />

                </Container>

            </Box>
            
            
        </Box>
    )
}



const LearnMore = ({}) => {
    return (
        <Box display="flex" borderRadius="8px" py="16px" px="24px"  width="full" height="fit-content" bg="green.300">

            <Grid templateColumns="repeat(2, 1fr)">

                <VStack alignItems="flex-start" width="full">
                    <Image src={crypto} alt=""/>
                    <Heading size="sm">How Singa coin works</Heading>
                    <p>Digital currency for your transactions on Hidea.</p>
                </VStack>

                <VStack>
                    <Rlink to="/signup" className='w-full' >
                        <Button className="btn" type="button"
                            variant="filled"
                            width={{ base: '100%', lg: '45%' }}
                            mx={{ base: 0, lg: '.5rem' }}
                            my={{ base: '.5rem', lg: '0' }}
                            bg="#007AB9" size="xl" mw="full">
                            <Icon name="arrow-right" mr={2} />
                            Continue with linkedin
                        </Button>
                    </Rlink>
                </VStack>

            </Grid>

        </Box>
    );
}



export default Welcome;
