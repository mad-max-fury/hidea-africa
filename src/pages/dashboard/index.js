import { Box, Flex, Icon, Spacer, VStack } from '@chakra-ui/react'
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

//Sub screens
import WithDrawFund from './screens/subscreens/withdrawFund'
import TransactionHistory from './screens/subscreens/transactionHistory'

import { useParams } from 'react-router-dom'

const Dashboard = ()=> {
    const params = useParams();

    return (

            <Flex width="full" height="100vh" direction="row">
                <SideNav />
                <VStack width="full" bg="background.100">
                    { params.sub ? null : <Header /> }
                    {/* Dashboard screens */}
                    <main className="w-full h-full p-8 main-container">

                        {
                            params.route === "index" 
                            ? <Home /> 
                            : params.route === "my-ideas" 
                            ? <MyIdeas /> 
                            : params.route === "ideas-pool"
                            ? <IdeasPool />
                            : params.route === "wallet" && params.sub === "transaction-history"
                            ? <TransactionHistory />
                            : params.route  === "wallet" && params.sub === "fund-wallet"
                            ? <Wallet />
                            : params.route === "wallet" && params.sub === "withdraw-fund"
                            ? <WithDrawFund/>
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
