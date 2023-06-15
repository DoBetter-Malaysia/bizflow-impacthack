import { getAllDocuments } from "@/actions/documents";
import { Document } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

export const useGetAllDocuments = () => {
  return useQuery({
    queryKey: ["documents"],
    queryFn: async (): Promise<Document[]> => {
      return await getAllDocuments();
    },
  });
};
