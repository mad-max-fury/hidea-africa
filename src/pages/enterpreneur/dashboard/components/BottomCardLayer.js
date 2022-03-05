import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Eye from '../../../../assets/images/icons/eye.svg'

const BottomCardLayer = () => {
  return (
    <Box display={'flex'} flexDirection='column' gap='2rem' width={'100%'}>
      <Box display={'flex'} justifyContent='space-between' width={'100%'} alignItems='center'>
        <Box>
          <Text textColor={'GrayText'}>Amount</Text>
          <Heading as='h3' textColor={'green'} fontSize='16px'>SC 320,000,000</Heading>
        </Box>
        <Box>
          <Text textColor={'GrayText'}>ROI</Text>
          <Heading as='h3' textColor={'green'} fontSize='16px'>25% EQUITY</Heading>
        </Box>
      </Box>
      <Box display={'flex'} justifyContent='space-between' width={'100%'} alignItems='center'>
        <Box display={'flex'} gap='.4rem'>
          <Image src={Eye} />
          <Text>2000 views</Text>
        </Box>
        <Button bgColor={'#FEF8E6'} textColor={'#7A6003'}>In-Progress</Button>
      </Box>
    </Box>
  )
}

export default BottomCardLayer