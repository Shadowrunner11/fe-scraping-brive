import {
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
  Box,
  Button,
} from "@mui/material";
import { MailOutline as MailOutlineIcon } from "@mui/icons-material";

import { useForm, SubmitHandler } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { PasswordInput } from "../../components/PasswordInput";

import { useSignIn } from "react-auth-kit";

import { Auth } from "../../layouts/Auth";

import styles from "./styles.module.css";

interface LoginDTO {
  name: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const [loginData, setLoginData] = useState<LoginDTO>();
  const { register, handleSubmit } = useForm<LoginDTO>();
  const navigate = useNavigate();
  const signIn = useSignIn();

  const { data, isFetched } = useQuery(
    ["login"],
    () => ({
      token: loginData?.name ?? "asdasd",
      expiresIn: 12341324,
      tokenType: "Bearer",
    }),
    {
      enabled: !!loginData,
    },
  );

  const _handleSubmit: SubmitHandler<LoginDTO> = useCallback((data) => {
    setLoginData(data);
  }, []);

  useEffect(() => {
    if (!loginData && !isFetched) return;

    if (!data) return;

    signIn(data);

    navigate("/");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetched, data, loginData]);

  return (
    <Auth title="Sign up">
      <Box
        component="form"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(_handleSubmit)}
        className={styles.loginForm}
      >
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            inputProps={register("name")}
            placeholder="Enter your email address"
            startAdornment={
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <PasswordInput inputProps={register("password")} />
        <PasswordInput
          inputProps={register("confirmPassword")}
          id="confirmPassword"
          label="Confirm password"
          placeHolder="Retype your password"
        />
        <Button type="submit" aria-label="login" variant="contained">
          Register
        </Button>
      </Box>
    </Auth>
  );
}
