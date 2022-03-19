import { Avatar, Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Walletsummary = () => {
  return (
    <VStack bgColor={'white'} align-items='start' justifyContent={'start'} shadow='0 0 2px #f5f5f7' width={'320px'} height='fit-content' padding={'1rem'} borderRadius='10px' >
      <Box display='flex' alignSelf={'start'}>
        <Avatar size='md' borderRadius={'10px'} name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />{' '}
      </Box>
     <Text alignSelf={'start'} textColor='GrayText'>Withdrawal balance</Text>
      <Heading alignSelf={'start'} as={'h5'} fontSize='25px'>SC 200,000,000.00</Heading>
    </VStack>
  )
}

export default Walletsummary