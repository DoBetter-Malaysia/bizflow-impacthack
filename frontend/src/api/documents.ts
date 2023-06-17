import { getAllDocuments } from "@/actions/documents";
import { Document } from "@prisma/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAllDocuments = () => {
  return useQuery({
    queryKey: ["documents"],
    queryFn: async (): Promise<Document[]> => {
      return await getAllDocuments();
    },
  });
};

export const useUploadImage = () => {
  return useMutation({
    mutationKey: ["upload", "documents"],
    mutationFn: async (form: FormData) => {
      return await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/upload`,
        form
      );
    },
  });
};
