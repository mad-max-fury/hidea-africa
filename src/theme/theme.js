
import { extendTheme } from '@chakra-ui/react';


const theme = extendTheme({
    fonts: {
        body: '"Airbnb Cereal App Book", sans-serif',
    },
    fontWeights: {
        body: 400,
        h1: 800,
        h2: 800,
        h3: 700,
    },
    fontSize: {
        xs: '1.75rem',
        sm: '1.875rem',
        md: '2rem',
        lg: '2.125rem',
        xl: '2.25rem',
        '2xl': '2.5rem',
    },

    colors: {
        primary: {
            100: '#0F0E2D',

        },
        secondary: {
            100: '#2DC86D',

        },
        background: {
            100: '#FDFDFD',

        },
        error: {
            100: '#D43535',

        },
        warning: {
            100: '#F3BF05',

        },
        info: {
            100: '#117DB7',

        },
        success: {
            100: '#3F8C25',

        },
    },
    Button: {
        baseStyle: {
            fontFamily: 'body',
            fontWeight: 'bold',
        },
        sizes: {
            xl: {
                fontSize: 'lg',
                h: '60px',
                py: '18px',
            },
        },
        Link: {
            baseStyle: {
                fontFamily: 'body',
                fontWeight: 'bold',
            },
            sizes: {
                xl: {
                    fontSize: 'lg',
                    h: '60px',
                    py: '18px',
                },
            },
            color: {
                default: '#2DC86D',
            },
        },
        variants: {
            primary: {
                bg: 'primary.100',
                color: 'white',
            },
            secondary: {
                bg: 'secondary.100',
                color: 'white',
            },
            outline: {
                bg: 'transparent',
                color: 'primary.100',
                borderColor: 'primary.100',
                borderWidth: '1px',
                borderStyle: 'solid',
            },
        },
    },
    // Input: {
    //     baseStyle: {
    //         fontFamily: 'body',
    //         fontWeight: 'bold',
    //     },
    //     sizes: {
    //         xl: {
    //             fontSize: 'lg',
    //             h: '60px',
    //             py: '18px',
    //         },
    //     },
    //     variants: {
    //         outline: {
    //             bg: 'transparent',
    //             color: 'primary.100',
    //             borderColor: 'primary.100',
    //             borderWidth: '1px',
    //             borderStyle: 'solid',
    //         },
    //     },
    // },
});

export default theme;