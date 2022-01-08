import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../store/updateAction";
import {
    Container,
    VStack,
    Checkbox,
    FormLabel,
    FormControl,
    Button,
    Radio,
    RadioGroup,
    Stack,
    CheckboxGroup,
} from '@chakra-ui/react';


export const InvestmentGoals = () => {
    const { state, action } = useStateMachine(updateAction);
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: state.application.investmentGoals
    });

    const { push } = useHistory();
    const onSubmit = data => {
        action(data);
        push('/onboarding/documentation');
    };
    return (
        <Container maxW="container.xl" p={0}>
            <VStack
                w="full"
                h="full"
                p={4}
                alignItems="center"
                justifyContent="center"
                spacing={8}>

                <form onSubmit={handleSubmit(onSubmit)} style={{
                    width: '100%',
                }}>
                    <FormControl mb="32px">
                        <FormLabel fontWeight="bold">How much are you hoping to allocate (in USD)
                            to startups using Hidea over the next 12 months?</FormLabel>
                        <RadioGroup aria-label="position" name="investmentGoalsAmt">
                            <Stack direction='column' spacing={4}>
                                <Radio value="20000"> Up to $20,000</Radio>
                                <Radio value="50000"> Up to $50,000</Radio>
                                <Radio value="100000"> Up to $100,000</Radio>
                                <Radio value="250000"> Up to $250,000</Radio>
                                <Radio value="500000"> Up to $500,000</Radio>
                                <Radio value="500000+"> More than $500,000</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl mb="32px">
                        <FormLabel fontWeight="bold">What percentage of your networth do you want
                            to allocate to investing in startups?</FormLabel>
                        <RadioGroup aria-label="position" name="investmentGoalsPercent">
                            <Stack direction='column' spacing={4}>
                                <Radio value="5"> Up to 5%</Radio>
                                <Radio value="10"> Up to 10%</Radio>
                                <Radio value="15"> Up to 15%</Radio>
                                <Radio value="15+"> More than 15%</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl mb="32px">
                        <FormLabel fontWeight="bold">What are your main reasons for choosing Hidea?</FormLabel>
                        <CheckboxGroup aria-label="position" name="investmentGoalsReasons">
                            <Stack direction='column' spacing={4}>
                                <Checkbox value="1"> Generating financial returns for your portfolio </Checkbox>
                                <Checkbox value="2"> Meeting new people to expand your network </Checkbox>
                                <Checkbox value="3"> Accessing dealflow you can't get anywhere else</Checkbox>
                                <Checkbox value="4"> Learning more about startups. </Checkbox>
                            </Stack>
                        </CheckboxGroup>
                    </FormControl>
                    <FormControl mb="32px">
                        <FormLabel fontWeight="bold">What is your experience investing in venture-backed
                            tech startups or venture capital funds?</FormLabel>
                        <CheckboxGroup aria-label="position" name="investmentGoalsExperience">
                            <Stack direction='column' spacing={4}>
                                <Checkbox value="1"> I invested in a startup directly or through a single purpose vehicle (SPV) </Checkbox>
                                <Checkbox value="2"> I invested in startups indirectly through a venture fund </Checkbox>
                                <Checkbox value="3"> I work or worked at a venture capital or investment firm </Checkbox>
                                <Checkbox value="4"> I represent or represented a family office or Registered Investment Advisor (RIA)</Checkbox>
                            </Stack>
                        </CheckboxGroup>
                    </FormControl>


                    <Button className="btn" type="submit"
                        variant="filled"
                        width="full"
                        bg="#2DC86D" size="lg" mw="full">
                        Proceed
                    </Button>
                </form>
            </VStack >
        </Container >
    )
}
