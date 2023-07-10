import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  searchText: yup
    .string()
    .required()
    .matches(/^\w*$/, "Only allowed alphanumeric"),
});

export const resolver = yupResolver(schema);
