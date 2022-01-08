import React, { useState } from 'react'
import { Heading, Box, Container, Checkbox, Stack, Input, Flex, Icon, VStack, Button, Text, Link } from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import { FormInput } from "../../components/UI/formInput/FormInput";
import { PasswordIcon, MailIcon } from "../../assets/images/icons/Icons";
import { Separator } from '../../components/UI/Separator';
import { MainHeader } from '../../components/UI/MainHeader';
import { Google, LinkedinCircle } from '../../assets/images/icons/Icons';


const SocialLogin = ({to, variant, bg, icon, bdColor, child}) => {
    return (
        <Link to={to} w={{base: '100%', md: '48%'}} mb={4} style={{ textDecoration: 'none' }} isExternal>
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


const Login = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const { register, handleSubmit, errors, setValue } = useForm({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
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
                    <Heading>Welcome back.</Heading>
                    <p>You have been missed.</p>
                    <Box display='flex' flexDirection={{base:'column', md:'row'}} justifyContent={{base: 'center', md: 'space-between' }} alignItems="center" w="full">
                        <SocialLogin to='/' variant="outline" bg="white" icon={Google} bdColor="primary" child='Continue with Google'/>
                        <SocialLogin to='/' variant="filled" bg="#007AB9" icon={LinkedinCircle} child='Continue with Linkedin'/>
                    </Box>
                    <Separator >
                        Or
                    </Separator>
                    <Box w="full">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Stack spacing={4}>
                                <FormInput name="Email" type='email' icon={MailIcon} />
                                <FormInput name="Password" type='password' icon={PasswordIcon} />
                                <Box textAlign='center' display='flex' justifyContent='space-between' w='full'>
                                    <Checkbox name="rememberMe"
                                        onChange={(e) => { console.log(e.target.checked) }}
                                        defaultChecked={false} >Remember me</Checkbox>
                                    <Link href="/forgot-password" color='#2DC86D' fontSize="sm" fontWeight="bold">Forgot password?</Link>
                                </Box>
                                <Input size='lg' type="submit" variant="filled" fontWeight="bold" bg='#2DC86D' color='white' value="Login" />
                            </Stack>
                        </form>
                    </Box>
                    <Box textAlign='center' w='full'>
                        <Text>New user? <Link href="/signup" color='#2DC86D' fontSize="sm" fontWeight="bold">Sign up</Link></Text>
                    </Box>
                </VStack>
            </Flex>
        </Container>
    )
}
export default Login;