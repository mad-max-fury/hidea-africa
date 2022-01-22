import React, { useState } from 'react'
import { MainHeader } from '../../components/UI/MainHeader';
import { Heading, Box, Container, Flex, FormControl, VStack, Button, Text, Link, Checkbox, Spacer } from '@chakra-ui/react'
import { Link as RouteLink } from 'react-router-dom';

const ConfirmationPage = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    return (
        <Container maxW="container.xl" p={0}>
            <MainHeader />
            {!isFormSubmitted ?
                <Flex h={{
                    base: 'fit-content', md: "calc(100vh - 80px)"
                }} py={5} justifyContent="center" alignItems="center" >
                    <VStack
                        width={{ base: '100%', md: '50%' }}
                        h="full"
                        p={10}
                        alignItems="center"
                        justifyContent="center"

                        spacing={8}>
                        <Heading fontSize="1.5rem">Before being able to view any idea, you as a prospective investor, confirm that:</Heading>
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
                                <Checkbox
                                    justifyContent="center"
                                    alignItems="flex-start"
                                    size='md'
                                    name='confirm'
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                    isChecked={isChecked}
                                    color='primary'
                                    mb={4}
                                >
                                    You are seeking to invest on your own initiative and at your own will, and also that the course of communications between yourself, Hidea, any lead investor, entrepreneur, Business development unit and/or any of the respective affiliates relating to a potential investment on Hidea platform does not construe or serve as an agreement or legally binding contract to carry out or execute such perused idea.
                                    <Spacer mt={3} />
                                    Hidea and any of the “ideas” offered on the platform, as well as their respective intellectual property owners, may not be subject to any registration or state laws, and various other intellectual property rights, foreign jurisdictions and international conventions, including but not limited to copyright, trademarks, patents, service marks, logos, designs.
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
                                    Confirm and Continue
                                </Button>
                            </Box>
                        </form>
                    </VStack>
                </Flex> :
                <Flex h="calc(100vh - 80px)" py={5} justifyContent="center" alignItems="center" >
                    <VStack
                        width={{ base: '100%', md: '50%' }}
                        h="full"
                        p={10}
                        alignItems="center"
                        justifyContent="center"
                        spacing={4}>
                        <Text fontSize='md'>Welcome,</Text>
                        <Heading fontSize="1.5rem">Hidea investor account application</Heading>
                        <Text fontSize='md'>This application for accredited investors takes around 5 minutes to complete. All responses are kept confidential.</Text>

                        <Link as={RouteLink} to='/application' textDecoration="none" textAlign='center' w='full'>
                            <Button className="btn" type="button"
                                variant="filled"
                                width="full"
                                my="2em"
                                bg="#2DC86D" size="xl" mw="full">
                                Proceed
                            </Button>
                        </Link>
                    </VStack>
                </Flex>}
        </Container>
    )
}

export default ConfirmationPage