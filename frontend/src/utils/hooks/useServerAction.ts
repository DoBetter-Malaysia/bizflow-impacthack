import { useState, useTransition } from "react";

type UseServerActionType = <T extends (...args: any[]) => any>(
  serverAction: T
) =>
  | {
      invoke: (...args: Parameters<T>) => void;
    } & (
      | { data: Awaited<ReturnType<T>>; isLoading: false; isSuccess: true }
      | { data: null; isLoading: boolean; isSuccess: false }
    );

// @ts-ignore
const useServerAction: UseServerActionType = <
  T extends (...args: any[]) => any
>(
  serverAction: T
) => {
  let [isPending, startTransition] = useTransition();
  const [data, setData] = useState<Awaited<ReturnType<T>> | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const invoke = (...args: Parameters<T>) => {
    startTransition(async () => {
      const res = await serverAction(...args);
      setIsSuccess(true);
      setData(res);
    });
  };

  return {
    isLoading: isPending,
    isSuccess,
    data,
    invoke,
  };
};

export default useServerAction;
