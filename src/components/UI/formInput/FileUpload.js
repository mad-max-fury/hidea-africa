import React from 'react';
import { UploadIcon } from '../../../assets/images/icons/Icons'
import {
    FormLabel,
    InputGroup,
    InputLeftElement,
    Input,
    Icon
} from '@chakra-ui/react';

export const FileUpload = ({ label, inputRef, file }) => {
    return (
        <>
            <FormLabel fontWeight="bold">{label}</FormLabel>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    left={{base: '14px', md: '10px', lg: '30px', xl: '40px'}}
                    children={<Icon as={UploadIcon} />}
                />
                <input
                    type="file"
                    name="cac"
                    ref={inputRef}
                    accept='image/*'
                    style={{ display: 'none' }}
                    file={file}
                    onChange={(e) => {
                        console.log(e.target.files[0]);
                    }}
                />
                <Input
                    variant="outline"
                    size="lg"
                    color='#2DC86D'
                    borderColor='#2DC86D'
                    type="button"
                    width="40%"
                    value={file[0] ? file[0].name : 'Upload'}
                    onClick={() => {
                        document.querySelector('input[name="cac"]').click();
                    }} />
            </InputGroup>
        </>
    )
}
