import React from 'react'
import { Box, HStack, Select, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


const TransactionHistory = () => {
    return (
        <Box w="full">
            <HStack w="full" justifyContent="space-between">
                <Tabs w="full">
                    <HStack w="full" justifyContent="space-between">
                        <TabList>
                            <Tab>Deposits</Tab>
                            <Tab>Withdrawals</Tab>
                        </TabList>

                        <Select w="fit-content">
                            <option>Sort by</option>
                        </Select>
                    </HStack>

                    <TabPanels>
                        {/* Deposits tab */}
                    <TabPanel>
                   


                            
                    </TabPanel>

                        {/* Withdrawals tab */}
                    <TabPanel>
                    <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>three!</p>
                    </TabPanel>
                </TabPanels>
                </Tabs>
            </HStack>
        </Box>
    )
}


export default TransactionHistory