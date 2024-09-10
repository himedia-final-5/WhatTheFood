import { useCallback, useState } from "react";

import { defaultErrorHandler } from "@utils";

/**
 * @template T
 * @param {T} initialValue
 * @param {() => Promise<T>} promiseFn
 * @param {(error: Error) => void} onError
 * @returns {[() => Promise<T>, T,  boolean, boolean]}
 */
export default function usePromise(
  initialValue,
  promiseFn,
  onError = defaultErrorHandler,
) {
  const [data, setData] = useState(initialValue);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const wrappedPromiseFn = useCallback(
    async (...args) => {
      setLoading(true);

      try {
        const result = await promiseFn(...args);
        setData(result);
        setError(null);
        setLoading(false);
        return result;
      } catch (error) {
        setLoading(false);
        if (!onError || !onError(error)) {
          setError(error);
        } else {
          throw error;
        }
      }
    },
    [promiseFn, onError],
  );

  return [wrappedPromiseFn, data, isLoading, error];
}
