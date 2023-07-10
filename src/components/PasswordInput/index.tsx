import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputBaseComponentProps,
  InputLabel,
} from "@mui/material";
import { useReducer } from "react";
import {
  LockOutlined as LockOutlinedIcon,
  RemoveRedEyeOutlined as RemoveRedEyeOutlinedIcon,
  VisibilityOffOutlined as VisibilityOffOutlinedIcon,
} from "@mui/icons-material";

interface PasswordInputProps {
  inputProps: InputBaseComponentProps;
  id?: string;
  placeHolder?: string;
  label?: string;
  hasShow?: boolean;
}

function reduceIsVisible(state: boolean) {
  return !state;
}

export const PasswordInput = ({
  inputProps,
  id = "password",
  label = "Password",
  placeHolder = "Enter your password",
  hasShow = true,
}: PasswordInputProps) => {
  const [isVisible, toggleIsVisible] = useReducer(reduceIsVisible, false);

  return (
    <FormControl>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id}
        type={isVisible ? "text" : "password"}
        inputProps={inputProps}
        placeholder={placeHolder}
        startAdornment={
          <InputAdornment position="start">
            <LockOutlinedIcon />
          </InputAdornment>
        }
        endAdornment={
          hasShow && (
            <InputAdornment
              component={IconButton}
              position="end"
              onClick={toggleIsVisible}
            >
              {isVisible ? (
                <VisibilityOffOutlinedIcon />
              ) : (
                <RemoveRedEyeOutlinedIcon />
              )}
            </InputAdornment>
          )
        }
      />
    </FormControl>
  );
};
