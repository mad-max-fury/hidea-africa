import React, { useState } from 'react'
import { Heading, Box, Container, Checkbox, Stack, Input, CheckboxGroup, Flex, Icon, Image, VStack, Button, Text, Link, Center } from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import { FormInput } from "../../components/UI/formInput/FormInput";
import { MailIcon } from "../../assets/images/icons/Icons";

import { MainHeader } from '../../components/UI/MainHeader';
import Verify from '../../assets/images/Verify-email-img.png';



const ForgotPassword = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const { register, handleSubmit, errors, setValue } = useForm({
        defaultValues: {
            email: '',
        }
    });

    const onSubmit = data => {
        setIsFormSubmitted(true);
        console.log(data);
    };


    return (
        <Container maxW="container.xl" p={0}>
            <MainHeader />
            <Flex h={{ base: 'fit-content', md: "calc(100vh - 80px)" }} py={5} justifyContent="center" alignItems="center" >
                <VStack
                    width={{ base: '100%', md: '50%' }}
                    h="full"
                    p={4}
                    alignItems="center"
                    justifyContent="center"
                    spacing={4}>
                    {!isFormSubmitted ? (
                        <>
                            <Heading>Forgot password</Heading>
                            <Text textAlign='center'>Enter the email linked to your account, we will send you a code to recover your password</Text>
                            <Box w="full">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Stack spacing={4}>
                                        <FormInput name="Email" type='email' icon={MailIcon} outline='black' />
                                        <Button type="submit" variant="filled" fontWeight="bold" color='white' bg="#2DC86D" size="lg" mt={4}>
                                            Proceed
                                        </Button>
                                    </Stack>
                                </form>
                            </Box>
                            <Box textAlign='center' w='full'>
                                <Text>Remember? <Link href="/login" color='#2DC86D' fontSize="sm" fontWeight="bold">Sign in</Link></Text>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Heading>Check your email</Heading>
                            <Text textAlign='center'>A recovery code has been sent to the email provided</Text>
                            <Box w="full" justifyContent='center'>
                                <Box
                                    width="60%"
                                    alignContent="center"
                                    margin="1em auto"
                                >
                                    <Image w="full" src={Verify} alt="hero" />
                                </Box>
                                <Link href='https://gmail.com/' w={{ base: '100%', md: '48%' }} mb={4} style={{ textDecoration: 'none' }} isExternal>
                                    <Button className="btn" type="button"
                                        variant="filled"
                                        width="full"
                                        fontWeight="bold"
                                        bg="#2DC86D" size="xl" mw="full">
                                        Open email app
                                    </Button>
                                </Link>
                            </Box>
                        </>
                    )}
                </VStack>
            </Flex>
        </Container>
    )
}
export default ForgotPassword;