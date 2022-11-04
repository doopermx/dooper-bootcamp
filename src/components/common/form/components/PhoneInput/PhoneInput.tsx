import MuiPhoneNumber, {
  MuiPhoneNumberProps
} from "material-ui-phone-number-2";

function PhoneInput({
  variant = "outlined",
  defaultCountry = "mx",
  onlyCountries = ["mx", "us", "ca", "co", "pe", "br", "ve", "ar", "cl"],
  ...props
}: MuiPhoneNumberProps) {
  return (
    <MuiPhoneNumber
      defaultCountry={defaultCountry}
      onlyCountries={onlyCountries}
      variant={variant}
      disableAreaCodes
      countryCodeEditable={false}
      autoFormat={false}
      autoComplete="off"
      {...props}
    />
  );
}

export default PhoneInput;
