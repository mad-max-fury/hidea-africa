import React from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../store/updateAction';
import { Heading, Box, Container, Flex, FormControl, VStack, Button, Text, Link, Checkbox } from '@chakra-ui/react'
import { Link as RouteLink } from 'react-router-dom';


export const Documentation = () => {
    return (
        <div>
            <Container maxW="container.xl" p={0}>
                <VStack
                    w="full"
                    h="full"
                    p={4}
                    alignItems="center"
                    justifyContent="center"
                    spacing={8}>
                    <Heading as="h1" size="xl" textAlign="center" mb={10}>Documentation</Heading>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        
                    }}>
                        <FormControl
                            width="full"
                            margin="auto"
                            textAlign='left'
                            justifyContent="center"
                            alignItems="center"
                        >
                            < Checkbox
                                justifyContent="center"
                                alignItems="flex-start"
                                size='md'
                                name='confirm'
                                isChecked="false"
                                color='primary'
                                mb={4}>
                                I agree to the <Link as={RouteLink} to="/terms-and-conditions">Terms and Conditions</Link> as well as the terms above.
                            </Checkbox>
                        </FormControl>
                        <Box textAlign='center' w='full'>
                            <Button className="btn" type="button"
                                variant="filled"
                                width="full"
                                mx={{ base: 0, lg: '.5rem' }}
                                my={{ base: '.5rem', lg: '0' }}
                                bg="#2DC86D" size="xl" mw="full">
                                Proceed
                            </Button>
                        </Box>
                    </form>
                </VStack>
            </Container>
        </div>
    )
}
