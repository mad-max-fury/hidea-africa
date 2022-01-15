import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupUser, userSelector, clearState } from "../../../store/userSlice";
import { Button, FormControl, FormErrorMessage, Stack, useToast } from "@chakra-ui/react"
import { FormInput } from "../formInput/FormInput";
import { UserIcon, PasswordIcon, MailIcon } from "../../../assets/images/icons/Icons";
import { validationSchema } from "./validationSchema";

const SignupForm = (props) => {
    const dispatch = useDispatch();
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const history = useHistory();
    const toast = useToast();
    const { isLoading, isSuccess, isError, errorMessage } = useSelector(userSelector);

    const onSubmit = (data) => {
        dispatch(signupUser(data));
        console.log("data", data);
    };

    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, [dispatch]);

    useEffect(() => {
        if (isSuccess) {
            dispatch(clearState());
            history.push("/");
        }

        if (isError) {
            toast({
                title: "Error",
                description: errorMessage,
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top",
            });
            dispatch(clearState());
        }
    }, [isSuccess, isError, errorMessage, history, toast, dispatch]);

    return (
        <form method="POST" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
                <Controller
                    name={"firstName"}
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                        <FormControl isInvalid={errors.firstName}>
                            <FormInput icon={UserIcon} value={value} onChange={onChange} label={"firstName"} name="First Name" error={errors.firstName} />
                            <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
                        </FormControl>
                    )}
                />
                <Controller
                    name={"lastName"}
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                        <FormControl isInvalid={errors.lastName}>
                            <FormInput icon={UserIcon} value={value} onChange={onChange} label={"lastName"} name="Last Name" error={errors.lastName} />
                            <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
                        </FormControl>
                    )}
                />
                <Controller
                    name={"email"}
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                        <FormControl isInvalid={errors.email}>
                            <FormInput icon={MailIcon} value={value} onChange={onChange} label={"email"} name="Email" error={errors.email} />
                            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                        </FormControl>
                    )}
                />
                <Controller
                    name={"password"}
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                        <FormControl isInvalid={errors.password}>
                            <FormInput icon={PasswordIcon} value={value} onChange={onChange} label={"password"} type="password" name="Password" error={errors.password} />
                            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
                        </FormControl>
                    )}
                />
                <Button size='lg' type="submit" variant="solid" fontWeight="bold" backgroundColor="#2DC86D" color="#fff"
                    isDisabled={errors.firstName || errors.lastName || errors.email || errors.password} isLoading={isLoading}> {
                        isLoading ? "Signing Up..." : "Sign Up"} </Button>
            </Stack>
        </form>
    );
}
export default SignupForm;