import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import innerFolderIcon from '../../../../assets/images/innerFolder.png'
const Foldercard = ({ text }) => {
  return (
    <HStack justifyContent='space-between' alignItems={'start'}>
      <VStack alignItems={'start'} justifyContent='center'>
        <HStack>
          <Image src={innerFolderIcon} mr="10px" alt="folder icon" />
          <Text color="#000" textColor={'GrayText'}>{text}</Text>
        </HStack>
        <Text fontSize={'13px'} pl=' 40px' textColor={'GrayText'}>2kb</Text>
      </VStack>

      <Button bgColor={'unset'}><h3>Download file</h3></Button>
    </HStack>
  )
}

export default Foldercard