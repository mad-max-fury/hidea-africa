import React, { useState } from 'react';
import { Heading, Box, Container, FormControl, VStack, Button, Text, Link, Checkbox } from '@chakra-ui/react'
import { Link as RouteLink } from 'react-router-dom';

export const TermsAndCondition = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    return (
        <Container maxW="container.xl" p={0} alignItems="center"
        justifyContent="center" >
            {!isFormSubmitted ?
                <VStack
                    w="full"
                    h="full"
                    p={4}
                    
                    spacing={8}>

                    <ul style={{ listStyle: 'disc' }}>
                        <li>I understand that most investments in startups may result in a complete loss.</li>
                        <li>I understand that Hidea does not verify information on the site, and I am responsible for my own diligence.</li>
                        <li>I promise to hold Hidea harmless against any damage that may happen to myself as a result of my use of Hidea.</li>
                        <li>If I invest, I will comply with securities laws and consult my own attorney and professional advisors where I need advice.</li>
                        <li>I understand that I will be permanently banned from Hidea and that I may face legal consequences if I falsely represent my accreditation status.</li>
                    </ul>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setIsFormSubmitted(true);
                    }}>
                        <FormControl
                            width="full"
                            margin="auto"
                            textAlign='left'
                            justifyContent="center"
                            alignItems="center"
                        >
                            < Checkbox
                                justifyContent="center"
                                alignItems="flex-start"
                                size='md'
                                name='confirm'
                                onChange={(e) => setIsChecked(e.target.checked)}
                                isChecked={isChecked}
                                color='primary'
                                mb={4}>
                                I agree to the <Link as={RouteLink} to="/terms-and-conditions">Terms and Conditions</Link> as well as the terms above.
                            </Checkbox>
                        </FormControl>
                        <Box textAlign='center' w='full'>
                            <Button className="btn" type="button"
                                onClick={() => {
                                    if (isChecked) {
                                        setIsFormSubmitted(true);
                                    }
                                }}
                                disabled={!isChecked}
                                variant="filled"
                                width="full"
                                mx={{ base: 0, lg: '.5rem' }}
                                my={{ base: '.5rem', lg: '0' }}
                                bg="#2DC86D" size="xl" mw="full">
                                Proceed
                            </Button>
                        </Box>
                    </form>
                </VStack> : <VStack
                    w="full"
                    h="full"
                    p={4}
                    alignItems="center"
                    justifyContent="center"
                    spacing={4}>
                    <Text fontSize='md'>Welcome,</Text>
                    <Heading fontSize="1.2rem">Your application was recieved successfully</Heading>
                    <Text fontSize='md'>We’ll follow up via email within 3 business days</Text>
                </VStack>}
        </Container>
    )
}
