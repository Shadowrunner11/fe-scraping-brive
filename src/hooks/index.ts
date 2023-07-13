import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { authClient } from "../lib/modules";

export const useLogin = () => {
  const [loginData, setLoginData] = useState<{
    username: string;
    password: string;
  }>();

  const { data, ...rest } = useQuery(
    ["login", loginData],
    () =>
      authClient.login(loginData?.username ?? "", loginData?.password ?? ""),
    {
      enabled: !!loginData,
      retry: false,
      staleTime: 0,
    },
  );
  const signIn = useSignIn();

  const navigate = useNavigate();

  const login = useCallback(() => {
    if (!data) return;
    if (
      signIn({
        expiresIn: data.expiresIn,
        token: data.token,
        tokenType: "Bearer",
        authState: {
          firstName: data.firstName,
          lastName: data.lastName,
          userId: data.userId,
        },
      })
    )
      navigate("/");
  }, [data, navigate, signIn]);

  useEffect(() => {
    login();
  }, [login, loginData]);

  return {
    ...rest,
    login: useCallback((username: string, password: string) => {
      setLoginData({
        username,
        password,
      });
    }, []),
  };
};
