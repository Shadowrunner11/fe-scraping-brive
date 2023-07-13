import {
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
  Box,
  Stack,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';
import { MailOutline as MailOutlineIcon } from '@mui/icons-material';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useCallback } from 'react';

import { Link } from 'react-router-dom';
import { PasswordInput } from '../../components/PasswordInput';

import { Auth } from '../../layouts/Auth';

import styles from './styles.module.css';

import human from '../../assets/Looking-for-candidate.svg';
import { resolver } from './validation';

import { useLogin } from '../../hooks';
import { LoadingButton } from '@mui/lab';
import { AxiosError } from 'axios';
import { parseError } from '../../utils';

interface LoginDTO {
  name: string;
  password: string;
}

interface LoginProps {
  showRememberMe?: boolean;
  showForgotPassword?: boolean;
}

export default function Login({
  showForgotPassword,
  showRememberMe,
}: LoginProps) {
  const { login, error, isFetching } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDTO>({
    resolver,
  });

  const _handleSubmit: SubmitHandler<LoginDTO> = useCallback(
    ({ name, password }) => {
      if (typeof login === 'function') login(name, password);
    },
    [login],
  );

  return (
    <Auth
      image={<img alt='data bases' src={human} />}
      description={
        <Typography>
          If you dont have an account <br /> You can register{' '}
          <Link to='/register'>here</Link>
        </Typography>
      }
      title='Sign in'
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
            inputProps={register('name')}
            placeholder='Enter your email address'
            startAdornment={
              <InputAdornment position='start'>
                <MailOutlineIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <Typography color='error'>{errors?.name?.message}</Typography>
        <PasswordInput inputProps={register('password')} />
        <Typography color='error'>{errors?.password?.message}</Typography>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          {showRememberMe && (
            <FormControlLabel control={<Checkbox />} label='Remember me' />
          )}
          {showForgotPassword && (
            <Link to={'/forgot-password?'}>Forgot password?</Link>
          )}
        </Stack>
        <Typography color='error'>{parseError(error as AxiosError)}</Typography>
        <LoadingButton
          loading={isFetching}
          type='submit'
          aria-label='login'
          variant='contained'
        >
          Log in
        </LoadingButton>
      </Box>
    </Auth>
  );
}
