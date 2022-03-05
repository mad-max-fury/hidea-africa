import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Eye from '../../../../assets/images/icons/eye.svg'

const BottomCardLayer = ({ draft, Active, status }) => {
  return (
    <Box display={'flex'} flexDirection='column' gap='2rem' width={'100%'}>
      {
        !draft ?
          <>
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
              {Active && <Box display={'flex'} gap='.4rem'>
                <Image src={Eye} />
                <Text>2000 views</Text>
              </Box>}
              <Button alignSelf={'flex-end'} bgColor={status === 'In-Progress' ? '#FEF8E6' : status === 'Completed' ? 'green.100' : 'red.100'} textColor={status === 'In-Progress' ? '#7A6003' : status === 'Completed' ? 'green.500' : 'red'} borderRadius='25px'>{status === 'In-Progress' ? 'In-Progress' : status === 'Completed' ? 'Completed' : 'Cancelled'}</Button>
            </Box>
          </>
          : <Text alignSelf={'flex-end'} textColor='green.400' fontWeight={'800'}>Continue edit</Text>
      }

    </Box>
  )
}

export default BottomCardLayer