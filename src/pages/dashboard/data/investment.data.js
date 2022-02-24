import React, { useState, useEffect } from 'react'
import { Avatar, Box, Text, VStack, HStack, } from '@chakra-ui/react'
import { ideasModel } from '../../../model/ideas.model'


const Investment = ({ idx, avatar, ideaMan, sector, investmentAmount, roi, progress })=> {
    // const [selected, setSelected] = useState(isSelected);

    // const clickHandler = ()=> {
    //     const ideas_copy = [...ideas.map(idea => {
    //         idea.isSelected = false
    //         return idea
    //     })];

    //     ideas_copy[idx].isSelected = true;
    //     setActive(idx);

    //     setIdeas(ideas_copy);
    // }


    // useEffect(()=> {
    //     setSelected(isSelected);
    // }, [isSelected])

    return (
        <VStack alignItems="flex-start" justifyContent="flex-start" w="100%" h="82px" bg="#fff" borderRadius="16px">
            <HStack>
                <Avatar src={ avatar } borderRadius="8px" w="50px" h="50px" mr="4" />
                <VStack mr="50px" alignItems="flex-start">
                    <Text color={ selected ? "#fff" : "#57575b" } fontWeight="700">{ ideaMan.name }</Text>
                    <Text color={ selected ? "#fff" : "#5F5E73" } fontSize="14px">{ sector }</Text>
                </VStack>
            </HStack>

            <Box>
                <Text>Investment amount</Text>
                <Text>{  investmentAmount }</Text>
            </Box>

            <Box>
                <Text>Return on investment</Text>
                <Text>{  roi }</Text>
            </Box>

            <HStack w="full" justifyContent="space-between">
                <Text>{ progress }%</Text>
            </HStack>

        </VStack>
    )
}


export default Investment;

const Investments = () => {
    return (
        <Grid>

            {
                ideasModel.map(idea => (
                    <Investment />
                ))
            }

        </Grid>
    )
}