import React, { useState } from 'react'
import { Heading, Box, Container, Flex, Icon, Image, VStack, Button, Text, Link } from '@chakra-ui/react'
import { Link as Rlink } from 'react-router-dom';
import Hero from '../../assets/images/signup-hero.png';
import Verify from '../../assets/images/Verify-email-img.png';
import { Separator } from '../../components/UI/Separator';
import SignupForm from '../../components/UI/signupForm/Form';
import { MainHeader } from '../../components/UI/MainHeader';
import { Google, LinkedinCircle } from '../../assets/images/icons/Icons';

const SocialLogin = ({ to, variant, bg, icon, bdColor, child }) => {
    return (
        <Link href={to} w={{ base: '100%', md: '48%' }} mb={4} style={{ textDecoration: 'none' }} isExternal>
            <Button className="btn" type="button"
                variant={variant} bg={bg}
                leftIcon={<Icon as={icon} size={6} />}
                width="100%"
                size='xl' borderColor={bdColor} >
                {child}
            </Button>
        </Link>
    )
}

const SignUp = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);


    return (
        <Container maxW="container.xl" p={0}>
            <MainHeader>
                <Box display={{ base: 'flex', md: 'none' }} >
                    <p>Existing user? <Link color='#2DC86D' fontWeight='bold' href="/login">Sign in</Link></p>
                </Box>
            </MainHeader>
            {!isFormSubmitted ?
                <Flex h={{ base: 'fit-content', md: "calc(100vh - 80px)" }} py={2} justifyContent="center" alignItems="center" >
                    <VStack
                        display={{ base: 'none', md: 'flex' }}
                        h="full"
                        p={10}
                        alignItems="center"
                        justifyContent="center"
                        spacing={4}>
                        <Box>
                            <Image w="full" src={Hero} alt="hero" />
                        </Box>
                    </VStack>
                    <VStack
                        width={{ base: '100%', md: '50%' }}
                        h="full"
                        p={4}
                        alignItems="flex-start"
                        justifyContent="center"
                        spacing={4}>
                        <Heading>Sign up to Hidea.</Heading>
                        <p>The first step to the world of posibilities</p>
                        <Box display='flex' flexDirection={{ base: 'column', md: 'row' }} justifyContent={{ base: 'center', md: 'space-between' }} alignItems="center" w="full">
                            <SocialLogin to='/' variant="outline" bg="white" icon={Google} bdColor="primary" child='Continue with Google' />
                            <SocialLogin to='/' variant="filled" bg="#007AB9" icon={LinkedinCircle} child='Continue with Linkedin' />
                        </Box>
                        <Separator >
                            Or
                        </Separator>
                        <Box w="full">
                            <SignupForm
                                setIsFormSubmitted={setIsFormSubmitted}
                            />
                        </Box>
                        <Box textAlign={{ base: 'center', md: 'left' }} w='full'>
                            <Text>By signing up, you agree to our <br /> <Link href="#" color='#2DC86D' fontWeight='bold' >Terms & Conditions</Link></Text>
                        </Box>
                        <Box display={{ base: 'none', md: 'flex' }} >
                            <p>Existing user? <Link color='#2DC86D' fontWeight='bold' href="/login">Sign in</Link></p>
                        </Box>
                    </VStack>
                </Flex> :
                <Flex h="calc(100vh - 80px)" py={5} justifyContent="center" alignItems="center" >
                    <VStack
                        width={{ base: '100%', md: '50%' }}
                        h="full"
                        alignItems="center"
                        justifyContent="center"
                        spacing={4}>
                        <Heading>Verify your email</Heading>
                        <Text>We’d like to verify this email belongs to you. Check your email and follow the instructions </Text>
                        <Box
                            width={{ base: '100%', md: '50%' }}
                            textAlign='center'
                        >
                            <Image w="full" src={Verify} alt="hero" />
                        </Box>
                        <Link href='https://gmail.com/' textDecoration="none" textAlign='center' w='full' isExternal>
                            <Button className="btn" type="button"
                                variant="filled"
                                width={{ base: '100%', lg: '45%' }}
                                mx={{ base: 0, lg: '.5rem' }}
                                my={{ base: '.5rem', lg: '0' }}
                                bg="#2DC86D" size="xl" mw="full">
                                Open email app
                            </Button>
                        </Link>
                    </VStack>
                </Flex>

            }
        </Container>
    )
}

export default SignUp
