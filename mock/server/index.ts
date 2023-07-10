import { createServer } from "miragejs";
import { apiBaseURL } from "../../src/config/api";
import {
  historyHandler,
  logoutHandler,
  returnDummy,
  searchHandler,
} from "./handlers";

export const initServer = () =>
  createServer({
    routes() {
      this.urlPrefix = apiBaseURL;

      this.post("/login", returnDummy);

      this.post("/auth", returnDummy);

      this.post("/logout", logoutHandler);

      this.post("/search", searchHandler);

      this.get("/history", historyHandler);
    },
  });
