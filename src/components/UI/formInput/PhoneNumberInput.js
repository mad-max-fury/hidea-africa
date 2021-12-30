import React, { useState, useEffect } from "react";
import {
    Box,
    Flex,
    Icon,
    Input,
    Select,
    InputGroup,
    InputLeftElement
} from "@chakra-ui/react";
import Flag from "react-world-flags";
import { AsYouType } from "libphonenumber-js";
import { getCountryTelCode } from "./countries";

export default function PhoneNumberInput({
    size,
    value,
    country,
    options,
    onChange,
    placeholder,
    ...rest
}) {
    let [number, setNumber] = useState(value || "");
    let [selectedCountry, setSelectedCountry] = useState(country || "");
    let [countryCode, setCountryCode] = useState(
        getCountryTelCode(country) || ""
    );

    useEffect(() => {
        setSelectedCountry(country);
        setCountryCode(getCountryTelCode(country));
    }, [country]);

    const onCountryChange = e => {
        let value = e.target.value;
        let code = getCountryTelCode(value);
        let parsedNumber = new AsYouType().input(`${code}${number}`);

        setCountryCode(code);
        setSelectedCountry(value);
        onChange(parsedNumber);
    };

    const onPhoneNumberChange = e => {
        let value = e.target.value;
        let parsedNumber = new AsYouType().input(`${countryCode}${value}`);

        setNumber(value);
        onChange(parsedNumber);
    };

    return (
        <InputGroup size={size} alignItems='center' {...rest}>
            <InputLeftElement width="8rem"
                justifyContent="center"
                alignItems="center"
                borderRight='1px solid grey'
                height="70%"
                top="50%"
                transform="translateY(-50%)"
            >
                <Select
                    left="0"
                    zIndex={1}
                    opacity={0}
                    height="100%"
                    position="absolute"
                    value={selectedCountry}
                    onChange={onCountryChange}
                >
                    <option value="" />
                    {options.map(option => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </Select>
                <Flex p={3} width="100%" alignItems="center">
                    {selectedCountry ? (
                        <> 
                            <Box mr="4px" width='20%' flex={1}>
                                <Flag height="full" width="100%" code={selectedCountry || ""} style={{
                                    marginRight: '8px',
                                    borderRadius: '50%'
                                }} />
                            </Box>
                            <Box mr="4px" width="50%" flex={1}>
                                <span>{`${countryCode}`}</span>
                            </Box>
                        </>
                    ) : (
                        <Icon name="phone" />
                    )}
                </Flex>
            </InputLeftElement>
            <Input
                pl="8rem"
                mr='0.5'
                type="tel"
                value={number}
                pattern="[0-9]"
                outline="1px solid grey"
                placeholder={placeholder}
                onChange={onPhoneNumberChange}
            />
        </InputGroup>
    );
}

PhoneNumberInput.defaultProps = {
    options: [],
    size: "md"
};
