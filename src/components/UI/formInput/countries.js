import {Country} from "country-state-city";

const COUNTRIES = Country.getAllCountries();

const getCountryTelCode = country =>
    country && COUNTRIES.find(({ isoCode }) => isoCode === country).phonecode;

export { COUNTRIES, getCountryTelCode };

console.log(COUNTRIES);