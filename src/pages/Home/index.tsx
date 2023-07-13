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
import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './styles.module.css';
import { useQuery } from '@tanstack/react-query';
import { searchClient } from '../../lib/modules';

import { History } from '../History';
import { resolver } from './validation';
import hashIt from 'hash-it';
import { SearchResult } from './SearchResult';

interface SearchDTO {
  searchText: string;
}

const useSearch = () => {
  const [text, setText] = useState<string | undefined>();
  const query = useQuery(
    [text ?? hashIt('nodata')],
    () => searchClient.searchScrap({ text: text ?? '' }),
    {
      enabled: !!text,
    },
  );

  return {
    search: useCallback((text: string) => {
      setText(text);
    }, []),
    ...query,
  };
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchDTO>({
    resolver,
  });

  const { search, data: searchData, isFetching } = useSearch();

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
        {errors?.searchText?.message}
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
