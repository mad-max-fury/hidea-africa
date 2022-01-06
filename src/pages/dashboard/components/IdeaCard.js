import React, { useState } from 'react'
import { Avatar, Box, Text, VStack, HStack, } from '@chakra-ui/react'


const IdeaCard = ({ image, seller, tag, invState, percentage, isSelected=false })=> {
    const [selected, setSelected] = useState(isSelected);

    const clickHandler = ()=> setSelected(true);

    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" padding="4" w="100%" h="82px" bg={ selected ? "#878696" : "#fff"} borderRadius="16px" onClick={ clickHandler }>
            <HStack>
                <Avatar src={ image } borderRadius="8px" w="50px" h="50px" mr="4" />
                <VStack mr="50px" alignItems="flex-start">
                    <Text color={ selected ? "#fff" : "#57575b" } fontWeight="700">{ seller.name }</Text>
                    <Text color={ selected ? "#fff" : "#5F5E73" } fontSize="14px">{ tag }</Text>
                </VStack>
            </HStack>

            <VStack alignItems="flex-start">
                <Text color={ selected ? "#fff" : "#5F5E73" } fontSize="14px">{ invState }</Text>
                <Text color={ selected ? "#fff" : "secondary.100" }>{ percentage }</Text>
            </VStack>

        </Box>
    )
}

export const Cards = ({children}) =>{
    return (

        <>
            <h1>Cards Display</h1>
            {children}
        </>
    )
}



export default IdeaCard;