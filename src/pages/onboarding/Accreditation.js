import React from 'react';
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../store/updateAction";
import {
    Container,
    VStack,
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    InputGroup,
    InputLeftAddon,
} from '@chakra-ui/react';
import PhoneNumberInput from "../../components/UI/formInput/PhoneNumberInput";
import SocialInput from "../../components/UI/formInput/SocialInput";
import { COUNTRIES } from "../../components/UI/formInput/countries";


export const Accreditation = () => {
    const { state, action } = useStateMachine(updateAction);
    const { register, handleSubmit, errors, setValue } = useForm({
        defaultValues: state.application.accreditation
    });
    const countryOptions = COUNTRIES.map(({ name, isoCode }) => ({
        label: name,
        value: isoCode
    }));
    const { push } = useHistory();
    const onSubmit = data => {
        action(data);
        push('/onboarding/investment-goals');
    };

    console.log(errors);

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
                        <FormLabel>Phone Number</FormLabel>
                        <PhoneNumberInput
                            name="phoneNumber"
                            size="lg"
                            register={register}
                            errors={errors}
                            setValue={setValue}
                            options={countryOptions}
                            onChange={(e) => {
                                console.log(e);
                            }}
                        />
                    </FormControl>
                    <FormControl mb="32px" >
                        <FormLabel>Social Media</FormLabel>
                        <SocialInput 
                            name="linkedin"
                            size="lg"
                            register={register}
                            errors={errors}
                            setValue={setValue}
                            logo={require('../../assets/images/icons/linkedin.svg')}
                        />
                        <SocialInput 
                            name="facebook"
                            size="lg"
                            register={register}
                            errors={errors}
                            setValue={setValue}
                        />
                        <SocialInput 
                            name="instagram"
                            size="lg"
                            register={register}
                            errors={errors}
                            setValue={setValue}
                        />
                        <SocialInput 
                            name="twitter"
                            size="lg"
                            register={register}
                            errors={errors}
                            setValue={setValue}
                        />
                    </FormControl>

                    <Button className="btn" type="submit"
                        variant="filled"
                        width="full"
                        bg="#2DC86D" size="lg" mw="full">
                        Proceed
                    </Button>
                </form>
            </VStack>
        </Container>
    )
}
