import { getter } from '@chakra-ui/react';
const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
const nameRegex = new RegExp(/^[A-Za-z]+$/);
const numberRegex = new RegExp(/^[0-9]+$/);
const phoneRegex = new RegExp(/^[0-9 ()+-]+$/);

export const termsValidator = (value) =>
    value ? "" : "It's required to agree to the terms and conditions.";

export const emailValidator = (value) =>
    !value ? "Email is required." : emailRegex.test(value) ? "" : "Invalid email address.";

export const passwordValidator = (value) =>
    !value ? "Password is required." : passwordRegex.test(value) ? "" : "Password must be at least 8 characters and contain at least one number, one uppercase letter and one special character.";

export const nameValidator = (value) =>
    !value ? "Name is required." : nameRegex.test(value) ? "" : "Name must be letters only.";

export const userNameValidator = (value) =>
    !value ? "User name is required." : value.length < 3 ? "User name must be at least 3 characters." : "";

export const numberValidator = (value) =>
    !value ? "Number is required." : numberRegex.test(value) ? "" : "Number must be numbers only.";

export const phoneValidator = (value) =>
    !value ? "Phone number is required." : phoneRegex.test(value) ? "" : "Phone number must be numbers, spaces, parentheses, and dashes only.";

export const getErrorMessage = (error) => {
    if (error.type === "required") {
        return "This field is required.";
    }
    if (error.type === "minLength") {
        return "Password must be at least 8 characters.";
    }
    if (error.type === "maxLength") {
        return "Password must be at most 20 characters.";
    }
    if (error.type === "pattern") {
        return "Invalid email address.";
    }
    return "";
};

export const getErrorMessageByName = (name, errors) => {
    if (errors[name]) {
        return getErrorMessage(errors[name]);
    }
    return "";
};

export const addressValidator = (value) =>
    value ? "" : "Address is required.";
const userNameGetter = getter("userName");
const emailGetter = getter("email");
const passwordGetter = getter("password");

export const formValidator = (values) => {
    const userName = userNameGetter(values);
    const emailValue = emailGetter(values);
    const passwordValue = passwordGetter(values);

    if (userName && emailValue && emailRegex.test(emailValue) && passwordValue && passwordRegex.test(passwordValue)) {
        return {};
    }

    return {
        VALIDATION_SUMMARY: "Please fill out the form correctly.",
        // ["username"]: !userName ? "User name is required." : userName.length < 3 ? "User name must be at least 3 characters." : "",
        // ["email"]: emailValue && emailRegex.test(emailValue) ? "" : "Invalid email address.",
        // ["password"]: passwordRegex.test(values.password) ? "" : "Password must be at least 8 characters and contain at least one number, one uppercase letter and one special character.",
    };
};