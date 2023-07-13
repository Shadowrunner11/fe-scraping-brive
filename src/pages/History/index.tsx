import { useQuery } from '@tanstack/react-query';
import { MaterialReactTable, MRT_PaginationState } from 'material-react-table';
import { useMemo, useState } from 'react';
import { searchClient } from '../../lib/modules';
import { columns } from './config';
import { Box, Typography } from '@mui/material';
import { FolderOffOutlined } from '@mui/icons-material';
interface HistoryProps {
  searchId?: number | string;
}

export function History({ searchId }: HistoryProps) {
  const [page, setPage] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isFetching } = useQuery(
    ['history', page, searchId],
    () =>
      searchClient.searchHistoryPaginated({
        page: page.pageIndex,
      }),
    {
      keepPreviousData: true,
    },
  );

  const parsedData = useMemo(
    () =>
      data?.results?.map(({ createdAt, ...rest }) => ({
        ...rest,
        createdAt: new Date(createdAt).toLocaleString(),
      })),
    [data],
  );

  if (!parsedData?.length)
    return (
      <Box sx={{ display: 'grid', placeContent: 'center' }}>
        <FolderOffOutlined sx={{ fontSize: 60 }} />
        <Typography>There is no data yet</Typography>
      </Box>
    );

  return (
    <MaterialReactTable
      onPaginationChange={setPage}
      columns={columns}
      manualPagination
      enableFilters={false}
      rowCount={data?.info.total}
      enableRowNumbers
      data={parsedData ?? []}
      enableColumnOrdering
      state={{
        pagination: page,
        isLoading: isFetching,
      }}
    />
  );
}
