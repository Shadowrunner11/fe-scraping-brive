import { useQuery } from "@tanstack/react-query";
import { MaterialReactTable } from "material-react-table";
import { MRT_ColumnDef, MRT_PaginationState } from "material-react-table";
import { useState } from "react";
import { searchClient } from "../../lib/modules";
import { SearchResponse } from "../../lib/services/types";

const columns: MRT_ColumnDef<SearchResponse>[] = [
  {
    accessorKey: "companyName", //simple recommended way to define a column
    header: "Comapany Name",
    muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
  },
  {
    accessorKey: "totalJobs",
    header: "Total Jobs",
  },
];

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

  console.log(page);

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
