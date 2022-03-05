import React, { useState, useEffect } from 'react'
import { Avatar, Box, Text, VStack, HStack, } from '@chakra-ui/react'


const IdeaCard = ({ idx, seller, sector, investmentType, equity, isSelected=false, ideas, setIdeas, setActive })=> {
    const [selected, setSelected] = useState(isSelected);

    const clickHandler = ()=> {
        const ideas_copy = [...ideas.map(idea => {
            idea.isSelected = false
            return idea
        })];

        ideas_copy[idx].isSelected = true;
        setActive(idx);

        setIdeas(ideas_copy);
    }


    useEffect(()=> {
        setSelected(isSelected);
    }, [isSelected])

    return (
        <Box cursor="pointer" display="flex" alignItems="center" justifyContent="space-between" mt="5px"  padding="4" w="100%" h="82px" bg={ selected ? "#878696" : "null"} borderRadius="16px" onClick={ clickHandler }>
            <HStack>
                <Avatar src={ seller.image } borderRadius="8px" w="50px" h="50px" mr="4" />
                <VStack mr="50px" alignItems="flex-start">
                    <Text color={ selected ? "#fff" : "#57575b" } fontWeight="700">{ seller.seller_name }</Text>
                    <Text color={ selected ? "#fff" : "#5F5E73" } fontSize="14px">{ sector }</Text>
                </VStack>
            </HStack>

            <VStack alignItems="flex-start">
                <Text color={ selected ? "#fff" : "#5F5E73" } fontSize="14px">{ investmentType }</Text>
                <Text color={ selected ? "#fff" : "secondary.100" }>{ equity }</Text>
            </VStack>

        </Box>
    )
}

export const Cards = ({children}) =>{
    
    return (

        <Box w="full" mt="10px">
            {children}
        </Box>
    )
}



export default IdeaCard;