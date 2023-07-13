import {
  Navigate,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";

import { PropsWithChildren, lazy } from "react";
import { App } from "../layouts/App";

const LazyHome = lazy(() => import("../pages/Home"));

const LazyLogin = lazy(() => import("../pages/Login"));

const LazyRegister = lazy(() => import("../pages/Register"));

const PrivateRoute = ({ children }: PropsWithChildren) => {
  const isAuthenticated = useIsAuthenticated();
  const auth = isAuthenticated();
  return auth ? <>{children}</> : <Navigate to="/login" />;
};

const createRouter = import.meta.env.VITE_IS_HASH
  ? createHashRouter
  : createBrowserRouter;

export const routes = createRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <LazyHome />,
      },
    ],
  },
  {
    path: "/login",
    element: <LazyLogin />,
  },
  {
    path: "/register",
    element: <LazyRegister />,
  },
]);
