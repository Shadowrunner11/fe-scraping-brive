import { Response } from "miragejs";

import {
  PaginatedResponse,
  SearchResponse,
} from "../../../src/lib/services/types";
import { RouteHandler } from "miragejs/server";
import { AnyRegistry, AnyResponse } from "miragejs/-types";

const userDummy = {
  userId: 123123,
  token:
    "eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.eJyrVkqtKMgsSi32zFOyMjQyBiIdpdLi1KK8xNxUJSulgvycnMySfOf8vIDEgsRiJYikZwpQytCoGCxQkp-dmqdbUlkAUp9VXqJUCwC4TxwX.66I5WIFTmNvsZTiAABc6coKcWiSjMn8rJmOpQWrMnps",
  username: "pollitoConPapas",
  expiresIn: 10000,
  firstName: "Diego",
  lastName: "Parra",
};

const searchDummy = {
  companyName: "asdasd",
  createdAt: "2022-10-12",
  id: 12,
  totalJobs: 23,
};

export const returnDummy = () => userDummy;

export const searchHandler: RouteHandler<AnyRegistry, AnyResponse> = (
  _,
  request,
): SearchResponse | Response => {
  if (!request.requestHeaders.Authorization)
    return new Response(403, {}, { errors: ["no acces"] });

  return {
    companyName: "asdasd",
    createdAt: "2022-10-12",
    id: 12,
    totalJobs: 23,
  };
};

export const historyHandler: RouteHandler<AnyRegistry, AnyResponse> = (
  _,
  request,
): PaginatedResponse<SearchResponse> | Response => {
  if (!request.requestHeaders.Authorization)
    return new Response(403, {}, { errors: ["no acces"] });

  return {
    info: {
      total: 200,
      next: 2,
    },
    results: Array.from({ length: 10 }).map(() => searchDummy),
  };
};

export const logoutHandler: RouteHandler<AnyRegistry, AnyResponse> = () => {
  return "succes";
};
