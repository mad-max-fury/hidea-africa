import React, { useState, useEffect } from "react";
import {
    Icon,
    Input,
    InputGroup,
    InputLeftElement
} from "@chakra-ui/react";


const SocialInput = ({
    size,
    value,
    logo,
    onChange,
    placeholder,
    ...rest
}) => {
    let [username, setUsername] = useState(value || "");


    useEffect(() => {
        setUsername(username);
    }, [username]);

    const onUsernameChange = e => {
        let value = e.target.value;
        setUsername(value);
        onChange(value);
    };

    return (
        <InputGroup size={size} alignItems='center' justifyContent='center' {...rest}>
            <InputLeftElement
                pointerEvents="none"
                height="100%"
                children={<Icon name={logo} size="24px" />}
            />
            <Input
                my={2}
                type="text"
                value={username}
                placeholder='@username'
                outline="1px solid grey"
                onChange={onUsernameChange}
            />
        </InputGroup>
    );
}

SocialInput.defaultProps = {
    options: [],
    size: "lg"
};

export default SocialInput;
