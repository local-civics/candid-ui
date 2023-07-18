import * as React from "react";
import { AssignmentData } from "../../../models/assignment";
import { Avatar, Box, Button} from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { MantineReactTable, MRT_ColumnDef, MRT_Row } from "mantine-react-table";
import { useMemo } from "react";
import { buildAvatarURL } from "../../core/avatar/helpers";
import { useAssignmentStyles } from "../styles";
import { ExportToCsv } from "export-to-csv";

/**
 * AssignmentBreakdownProps
 */
export type AssignmentBreakdownProps = AssignmentData & {

}

/**
 * AssignmentBreakdown
 * @param props
 * @constructor
 */
export function AssignmentBreakdown(props: AssignmentBreakdownProps){
  const {classes} = useAssignmentStyles()
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorFn: (row) => row.assignee, //accessorFn used to join multiple data into a single cell
        id: 'assignee',
        header: 'Assignee',
        size: 250,
        Cell: ({ renderedCellValue, row }) => {
          const avatarURL = buildAvatarURL(row.original.avatarURL, row.original.assignee);

          return <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <Avatar size={30} className={classes.userAvatar} src={avatarURL} radius="xl" />
            <span>{renderedCellValue}</span>
          </Box>
        },
      },
      {
        accessorKey: 'status',
        accessorFn: (originalRow) => originalRow.status.toLowerCase().replace(/\b\w/g, (s: string) => s.toUpperCase()),
        id: 'status',
        header: 'Status',
        filterVariant: "select",
        mantineFilterSelectProps: {
          data: ["Incomplete", "In Progress", "Complete"] as any
        },
        size: 200,
      },
      ...props.columns,
    ],
    [],
  );

  const csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: true,
    filename: 'localcivics-export'
  };

  const csvExporter = new ExportToCsv(csvOptions);

  const handleExportRows = (rows: MRT_Row<any>[]) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  const handleExportData = () => {
    csvExporter.generateCsv(props.breakdown);
  };

  return <MantineReactTable
    enableColumnOrdering
    enableColumnFilterModes
    enableGrouping
    columns={columns}
    data={props.breakdown}
    initialState={{
      showColumnFilters: true,
      grouping: props.grouping,
    }}
    enableRowSelection
    positionExpandColumn="last"
    positionToolbarAlertBanner="bottom"
    renderTopToolbarCustomActions={({ table }) => (
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          padding: '8px',
          flexWrap: 'wrap',
        }}
      >
        <Button
          color="lightblue"
          //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
          onClick={handleExportData}
          leftIcon={<IconDownload />}
          variant="filled"
        >
          Export All Data
        </Button>
        <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          //export all rows, including from the next page, (still respects filtering and sorting)
          onClick={() =>
            handleExportRows(table.getPrePaginationRowModel().rows)
          }
          leftIcon={<IconDownload />}
          variant="filled"
        >
          Export All Rows
        </Button>
        <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          //only export selected rows
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          leftIcon={<IconDownload />}
          variant="filled"
        >
          Export Selected Rows
        </Button>
      </Box>
    )}
  />
}