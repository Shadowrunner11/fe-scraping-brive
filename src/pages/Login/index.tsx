import {
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
  Box,
  Stack,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
} from "@mui/material";
import { MailOutline as MailOutlineIcon } from "@mui/icons-material";

import hash from "hash-it";

import { useSignIn } from "react-auth-kit";

import { useForm, SubmitHandler } from "react-hook-form";
import { useCallback } from "react";

import { Link, useNavigate } from "react-router-dom";
import { PasswordInput } from "../../components/PasswordInput";

import { Auth } from "../../layouts/Auth";

import styles from "./styles.module.css";

import human from "../../assets/Looking-for-candidate.svg";
import { resolver } from "./validation";

import { useQueryClient } from "@tanstack/react-query";
import { authClient } from "../../lib/modules";

interface LoginDTO {
  name: string;
  password: string;
}

const useLogin = () => {
  const client = useQueryClient();
  const signIn = useSignIn();

  const navigate = useNavigate();

  return useCallback(
    async (username: string, password: string) => {
      const { token, expiresIn, firstName, lastName, userId } =
        await client.fetchQuery(["login", username, hash({ password })], () =>
          authClient.login(username, password),
        );

      if (
        signIn({
          expiresIn,
          token,
          tokenType: "Bearer",
          authState: {
            firstName,
            lastName,
            userId,
          },
        })
      )
        navigate("/");
    },
    [client, signIn, navigate],
  );
};

export default function Login() {
  const login = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDTO>({
    resolver,
  });

  const _handleSubmit: SubmitHandler<LoginDTO> = useCallback(
    async ({ name, password }) => {
      await login(name, password);
    },
    [login],
  );

  return (
    <Auth
      image={<img alt="data bases" src={human} />}
      description={
        <Typography>
          If you dont have an account <br /> You can register{" "}
          <Link to="/register">here</Link>
        </Typography>
      }
      title="Sign in"
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
            inputProps={register("name")}
            placeholder="Enter your email address"
            startAdornment={
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <Typography color="error">{errors?.name?.message}</Typography>
        <PasswordInput inputProps={register("password")} />
        <Typography color="error">{errors?.password?.message}</Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          <Link to={"/forgot-password?"}>Forgot password?</Link>
        </Stack>
        <Button type="submit" aria-label="login" variant="contained">
          Login
        </Button>
      </Box>
    </Auth>
  );
}
