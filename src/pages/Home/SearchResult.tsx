import { Typography } from '@mui/material';
import { SearchResponse } from '../../lib/services/types';

interface SearchResultProps {
  searchData?: SearchResponse | null;
}

export const SearchResult = ({ searchData }: SearchResultProps) => (
  <>
    <Typography>{searchData ? 'Successfully' : 'No Data'}</Typography>
    <Typography>
      {searchData?.companyName && <strong>Company name:</strong>}{' '}
      {searchData?.companyName}
    </Typography>
    <Typography>
      {searchData?.createdAt
        ? new Date(searchData?.createdAt).toLocaleString()
        : null}
    </Typography>
    <Typography>
      {searchData?.jobsCount && <strong>Total jobs:</strong>}{' '}
      {searchData?.jobsCount}
    </Typography>
  </>
);
