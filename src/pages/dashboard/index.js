import { Box, Flex, Icon, VStack } from '@chakra-ui/react'
import Header from './components/Header'

import "./Dashboard.css"

import React from 'react'
import SideNav from './components/SideNav'
import Home from './screens/Home'
import MyIdeas from './screens/MyIdeas'
import IdeasPool from './screens/IdeasPool'
import Wallet from './screens/Wallet'
import Settings from './screens/Settings'
import Support from './screens/Support'

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
                            params.route === "index" 
                            ? <Home /> 
                            : params.route === "my-ideas" 
                            ? <MyIdeas /> 
                            : params.route === "ideas-pool"
                            ? <IdeasPool />
                            : params.route === "wallet"
                            ? <Wallet />
                            : params.route === "settings"
                            ? <Settings />
                            : params.route === "support"
                            ? <Support />
                            : null
                        }

                        

                    </main>
                </VStack>
            </Flex>
    )
}

export default Dashboard
