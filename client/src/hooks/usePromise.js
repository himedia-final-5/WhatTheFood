import { useState } from "react";

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
  const [isError, setError] = useState(false);

  const wrappedPromiseFn = async (...args) => {
    setLoading(true);

    try {
      setData(await promiseFn(...args));
    } catch (error) {
      if (!onError(error)) {
        setError(true);
      }
    } finally {
      setError(false);
      setLoading(false);
    }
  };

  return [wrappedPromiseFn, data, isLoading, isError];
}
