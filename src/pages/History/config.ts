import { MRT_ColumnDef } from "material-react-table";
import { SearchResponse } from "../../lib/services/types";

export const columns: MRT_ColumnDef<SearchResponse>[] = [
  {
    accessorKey: "companyName", //simple recommended way to define a column
    header: "Comapany Name",
    muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
  },
  {
    accessorKey: "jobsCount",
    header: "Total Jobs",
  },
];
