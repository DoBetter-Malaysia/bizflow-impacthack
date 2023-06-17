import { useGetAllDocuments } from "@/api/documents";
import { Skeleton } from "@mantine/core";
import Masonry from "react-responsive-masonry";
import styles from "./documents.module.scss";

const DocumentGrid = () => {
  const { data, isSuccess } = useGetAllDocuments();
  return isSuccess ? (
    <Masonry columnsCount={4} className="space-x-3">
      {data.map((doc, index) => (
        <div
          key={index}
          className={`mt-3 overflow-hidden rounded-sm bg-white shadow-md ${styles.docs}`}
        >
          <img
            src={`${process.env.NEXT_PUBLIC_BACKEND_API}/uploads/${doc.filename}`}
            alt="Receipt"
          />
          <div className="px-2 py-2">
            <div className="flex items-end justify-between text-sm">
              <div className="font-semibold">{doc.info["from"]}</div>
              <div className="text-xs text-blue-gray-700">
                {doc.createdAt.toDateString()}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Masonry>
  ) : (
    <div className="grid grid-cols-4 gap-3">
      {Array(10)
        .fill(0)
        .map((_, key) => (
          <Skeleton key={key} width="100%" h="240" />
        ))}
    </div>
  );
};

export default DocumentGrid;
