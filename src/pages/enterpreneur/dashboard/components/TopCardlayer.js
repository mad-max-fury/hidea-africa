import React, { useState, useEffect } from 'react'
import { Avatar, Box, Text, VStack, HStack, Heading, } from '@chakra-ui/react'

const TopCardlayer = () => {
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
        text.slice(0, 75)
      );
    }
  };
  return (
    <>
      <Box display={'flex'} gap='1rem'>
        <Avatar size='md' borderRadius={'md'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        <Box>
          <Heading as={'h3'} fontSize='16px' lineHeight={'24px'}>Dan Abrahmov</Heading>
          <Text textColor={'grey'}>Game</Text>
        </Box>
      </Box>
      <Box>
        <Text textColor={'grey'}>Description</Text>
        <span style={{ fontSize: '14px' }}>{getText(TextDescription[0]) + '...'} </span>  <span id={(0).toString()} style={{ color: '#000', fontWeight: 'bolder', fontSize: '14px' }} className="showMoreOrLess" onClick={ShowMore}>Read More</span>

      </Box>
    </>
  )
}

export default TopCardlayer