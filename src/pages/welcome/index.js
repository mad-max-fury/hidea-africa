import React from 'react'
import { Heading, Box, Container, Flex, Icon, Image, VStack, HStack , Button, Text, Link } from '@chakra-ui/react'

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

                </Container>

            </Box>
            
            
        </Box>
    )
}







export default Welcome;
