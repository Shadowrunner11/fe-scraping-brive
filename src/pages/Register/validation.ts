import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterPayload } from '../../@types';

type Schema = RegisterPayload & { confirmPassword: string };

type Shape = {
  [key in keyof Schema]: yup.Schema<any>;
};

const schema = yup.object().shape<Shape>({
  password: yup.string().required().min(6),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .min(6),
  email: yup.string().required().email(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  userName: yup.string().required(),
});

export const resolver = yupResolver(schema);
