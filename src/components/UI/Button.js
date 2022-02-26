import React from 'react';
import './Button.css';

import { Box } from '@chakra-ui/react';


export const Button = ({ filled, text, ...props }) => {
    return (
        <Box
            as='button'
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            border='1px'
            px='20px'
            py='15px'
            borderRadius='5px'
            fontSize='14px'
            fontWeight='semibold'
            bg={filled ? 'secondary.100' : 'transparent'}
            borderColor={filled ? null : 'secondary.100'}
            color={filled ? '#ffffff' : 'secondary.100'}
            _hover={{ bg: '' }}
            _active={{
                bg: '#dddfe2',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9',
            }}
            _focus={{
                boxShadow:
                    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
            {...props}
        >
            {text}
        </Box>
    );
};
