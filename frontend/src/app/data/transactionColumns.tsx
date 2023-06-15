import { Text } from "@mantine/core";

function identifyCol(col: string): string {
  let x: string;
  if (col === "debit") {
    x = "red.6";
  } else if (col === "credit") {
    x = "green.6";
  } else {
    x = "dark.6";
  }
  return x;
}

const render = ({ col, val }: { col: string; val: number }): JSX.Element => {
  return (
    <Text weight={700} color={val === 0 ? "gray.6" : identifyCol(col)}>
      {val}
    </Text>
  );
};

export const TRANSACTION_COLUMNS: any[] = [
  // { accessor: "id", title: "No" },
  { accessor: "referenceNo", title: "Reference No", sortable: true },
  { accessor: "description", title: "Description", sortable: true },
  { accessor: "date", title: "Transaction Date", sortable: true },
  {
    accessor: "debit",
    title: "Debit",
    textAlignment: "right",
    sortable: true,
    render: ({ debit }: { debit: any }) => render({ col: "debit", val: debit }),
  },
  {
    accessor: "credit",
    title: "Credit",
    textAlignment: "right",
    sortable: true,
    render: ({ credit }: { credit: any }) =>
      render({ col: "credit", val: credit }),
  },
  { accessor: "senderName", title: "Sender", sortable: true },
  { accessor: "receiverName", title: "Receiver", sortable: true },
  { accessor: "transactionType", title: "Transaction Type", sortable: true },
  { accessor: "transactionStatus", title: "Status", sortable: true },
  {
    accessor: "currentBalance",
    title: "Current Account Balance",
    textAlignment: "right",
    sortable: true,
    render: ({ currentBalance }: { currentBalance: any }) =>
      render({ col: "currentBalance", val: currentBalance }),
  },
];
