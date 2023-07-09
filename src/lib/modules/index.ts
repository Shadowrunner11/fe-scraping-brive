import axios from "axios";
import { AuthFacade } from "../services/auth";
import { apiBaseURL } from "../../config/api";
import { SearchFacade } from "../services/search";

const server = import.meta.env.DEV
  ? await import("../../../mock/server")
  : null;

server?.initServer();

const token = localStorage.getItem("_auth");

const axiosClient = axios.create({
  baseURL: apiBaseURL,
  headers: {
    common: {
      Authorization: token ? `Bearer ${token}` : null,
    },
  },
});

export const authClient = new AuthFacade(axiosClient);

export const searchClient = new SearchFacade(axiosClient);
