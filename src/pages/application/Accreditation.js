import React from 'react';
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../store/updateAction";
import {
    Container,
    VStack,
    Text,
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    Select,
    InputGroup,
    InputLeftAddon,
    Radio,
    RadioGroup,
    Stack,
} from '@chakra-ui/react';
import PhoneNumberInput from "../../components/UI/formInput/PhoneNumberInput";
import SocialInput from "../../components/UI/formInput/SocialInput";
import { Facebook, Instagram, Linkedin, Twitter } from "../../assets/images/icons/Icons";
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
                alignItems="flex-start"
                justifyContent="flex-start"
                spacing={8}>

                <form onSubmit={handleSubmit(onSubmit)} style={{
                    width: '100%',
                }}>
                    <FormControl mb="32px">
                        <FormLabel fontWeight="bold">Phone Number</FormLabel>
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
                        <FormLabel fontWeight="bold">Social Media</FormLabel>
                        <Text fontSize="10px">Providing your social media profile helps us determine your eligibility.</Text>
                        <SocialInput
                            name="linkedin"
                            size="lg"
                            register={register}
                            errors={errors}
                            setValue={setValue}
                            logo={Linkedin}
                        />
                        <SocialInput
                            name="facebook"
                            size="lg"
                            register={register}
                            errors={errors}
                            setValue={setValue}
                            logo={Facebook}
                        />
                        <SocialInput
                            name="instagram"
                            size="lg"
                            register={register}
                            errors={errors}
                            setValue={setValue}
                            logo={Instagram}
                        />
                        <SocialInput
                            name="twitter"
                            size="lg"
                            register={register}
                            errors={errors}
                            setValue={setValue}
                            logo={Twitter}
                        />
                    </FormControl>
                    <FormControl mb="32px">
                        <FormLabel fontWeight="bold">Will you be investing money as an individual, a Trust, or a Firm or Fund?</FormLabel>
                        <RadioGroup aria-label="position" name="investmentType"
                        >
                            <Stack direction='column' spacing={4}>
                                <Radio value="individual"> Individual </Radio>
                                <Radio value="trust"> Trust </Radio>
                                <Radio value="firm"> Firm or Fund </Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl mb="32px">
                        <FormLabel fontWeight="bold">Legal Place of Residence</FormLabel>
                        <Select name="country" size='lg' placeholder='' labelId="country-label" id="country" inputRef={register}>
                            {countryOptions.map(({ label, value }) => (
                                <option key={value} value={value}>{label}</option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl mb="32px">
                        <FormLabel fontWeight="bold">How are you accredited?</FormLabel>
                        <RadioGroup aria-label="position" name="investmentType"
                        >
                            <Stack direction='column' spacing={4}>
                                <Radio value="individual"> I have at least $5M in investments. </Radio>
                                <Radio value="trust"> I have between $2.2M and $5M in net assets </Radio>
                                <Radio value="firm"> I have between $1M and $2.2M in net assets </Radio>
                                <Radio value="firm"> I have income of $200k (or $300k jointly with spouse)
                                    for the past 2 years and expect the same this year </Radio>
                                <Radio value="firm"> I am a Series 7, Series 65, or Series 82 holder
                                    and my license is active and in good standing </Radio>
                                <Radio value="firm"> I'm not accredited yet</Radio>
                            </Stack>
                        </RadioGroup>
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
