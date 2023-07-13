import { useQuery } from '@tanstack/react-query';
import { MaterialReactTable, MRT_PaginationState } from 'material-react-table';
import { useState } from 'react';
import { searchClient } from '../../lib/modules';
import { columns } from './config';
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

  return (
    <MaterialReactTable
      onPaginationChange={setPage}
      columns={columns}
      manualPagination
      enableFilters={false}
      rowCount={data?.info.total}
      enableRowNumbers
      data={data?.results ?? []}
      enableColumnOrdering
      state={{
        pagination: page,
        isLoading: isFetching,
      }}
    />
  );
}
