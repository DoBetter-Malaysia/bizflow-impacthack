export type TransactionType =
  | "Cash In"
  | "Cash Out"
  | "Transfer"
  | "Payment"
  | "Asset"
  | "Stock In"
  | "Stock Out";
export type TransactionStatus = "Success" | "Failed" | "Pending" | "Cancelled";

export interface Transaction {
  id: number;
  date: string;
  description: string;
  referenceNo: string;
  debit: number;
  credit: number;
  currentBalance: number;
  senderName: string;
  receiverName: string;
  transactionType: TransactionType[];
  transactionStatus: TransactionStatus;
}
