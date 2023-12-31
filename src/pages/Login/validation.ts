import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup.string().required().email(),
  password: yup.string().required(),
});

export const resolver = yupResolver(schema);
