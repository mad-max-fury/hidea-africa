import React from "react";
import { useForm } from "react-hook-form";
import { Input, Stack } from "@chakra-ui/react"
import { FormInput } from "../formInput/FormInput";
import { UserIcon, PasswordIcon, MailIcon } from "../../../assets/images/icons/Icons";

const SignupForm = (props) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
                <FormInput name="firstName" icon={UserIcon}
                    {...register("First name", { required: true, pattern: /^[A-Za-z]+$/i })} />
                {errors.firstName?.type === "required" && <span>This field is required</span>}
                <FormInput name="lastName" icon={UserIcon}
                    {...register("Last name", { required: true, pattern: /^[A-Za-z]+$/i })} />
                {errors.lastName?.type === "required" && <span>This field is required</span>}
                <FormInput name="email" icon={MailIcon} {...register("Email Address", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                })} />
                {errors.email?.type === "pattern" && "Invalid email address"}
                {errors.email?.type === "required" && <span>This field is required</span>}

                <FormInput name="password" icon={PasswordIcon} {...register("Password", {
                    required: true,
                    minLength: 8,
                    maxLength: 20
                })} />
                {errors.password?.type === "required" && <span>This field is required</span>}
                {errors.password?.type === "minLength" && <span>Password must be at least 8 characters</span>}
                {errors.password?.type === "maxLength" && <span>Password must be at most 20 characters</span>}
                <Input size='lg' type="submit" variant="filled" fontWeight="bold" className={
                    errors.email || errors.password || errors.firstName || errors.lastName ? "disabled" : "color-#2DC86D"
                } />
            </Stack>
        </form>
    );
}

export default SignupForm;

