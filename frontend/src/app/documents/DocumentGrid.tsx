import { useGetAllDocuments } from "@/api/documents";

const DocumentGrid = () => {
  const { data, isSuccess } = useGetAllDocuments();
  return <div>{JSON.stringify(data)}</div>;
};

export default DocumentGrid;
