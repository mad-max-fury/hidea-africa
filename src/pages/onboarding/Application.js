import React, { useState } from 'react'
import { MainHeader } from '../../components/UI/MainHeader';
import { Box, Container, Flex, HStack, VStack, Button, Progress, List, ListItem, Link } from '@chakra-ui/react';
import { Accreditation } from './Accreditation';
import { InvestmentGoals } from './InvestmentGoals';
import { Documentation } from './Documentation';
import { TermsAndCondition } from './TermsAndConditions';
import {
    BrowserRouter as Router,
    Route,
    Link as RouteLink,
    useLocation,

} from 'react-router-dom';
import { StateMachineProvider, createStore } from 'little-state-machine';
import { DevTool } from 'little-state-machine-devtools';
import { SideNav } from '../../components/UI/navigation/SideNav';
import { TopNav } from '../../components/UI/navigation/TopNav';

const store = createStore({
    application: {
        accreditation: {
            phoneNumber: '',
            socialMedia: {
                linkedin: '',
                facebook: '',
                instagram: '',
                twitter: '',
            },
            investmentType: '',
            address: '',
            accreditationType: '',
        },
        investmentGoals: {
            investmentRange: '',
            investmentPercent: '',
            choiceReasons: [],
            investmentExperience: [],
        },
        documentation: {
            TIN: '',
            homeAddress: '',
            officeAddress: '',
            cac: {},
            nin: {},
            passport: {},
            utilityBill: {},
        },
        termsAndConditions: {
            confirm: false,
        },
    },
});

const Pages = () => {
    const step = useLocation().pathname.split('/')[2];

    const location = useLocation();
    return (
        <>
            <TopNav>
                <Link as={RouteLink} to='/'
                    style={{ order: '1' }}
                    color="black"
                    fontWeight="bold"
                    fontSize="xl"
                >&larr;</Link>
                <Progress value={step} max='4' w='full' size='xs' colorScheme='secondary' style={{ order: '3' }} />
            </TopNav>

            <Route exact path='/application/accreditation'>
                <Accreditation />
            </Route>
            <Route path='/application/investment-goals'>
                <InvestmentGoals />
            </Route>
            <Route path='/application/documentation'>
                <Documentation />
            </Route>
            <Route path='/application/terms-and-conditions'>
                <TermsAndCondition />
            </Route>
        </>
    )
}

export const Application = () => {

    return (
        <StateMachineProvider >
            <DevTool />
            <Container maxW="container.xl" p={0}>
                <MainHeader />
                <Flex h={{
                    base: 'fit-content', md: "calc(100vh - 80px)"
                }} py={5} justifyContent="center" alignItems="center" >
                    <Router>
                        <SideNav />
                        <HStack
                            width={{ base: '100%', md: '50%' }}
                            height={{ base: 'fit-content', md: '100vh' }}
                            p={4}
                            display='flex'
                            flexDirection='column'
                            alignItems="center"
                            justifyContent="center"
                            overflow-y='scroll'
                            spacing={4}>

                            <Pages />
                        </HStack>
                    </Router>
                </Flex>
            </Container>
        </StateMachineProvider>
    )
}
