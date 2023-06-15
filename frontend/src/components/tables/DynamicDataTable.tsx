import sortBy from "lodash/sortBy";
import { Text, Divider, TextInput, Select } from "@mantine/core";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Transaction } from "@/models/transaction";

const PAGE_SIZE = 10;

const DynamicDataTable = ({
  rows,
  columns,
  dropDownOptions,
}: {
  rows: Transaction[];
  columns: any[];
  dropDownOptions: any[];
}) => {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(
    sortBy(rows.slice(0, PAGE_SIZE), "date")
  );
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: "date",
    direction: "asc",
  });

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    const data = sortBy(
      rows.slice(from, to),
      sortStatus.columnAccessor
    ) as Transaction[];
    setRecords(sortStatus.direction === "desc" ? data.reverse() : data);
  }, [page, sortStatus, rows]);

  return (
    <>
      <div className="w-full rounded-xl bg-white p-12 drop-shadow-lg">
        <h1 className="text-3xl font-bold">Recent Transactions</h1>
        <div className="grid w-full grid-cols-4 gap-6 py-2">
          <div className="col-span-3">
            <TextInput
              placeholder="Hoh Shen Yien"
              label="Search Transaction"
              rightSection={<FaSearch />}
            />
          </div>
          <div className="col-span-1">
            <Select
              label="Filter by"
              placeholder="None"
              data={dropDownOptions}
            />
          </div>
        </div>
        <div className="py-6">
          <Divider />
        </div>
        <DataTable
          withBorder={false}
          borderRadius="sm"
          striped
          highlightOnHover
          records={records}
          columns={columns}
          totalRecords={rows.length}
          sortStatus={sortStatus}
          onSortStatusChange={setSortStatus}
          recordsPerPage={PAGE_SIZE}
          page={page}
          onPageChange={(p) => setPage(p)}
          loadingText="Loading..."
          noRecordsText="No records found"
          paginationText={({ from, to, totalRecords }) =>
            `Records ${from} - ${to} of ${totalRecords}`
          }
          paginationColor="blue.6"
        />
      </div>
    </>
  );
};

export default DynamicDataTable;
