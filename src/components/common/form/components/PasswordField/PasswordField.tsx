import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField } from "@mui/material";
import * as Styles from "./styles";

type Props = {
  [key: string]: any;
};

const PasswordField = React.forwardRef((props: Props, ref: any) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Styles.TextFieldWrapper>
      <TextField
        {...props}
        type={showPassword ? "text" : "password"}
        ref={ref}
      />
      <Styles.VisibilityIcon
        aria-label="toggle password visibility"
        onClick={toggleVisibility}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </Styles.VisibilityIcon>
    </Styles.TextFieldWrapper>
  );
});

PasswordField.displayName = "PasswordField";

export default PasswordField;
