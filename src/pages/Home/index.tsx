import { SearchOutlined as SearchOffOutlinedIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./styles.module.css";
import { useQueryClient } from "@tanstack/react-query";
import { searchClient } from "../../lib/modules";
import { SearchResponse } from "../../lib/services/types";
import History from "../History";
import { resolver } from "./validation";

interface SearchDTO {
  searchText: string;
}

const useSearch = () => {
  const client = useQueryClient();

  return useCallback(
    async (text: string) => {
      return await client.fetchQuery([text], () =>
        searchClient.searchScrap({ text }),
      );
    },
    [client],
  );
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchDTO>({
    resolver,
  });

  const [searchData, setSearchData] = useState<SearchResponse | null>(null);

  const search = useSearch();

  const _handleSubmit: SubmitHandler<SearchDTO> = useCallback(
    async ({ searchText }) => {
      setSearchData(await search(searchText));
    },
    [search],
  );

  return (
    <Box className={styles.wrapper}>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <Box component="form" onSubmit={handleSubmit(_handleSubmit)}>
        <FormControl variant="outlined">
          <OutlinedInput
            id="search"
            inputProps={register("searchText")}
            placeholder="Enter your search"
            startAdornment={
              <InputAdornment position="start">
                <SearchOffOutlinedIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <Button type="submit" aria-label="search" variant="contained">
          Search
        </Button>
      </Box>
      <Typography color="error" textAlign="center">
        {errors?.searchText?.message}
      </Typography>
      <Paper sx={{ minHeight: "30vh" }}>
        {!searchData && <Typography>No Data</Typography>}
        <Typography>{searchData?.companyName}</Typography>
        <Typography>{searchData?.createdAt}</Typography>
        <Typography>{searchData?.totalJobs}</Typography>
      </Paper>
      <History />
    </Box>
  );
}
