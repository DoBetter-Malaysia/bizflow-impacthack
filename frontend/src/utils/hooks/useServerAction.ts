import { useState, useTransition } from "react";

type UseServerActionType = <T extends (...args: any[]) => any>(
  serverAction: T
) =>
  | {
      /** The function caller */
      invoke: (...args: Parameters<T>) => void;
      /** The data returned by the server action */
      data: Awaited<ReturnType<T>> | null;
      /** If the server action is running in the server currently */
      isLoading: boolean;
      /** Is the data populated: Has the server action returns? */
      isSuccess: boolean;
    } & (
      | {
          data: Awaited<ReturnType<T>>;
          isLoading: false;
          isSuccess: true;
        }
      | { data: null; isLoading: boolean; isSuccess: false }
    );

/**
 * Use this hook whenever you're calling server action for simplicity
 *
 * @param serverAction The server action function from the file with "use server"
 *
 */
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
