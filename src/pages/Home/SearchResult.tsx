import { Typography } from '@mui/material';
import { SearchResponse } from '../../lib/services/types';

interface SearchResultProps {
  searchData?: SearchResponse | null;
}

export const SearchResult = ({ searchData }: SearchResultProps) => (
  <>
    {!searchData && <Typography>No Data</Typography>}
    <Typography>{searchData?.companyName}</Typography>
    <Typography>
      {searchData?.createdAt
        ? new Date(searchData?.createdAt).toLocaleString()
        : null}
    </Typography>
    <Typography>{searchData?.jobsCount}</Typography>
  </>
);
