import { Box, Flex, Icon, VStack } from '@chakra-ui/react'
import Header from './components/Header'

import "./Dashboard.css"

import React from 'react'
import SideNav from './components/SideNav'
import Home from './screens/Home'
import MyIdeas from './screens/MyIdeas'
import { useParams } from 'react-router-dom'

const Dashboard = ()=> {
    const params = useParams();

    return (

            <Flex width="full" height="100vh" direction="row">
                <SideNav />
                <VStack width="full" bg="background.100">
                    <Header />
                    {/* Dashboard screens */}
                    <main className="w-full h-full p-8 main-container">

                        {
                            params.route === "index" ? <Home /> : params.route === "my-ideas" ? <MyIdeas /> : null
                        }

                        

                    </main>
                </VStack>
            </Flex>
    )
}

export default Dashboard
