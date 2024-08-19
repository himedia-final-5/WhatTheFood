export default function memoize(func) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return Promise.resolve(cache.get(key));
    }

    const promise = func(...args).then((result) => {
      cache.set(key, result);
      return result;
    });

    cache.set(key, promise);
    return promise;
  };
}
