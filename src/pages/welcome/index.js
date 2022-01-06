import React from 'react'
import './Welcome.css'

import { Heading, Box, Container, Image, Grid, VStack, Button } from '@chakra-ui/react'

import { Link as Rlink } from 'react-router-dom';


import crypto from '../../assets/images/icons/crypto.svg'
import mouse from '../../assets/images/icons/mouse.svg'
import HideaLogoWhite from '../../assets/images/logo/Hidea-logo-white.svg'



const Welcome = () => {
    return (
        <Box display={{ md: "flex", sm: "block" }} width="full" height="100vh">
            {/* Left Box */}
            <Box className="aside-left pt-8 px-16" width={{ md: "40%", sm: "100%" }} h="full" bg="primary.100">
                <Rlink to="/">
                    <Image width="100px" src={HideaLogoWhite} alt="logo" />
                </Rlink>
            </Box>


            {/* Right Box */}
            <Box mt={{ md: "0", sm: "78px" }} mb={{ md: "0", sm: "78px" }} display="flex" justifyContent="center" alignItems="center" width={{ md: "60%", sm: "100%" }} h="full" bg="#fff">

                <Container>

                    <Heading>Welcome Allison,</Heading>
                    <p>Thank you for signing up to Hidea Africa</p>

                    <LearnMore
                        title="How Singa coin works"
                        caption="Digital currency for your transactions on Hidea."
                        linkTxt="Learn more"
                        icon={crypto}
                        bg="#EAF9F0"
                        btnBg="secondary.100"
                    />
                    <LearnMore
                        title="Pay per click"
                        caption="Pay enterpreneurs singa coins to view ideas and idea pitch."
                        linkTxt="View disclaimer"
                        icon={mouse}
                        bg="#E5F2F3"
                        btnBg="#007C8A"
                    />
                    <LearnMore
                        title="Pay per click"
                        caption="Pay enterpreneurs singa coins to view ideas and idea pitch."
                        linkTxt="View disclaimer"
                        icon={mouse}
                        bg="#F6F1E1"
                        btnBg="#C6A84D"
                    />

                    {/* CTA BTN */}
                    <Button mt="32px" w="full" bg="secondary.100" color="white">Get started</Button>

                </Container>

            </Box>



        </Box>
    )
}



//LearnMore component
const LearnMore = ({ title, caption, icon, linkTxt, linkTo, bg, btnBg }) => {
    return (
        <Box mt="24px" display="flex" borderRadius="8px" py="16px" px="24px" width="full" height="fit-content" bg={bg}>

            <Grid templateColumns="repeat(2, 1fr)">

                <VStack alignItems="flex-start" width="full">
                    <Image src={icon} alt="" />
                    <Heading size="sm">{title}</Heading>
                    <p>{caption}</p>
                </VStack>

                <VStack width="full" alignItems="flex-end" justifyContent="center">
                    <Box width="80%">
                        <Rlink to="/" className='w-full' >
                            <Button
                                w="100%"
                                h="60px"
                                fontWeight="400"
                                variant="filled"
                                color="white"
                                bg={btnBg}>
                                {linkTxt}
                            </Button>
                        </Rlink>
                    </Box>
                </VStack>

            </Grid>

        </Box>
    );
}



export default Welcome;
