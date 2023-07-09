import { Box, Typography } from "@mui/material";

import { PropsWithChildren } from "react";

import styles from "./styles.module.css";

interface AuthProps {
  description?: React.ReactNode;
  title: string;
  image?: JSX.Element;
}

export const Auth = ({
  children,
  description,
  title,
  image,
}: PropsWithChildren<AuthProps>) => {
  return (
    <Box className={styles.wrapper}>
      {image && <Box className={styles.image}>{image}</Box>}
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <Box className={styles.authWrapper}>
        <Typography component="h1" variant="h3">
          {title}
        </Typography>
        {description}
        {children}
      </Box>
    </Box>
  );
};
