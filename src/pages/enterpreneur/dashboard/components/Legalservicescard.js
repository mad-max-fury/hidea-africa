import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const LegalServicesCard = ({bgColor, text}) => {
    const TextDescription = ["Avatar republic started  year 2004, we are inclined to solve the need of fs things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!"]
  const ShowMore = (ev) => {
    let { target } = ev
    let { id } = target
    if (target.classList.contains('active')) {
      target.innerText = 'Read More'
      target.previousElementSibling.innerText = getText(TextDescription[0]) + '...'
      target.classList.remove('active')
    } else {
      target.previousElementSibling.innerText = TextDescription[0]
      target.innerText = 'Show Less'
      target.classList.add('active')
    }
  }

  const getText = (text) => {
    if (text.length > 33) {
      return (
        text.slice(0, 116)
      );
    }
  };
  return ( <Box bg={'#ffffff'} cursor="pointer" display="flex" flexDirection={'column'} alignItems="start" gap={'1rem'} style={{ boxShadow: '0px 0px 4px #f5f5f7' }} padding="4" w="335px" h="fit-content">
       <VStack gap='1.5rem' alignItems={'start'}>
          <Flex flexDirection={'column'} justifyContent={'start'}>
           <Text as='h1'  fontWeight={'800'}>Service type</Text>
           <Text>Business regisrtaion</Text>
          </Flex> 
          <Flex flexDirection={'column'}  alignItems={'start'} borderBottom={'2px solid #f5f5f5'} paddingBottom='.5rem' >
           <Text as='h1'  fontWeight={'800'}>Comment</Text>
            <Text>
              <span style={{ fontSize: '14px' }}>{getText(TextDescription[0]) + '...'} </span> <span id={(0).toString()} style={{ color: '#2DC86D', fontWeight: 'bolder', fontSize: '14px' }} className="showMoreOrLess" onClick={ShowMore}>Read More</span>
            </Text>
          </Flex> 
          <Flex flexDirection={'row'} width='100%' justifyContent='space-between'>
            <VStack alignItems={'start'}>
              <Text as='h1'  fontWeight={'800'}>Status</Text>
              <HStack><Box width={'.8rem'} height='.8rem' borderRadius={'100%'} bgColor={bgColor}></Box><Text textColor={bgColor} >{text}</Text></HStack>
            </VStack>
            <VStack alignSelf={'flex-end'} alignItems={'start'}>
              <Text as='h1'  fontWeight={'800'}>Request dates</Text>
              <Text textColor={'GrayText'}>10 Jul, 2021</Text>
            </VStack>

          </Flex>
        </VStack>
    </Box>
  )

}  

export default LegalServicesCard