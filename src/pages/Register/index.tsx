import {
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
  Box,
  Typography,
} from '@mui/material';
import {
  BadgeOutlined,
  MailOutline as MailOutlineIcon,
} from '@mui/icons-material';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { PasswordInput } from '../../components/PasswordInput';

import { Auth } from '../../layouts/Auth';

import styles from './styles.module.css';
import { RegisterPayload } from '../../@types';
import { authClient } from '../../lib/modules';

import { useLogin } from '../../hooks';
import { LoadingButton } from '@mui/lab';
import { resolver } from './validation';
import { parseError } from '../../utils';
import { AxiosError } from 'axios';

const useRegister = () => {
  const [registerPayload, setRegisterPayload] = useState<
    RegisterPayload | undefined
  >();
  const query = useQuery(
    [registerPayload],
    async () =>
      registerPayload ? await authClient.register(registerPayload) : null,
    {
      enabled: !!registerPayload,
    },
  );
  const { login } = useLogin();

  useEffect(() => {
    if (registerPayload && !query.error && !query.isFetching)
      login(registerPayload.email, registerPayload.password);
  }, [login, query.error, query.isFetching, registerPayload]);

  return {
    register: useCallback((payload: RegisterPayload) => {
      setRegisterPayload(payload);
    }, []),
    ...query,
  };
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterPayload & { confirmPassword: string }>({
    resolver,
  });

  const { register: signUp, error, isFetching } = useRegister();

  const _handleSubmit: SubmitHandler<RegisterPayload> = useCallback(
    (data) => signUp(data),
    [signUp],
  );

  return (
    <Auth
      title='Sign up'
      description={
        <Typography>
          Already have an account? <Link to={'/login'}>Sign in</Link>{' '}
        </Typography>
      }
    >
      <Box
        component='form'
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(_handleSubmit)}
        className={styles.loginForm}
      >
        <FormControl>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <Input
            id='email'
            inputProps={register('email')}
            placeholder='Enter your email address'
            startAdornment={
              <InputAdornment position='start'>
                <MailOutlineIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <Typography color='error'>{errors.email?.message}</Typography>
        <PasswordInput inputProps={register('password')} />
        <Typography color='error'>{errors.password?.message}</Typography>
        <PasswordInput
          hasShow={false}
          inputProps={register('confirmPassword')}
          id='confirmPassword'
          label='Confirm password'
          placeHolder='Retype your password'
        />
        <Typography color='error'>{errors.confirmPassword?.message}</Typography>
        <FormControl>
          <InputLabel htmlFor='lastName'>Last Name</InputLabel>
          <Input
            id='lastName'
            inputProps={register('lastName')}
            placeholder='Last Name'
            startAdornment={
              <InputAdornment position='start'>
                <BadgeOutlined />
              </InputAdornment>
            }
          />
        </FormControl>
        <Typography color='error'>{errors.lastName?.message}</Typography>
        <FormControl>
          <InputLabel htmlFor='firstName'>First Name</InputLabel>
          <Input
            id='firstNameName'
            inputProps={register('firstName')}
            placeholder='First Name'
            startAdornment={
              <InputAdornment position='start'>
                <BadgeOutlined />
              </InputAdornment>
            }
          />
        </FormControl>
        <Typography color='error'>{errors.firstName?.message}</Typography>
        <FormControl>
          <InputLabel htmlFor='userName'>User Name</InputLabel>
          <Input
            id='useName'
            inputProps={register('userName')}
            placeholder='User Name'
            startAdornment={
              <InputAdornment position='start'>
                <BadgeOutlined />
              </InputAdornment>
            }
          />
        </FormControl>
        <Typography color='error'>{errors.userName?.message}</Typography>
        <LoadingButton
          loading={isFetching}
          type='submit'
          aria-label='login'
          variant='contained'
        >
          Register
        </LoadingButton>
      </Box>
      <Typography color='error'>{parseError(error as AxiosError)}</Typography>
    </Auth>
  );
}
