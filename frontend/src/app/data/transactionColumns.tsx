import { Text, Button } from "@mantine/core";

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

const ColoredText = ({
  col,
  val,
}: {
  col: string;
  val: number;
}): JSX.Element => {
  return (
    <Text weight={700} color={val === 0 ? "gray.6" : identifyCol(col)}>
      {val}
    </Text>
  );
};

//type TransactionType = "Cash In" | "Cash Out" | "Transfer" | "Payment";
const TransactionType = ({
  transactionType,
}: {
  transactionType: string;
}): JSX.Element => {
  let color;
  if (transactionType === "Cash In") {
    color = "green.6";
  } else if (transactionType === "Cash Out") {
    color = "red.6";
  } else if (transactionType === "Transfer") {
    color = "blue.6";
  } else if (transactionType === "Payment") {
    color = "orange.6";
  } else {
    color = "orange.6";
  }
  return (
    <>
      <Button variant="outline" color={color} radius="xl" size="xs">
        {transactionType}
      </Button>
    </>
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
    render: ({ debit }: { debit: any }) =>
      ColoredText({ col: "debit", val: debit }),
  },
  {
    accessor: "credit",
    title: "Credit",
    textAlignment: "right",
    sortable: true,
    render: ({ credit }: { credit: any }) =>
      ColoredText({ col: "credit", val: credit }),
  },
  { accessor: "senderName", title: "Sender", sortable: true },
  { accessor: "receiverName", title: "Receiver", sortable: true },
  {
    accessor: "transactionType",
    title: "Transaction Type",
    sortable: true,
    render: ({ transactionType }: { transactionType: string }) =>
      TransactionType({ transactionType }),
  },
  { accessor: "transactionStatus", title: "Status", sortable: true },
  {
    accessor: "currentBalance",
    title: "Current Account Balance",
    textAlignment: "right",
    sortable: true,
    render: ({ currentBalance }: { currentBalance: any }) =>
      ColoredText({ col: "currentBalance", val: currentBalance }),
  },
];
