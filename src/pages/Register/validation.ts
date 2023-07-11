import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterPayload } from "../../@types";

type Schema = RegisterPayload & { confirmPassword: string };

type Shape = {
  [key in keyof Schema]: yup.Schema<any>;
};

const schema = yup.object().shape<Shape>({
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
  email: yup.string().required().email(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
});

export const resolver = yupResolver(schema);
