import { useQuery } from "@tanstack/react-query";
import { MaterialReactTable, MRT_PaginationState } from "material-react-table";
import { useState } from "react";
import { searchClient } from "../../lib/modules";
import { columns } from "./config";

export default function History() {
  const [page, setPage] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data } = useQuery(
    ["history", page],
    () =>
      searchClient.searchHistoryPaginated({
        page: page.pageIndex + 1,
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
      }}
    />
  );
}
