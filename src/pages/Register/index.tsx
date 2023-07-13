import {
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
  Box,
  Typography,
} from "@mui/material";
import {
  BadgeOutlined,
  MailOutline as MailOutlineIcon,
} from "@mui/icons-material";

import { useForm, SubmitHandler } from "react-hook-form";
import { useCallback, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { PasswordInput } from "../../components/PasswordInput";

import { Auth } from "../../layouts/Auth";

import styles from "./styles.module.css";
import { RegisterPayload } from "../../@types";
import { authClient } from "../../lib/modules";
import hashIt from "hash-it";
import { useLogin } from "../../hooks";
import { LoadingButton } from "@mui/lab";
import { resolver } from "./validation";

const useRegister = () => {
  const client = useQueryClient();
  const { login } = useLogin();

  return useCallback(
    async (payload: RegisterPayload) => {
      await client.fetchQuery(["register", hashIt(payload)], () =>
        authClient.register(payload),
      );

      login(payload.email, payload.password);
    },
    [client, login],
  );
};

export default function Register() {
  const { register, handleSubmit } = useForm<
    RegisterPayload & { confirmPassword: string }
  >({
    resolver,
  });

  const signUp = useRegister();

  const [isLoading, setIsLoading] = useState(false);

  const _handleSubmit: SubmitHandler<RegisterPayload> = useCallback(
    async (data) => {
      setIsLoading(true);
      await signUp(data);
      setIsLoading(false);
    },
    [signUp],
  );

  return (
    <Auth
      title="Sign up"
      description={
        <Typography>
          Already have an account? <Link to={"/login"}>Sign in</Link>{" "}
        </Typography>
      }
    >
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
            inputProps={register("email")}
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
          hasShow={false}
          inputProps={register("confirmPassword")}
          id="confirmPassword"
          label="Confirm password"
          placeHolder="Retype your password"
        />
        <FormControl>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <Input
            id="lastName"
            inputProps={register("lastName")}
            placeholder="Last Name"
            startAdornment={
              <InputAdornment position="start">
                <BadgeOutlined />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <Input
            id="firstNameName"
            inputProps={register("firstName")}
            placeholder="First Name"
            startAdornment={
              <InputAdornment position="start">
                <BadgeOutlined />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="userName">User Name</InputLabel>
          <Input
            id="useName"
            inputProps={register("userName")}
            placeholder="User Name"
            startAdornment={
              <InputAdornment position="start">
                <BadgeOutlined />
              </InputAdornment>
            }
          />
        </FormControl>
        <LoadingButton
          loading={isLoading}
          type="submit"
          aria-label="login"
          variant="contained"
        >
          Register
        </LoadingButton>
      </Box>
    </Auth>
  );
}
