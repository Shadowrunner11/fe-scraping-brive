import axios from "axios";
import { AuthFacade } from "../services/auth";
import { apiBaseURL, isFakeServerOn } from "../../config/api";
import { SearchFacade } from "../services/search";

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
