import { useCallback, useState } from "react";

import { defaultErrorHandler } from "utils";

/**
 * @template T
 * @param {T} initialValue
 * @param {() => Promise<T>} promiseFn
 * @param {(error: Error) => void} onError
 * @returns {[() => void,T,  boolean, boolean]}
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
        setData(await promiseFn(...args));
      } catch (error) {
        if (!onError || !onError(error)) {
          setError(error);
        } else {
          throw error;
        }
      } finally {
        setLoading(false);
      }
    },
    [promiseFn, onError],
  );

  return [wrappedPromiseFn, data, isLoading, error];
}
