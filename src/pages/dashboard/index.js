import { Box, Flex, Icon, VStack } from '@chakra-ui/react'
import Header from './components/Header'

import "./Dashboard.css"

import React from 'react'
import SideNav from './components/SideNav'
import Home from './screens/Home'

const Dashboard = ()=> {
    return (

            <Flex width="full" height="100vh" direction="row">
                <SideNav />
                <VStack width="full" bg="background.100">
                    <Header />
                    {/* Dashboard screens */}
                    <main className="w-full h-full p-8 main-container">

                        <Home />

                        

                    </main>
                </VStack>
            </Flex>
    )
}

export default Dashboard
