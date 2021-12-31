import { TextField, ThemeProvider, styled } from '@material-ui/core';
import * as React from 'react';
import { Box, Icon } from '@chakra-ui/react';

const CssTextField = styled(TextField)({
    '& label': {
        paddingLeft: '2rem',
    },
    '& label.Mui-focused': {
        color: '#2DC86D',
        paddingLeft: '0rem',
    },
    '& input': {
        paddingLeft: '2.3rem',
    },

    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
        paddingLeft: '0rem',
    },

    '& .MuiInput-underline:after': {
        borderBottomColor: '#2DC86D',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'transparent',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
        },
        '&:hover fieldset': {
            borderColor: '#2DC86D',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#2DC86D',
        },
    },
    "&$error": {
        "& fieldset": {
            borderColor: "red",
        },
        "&:hover fieldset": {
            borderColor: "red",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#2DC86D",
        },
    },

});

export const FormInput = (props) => {
    return (
        <ThemeProvider >
            <Box position="relative" display="flex" alignItems='center' minWidth="100%" {...props}>
                <Icon as={props.icon} size="20px" />
                <CssTextField id="outlined-basic" label={props.name}
                    variant="outlined" type={props.name} style={{ position: "relative" }} fullWidth />
            </Box>
        </ThemeProvider>
    )
}
