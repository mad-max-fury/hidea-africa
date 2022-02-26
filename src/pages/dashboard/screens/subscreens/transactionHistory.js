import React from "react";
import {
  Box,
  HStack,
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

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
              <Box px="32px" py="16px">
                <Table variant="simple">
                  <TableCaption>
                    Imperial to metric conversion factors
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Date and time</Th>
                      <Th>Transaction details</Th>
                      <Th> Amount (NGN)</Th>
                      <Th> Amount (SC)</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Sep 23, 2021, 8.00AM</Td>
                      <Td>Withdrawal - Kudirat Bakare</Td>
                      <Td>200,000,000,000.00</Td>
                      <Td>200,000,000,000.00</Td>
                    </Tr>
                    <Tr>
                      <Td>Sep 23, 2021, 8.00AM</Td>
                      <Td>Withdrawal - Kudirat Bakare</Td>
                      <Td>200,000,000,000.00</Td>
                      <Td>200,000,000,000.00</Td>
                    </Tr>
                    <Tr>
                      <Td>Sep 23, 2021, 8.00AM</Td>
                      <Td>Withdrawal - Kudirat Bakare</Td>
                      <Td>200,000,000,000.00</Td>
                      <Td>200,000,000,000.00</Td>
                    </Tr>
                    <Tr>
                      <Td>Sep 23, 2021, 8.00AM</Td>
                      <Td>Withdrawal - Kudirat Bakare</Td>
                      <Td>200,000,000,000.00</Td>
                      <Td>200,000,000,000.00</Td>
                    </Tr>
                    <Tr>
                      <Td>Sep 23, 2021, 8.00AM</Td>
                      <Td>Withdrawal - Kudirat Bakare</Td>
                      <Td>200,000,000,000.00</Td>
                      <Td>200,000,000,000.00</Td>
                    </Tr>
                    <Tr>
                      <Td>Sep 23, 2021, 8.00AM</Td>
                      <Td>Withdrawal - Kudirat Bakare</Td>
                      <Td>200,000,000,000.00</Td>
                      <Td>200,000,000,000.00</Td>
                    </Tr>
                    <Tr>
                      <Td>Sep 23, 2021, 8.00AM</Td>
                      <Td>Withdrawal - Kudirat Bakare</Td>
                      <Td>200,000,000,000.00</Td>
                      <Td>200,000,000,000.00</Td>
                    </Tr>
                    <Tr>
                      <Td>Sep 23, 2021, 8.00AM</Td>
                      <Td>Withdrawal - Kudirat Bakare</Td>
                      <Td>200,000,000,000.00</Td>
                      <Td>200,000,000,000.00</Td>
                    </Tr>
                    <Tr>
                      <Td>Sep 23, 2021, 8.00AM</Td>
                      <Td>Withdrawal - Kudirat Bakare</Td>
                      <Td>200,000,000,000.00</Td>
                      <Td>200,000,000,000.00</Td>
                    </Tr>
                    <Tr>
                      <Td>Sep 23, 2021, 8.00AM</Td>
                      <Td>Withdrawal - Kudirat Bakare</Td>
                      <Td>200,000,000,000.00</Td>
                      <Td>200,000,000,000.00</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </TabPanel>

            {/* Withdrawals tab */}
            <TabPanel>
              <Box py="16px">
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Date and time</Th>
                      <Th>Transaction details</Th>
                      <Th>Amount (NGN)</Th>
                      <Th>Status</Th>
                      <Th>Action</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Sep 23, 2021, 8.00AM</Td>
                      <Td>Card pymnt: 23223243223w</Td>
                      <Td>200,000,000,000.00</Td>
                      <Td>200,000,000,000.00</Td>
                      <Td></Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </HStack>
    </Box>
  );
};

export default TransactionHistory;
