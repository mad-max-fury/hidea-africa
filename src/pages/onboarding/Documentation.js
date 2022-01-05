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
    Icon,
    InputGroup,
    InputLeftElement,
    Radio,
    RadioGroup,
    Stack,
} from '@chakra-ui/react';
import { UploadIcon } from '../../assets/images/icons/Icons';
import { FileUpload } from '../../components/UI/formInput/FileUpload';


export const Documentation = () => {
    const { state, action } = useStateMachine(updateAction);
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: state.application.documentation
    });
    const uploadInputRef = React.useRef(null);
    const { push } = useHistory();
    const onSubmit = data => {
        action(data);
        push('/onboarding/terms-and-conditions');
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
                        <FormLabel>Tax Identification Number</FormLabel>
                        <Input
                            name="taxId"
                            register={register}
                            size="lg"
                        />
                    </FormControl>
                    <FormControl mb="32px">
                        <FormLabel> Home Address </FormLabel>
                        <Input
                            name="address"
                            register={register}
                            size="lg"
                        />
                    </FormControl>
                    <FormControl mb="32px">
                        <FormLabel>Office Address</FormLabel>
                        <Input
                            name="officeAddress"
                            register={register}
                            size="lg"
                        />
                    </FormControl>
                    <FormControl mb="32px">
                        <FileUpload
                            name="cac"
                            label="CAC"
                            file={state.application.documentation.cac}
                            register={register}
                            inputRef={uploadInputRef}
                            setValue={setValue}
                        />
                    </FormControl>
                    <FormControl mb="32px">
                        <FileUpload
                            name="nin"
                            label="NIN"
                            file={state.application.documentation.nin}
                            register={register}
                            inputRef={uploadInputRef}
                            setValue={setValue}
                        />
                    </FormControl>
                    <FormControl mb="32px">
                        <FileUpload
                            name="internationalPassport"
                            label="International Passport"
                            file={state.application.documentation.passport}
                            register={register}
                            inputRef={uploadInputRef}
                            setValue={setValue}
                        />
                    </FormControl>
                    <FormControl mb="32px">
                        <FileUpload
                            name="currentUtilityBill"
                            label="Current Utility Bill"
                            file={state.application.documentation.utilityBill}
                            register={register}
                            inputRef={uploadInputRef}
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
