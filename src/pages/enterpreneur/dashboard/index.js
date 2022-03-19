import { Box, Flex, Icon, VStack } from '@chakra-ui/react'
import Header from './components/Header'

import "./Dashboard.css"

import React from 'react'
import SideNav from './components/SideNav'
import LegalServices from './screens/LegalServices'
import MyIdeas from './screens/MyIdeas'
import AdCenter from './screens/AdCenter'
import Wallet from './screens/Wallet'
import Settings from './screens/Settings'
import Support from './screens/Support'

//Sub screens
import WithDrawFund from './screens/subscreens/withdrawFund'

import { useParams } from 'react-router-dom'

const EnterpreneurDashboard = () => {
    const params = useParams();

    return (

        <Flex width="full" height="100vh" direction="row">
            <SideNav />
            <VStack width="full" bg="background.100">
                {/* <Header /> */}
                {/* Dashboard screens */}
                <main className="w-full h-full p-8 main-container">

                    {
                        params.route === "index"
                            ? <MyIdeas />
                            : params.route === "legal-services"
                                ? <LegalServices />
                                : params.route === "ad-center"
                                    ? <AdCenter />
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

export default EnterpreneurDashboard
