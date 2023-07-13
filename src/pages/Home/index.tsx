import { SearchOutlined as SearchOffOutlinedIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Paper,
  Typography,
} from '@mui/material';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { History } from '../History';
import { resolver } from './validation';

import { SearchResult } from './SearchResult';
import { useSearch } from './useSearch';

import styles from './styles.module.css';
import { AxiosError } from 'axios';

interface SearchDTO {
  searchText: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchDTO>({
    resolver,
  });

  const { search, data: searchData, isFetching, error } = useSearch();

  const _handleSubmit: SubmitHandler<SearchDTO> = useCallback(
    ({ searchText }) => {
      search(searchText);
    },
    [search],
  );

  return (
    <Box className={styles.wrapper}>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <Box component='form' onSubmit={handleSubmit(_handleSubmit)}>
        <FormControl variant='outlined'>
          <OutlinedInput
            id='search'
            inputProps={register('searchText')}
            placeholder='Enter your search'
            startAdornment={
              <InputAdornment position='start'>
                <SearchOffOutlinedIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <Button type='submit' aria-label='search' variant='contained'>
          Search
        </Button>
      </Box>

      <Typography color='error' textAlign='center'>
        {errors?.searchText?.message ??
          ((error as AxiosError) ? 'There are no results' : null)}
      </Typography>

      <Paper
        sx={{ minHeight: '30vh', display: 'grid', placeContent: 'center' }}
      >
        {isFetching ? (
          <CircularProgress />
        ) : (
          <SearchResult searchData={searchData} />
        )}
      </Paper>
      <History
        searchId={
          (searchData?.jobsCount.toString() ?? '') +
          (searchData?.companyName ?? '')
        }
      />
    </Box>
  );
}
