import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export const App = () => {
  return (
    <Box minHeight={"100vh"}>
      <Header />
      <Outlet />
    </Box>
  );
};
