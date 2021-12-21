import { TextField, createTheme, ThemeProvider } from '@material-ui/core';
import React from 'react'


const theme = createTheme({
    overrides: {
        MuiTextField: {
            root: {
                "&$shrink": {
                    color: '#2DC86D',
                    "&$focused": {
                        color: '#2DC86D',
                    }
                },
                "&$error": {
                    color: 'red',
                    "&$focused": {
                        "&$shrink": {
                            color: 'red',
                        }
                    }
                }
            }
        },
    }
});
export const FormInput = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <TextField id="outlined-basic" label={props.name} variant="outlined" type={props.name} />
        </ThemeProvider>
    )
}
