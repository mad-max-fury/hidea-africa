import React, { useState } from "react";
import {
  Box,
  HStack,
  VStack,
  Select,
  Link,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const TransactionHistory = () => {
  const [modal, setModal] = useState(true);

  const onClose = () => setModal(false);

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
                      <Th>Amount (SC)</Th>
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
                      <Td>
                        <Text
                          bg="#F2F7F0"
                          color="#2A5D19"
                          px="2"
                          py="4"
                          borderRadius="16px"
                        >
                          Completed
                        </Text>
                      </Td>
                      <Td>
                        <Link
                          fontWeight="700"
                          href="./transaction-history/?q=2123"
                          color="secondary.100"
                        >
                          View All
                        </Link>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </HStack>

      {modal && (
        <Modal isOpen={modal} onClose={onClose} size="2xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack alignItems="center" spacing="24px">
                <Text fontWeight="700" fontSize="25px">
                  Transaction information
                </Text>
                <VStack alignItems="flex-start" spacing="24px" px="32px" w="full">
                  <HStack
                    w="full"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Text>Transaction date and time</Text>
                    <Text w="50%" fontWeight="700">
                      Feb 15, 2021. 8.00AM
                    </Text>
                  </HStack>

                  <HStack
                    w="full"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Text>Transaction ID</Text>
                    <Text w="50%" fontWeight="700">
                      0000262626FDVGSXC22
                    </Text>
                  </HStack>

                  <HStack
                    w="full"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Text>Recipient name</Text>
                    <Text w="50%" fontWeight="700">
                      Kuudirat Bakare
                    </Text>
                  </HStack>

                  <HStack
                    w="full"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Text>Recipient bank</Text>
                    <Text w="50%" fontWeight="700">
                      First bank
                    </Text>
                  </HStack>

                  <HStack
                    w="full"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Text>Recipient account number</Text>
                    <Text w="50%" fontWeight="700">
                      00245558996
                    </Text>
                  </HStack>

                  <HStack
                    w="full"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Text>Narration</Text>
                    <Text w="50%" fontWeight="700">
                      This is a dummy narration for the Hidea platform
                    </Text>
                  </HStack>

                  <HStack
                    w="full"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Text>Amount (NGN)</Text>
                    <Text w="50%" fontWeight="700">
                      20,000,000.00
                    </Text>
                  </HStack>

                  <HStack
                    w="full"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Text>Conversion fee (20%)</Text>
                    <Text w="50%" fontWeight="700">
                      40,000,000.00
                    </Text>
                  </HStack>

                  <HStack w="full" justifyContent="space-between">
                    <Text>Total amount (NGN)</Text>
                    <Text w="50%" fontWeight="700">
                      20,040,000.00
                    </Text>
                  </HStack>

                  <HStack
                    w="full"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Text>Status</Text>
                    <Box w="50%">
                      <Text
                        bg="#F2F7F0"
                        color="#2A5D19"
                        px="2"
                        py="4"
                        borderRadius="16px"
                        w="fit-content"
                      >
                        Completed
                      </Text>
                    </Box>
                  </HStack>
                </VStack>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default TransactionHistory;
