import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./themes";
import { AuthProvider } from "react-auth-kit";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <AuthProvider authType={"localstorage"} authName={"_auth"}>
          <Suspense fallback={<div>Cargando...</div>}>
            <RouterProvider router={routes} />
          </Suspense>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
