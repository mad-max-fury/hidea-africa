import { Box, Icon } from '@chakra-ui/react'
import Header from './components/Header'

import "./Dashboard.css"

import React from 'react'
import SideNav from './components/SideNav'

const Dashboard = ()=> {
    return (
        <Box>

            <Header />
            <SideNav />

        </Box>
    )
}

export default Dashboard
