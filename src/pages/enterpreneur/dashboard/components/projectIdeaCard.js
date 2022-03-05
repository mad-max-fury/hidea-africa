import React, { useState, useEffect } from 'react'
import { Avatar, Box, Text, VStack, HStack, Heading, } from '@chakra-ui/react'
import TopCardlayer from './TopCardlayer';
import BottomCardLayer from './BottomCardLayer';


const ProjectIdeaCard = ({ draft, Active, status }) => {

    return (
        <Box bg={'#ffffff'} cursor="pointer" display="flex" flexDirection={'column'} alignItems="start" gap={'1rem'} style={{ boxShadow: '0px 0px 4px #f5f5f7' }} padding="4" w="335px" h="fit-content"  >
            <TopCardlayer draft={draft} />
            <BottomCardLayer draft={draft} Active={Active} status={status} />
        </Box>

    )
}





export default ProjectIdeaCard;