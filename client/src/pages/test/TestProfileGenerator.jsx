import { useEffect, useState } from "react";

import { useInput } from "@hooks";

export default function TestAssets() {
  const [prefix, onPrefixUpdate] = useInput("");
  const [loading, setLoading] = useState({});

  const testUsernames = [
    ...Array.from({ length: 5 }).map((_, i) => `user0${i + 1}`),
    ...Array.from({ length: 5 }).map((_, i) => `chef0${i + 1}`),
    ...Array.from({ length: 5 }).map((_, i) => `brand0${i + 1}`),
    "admin",
    "kittyyakki",
    "kkm41",
    "PresentKim",
    "xpffpzja",
  ];
  const GEN_URL = `https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${prefix}`;

  useEffect(() => {
    const initialLoadingState = testUsernames.reduce((acc, username) => {
      acc[username] = true;
      return acc;
    }, {});
    setLoading(initialLoadingState);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefix]);

  const onFetched = (username) =>
    setLoading((prev) => ({ ...prev, [username]: false }));

  return (
    <div className="flex flex-col items-center">
      <h1 className="w-full text-center text-4xl font-bold mb-2">
        Profile Generator Test
      </h1>
      <input
        type="text"
        className="mx-8 p-2 border-2 rounded-md border-neutral-700"
        defaultValue={prefix}
        onChange={onPrefixUpdate}
      />
      <div className="w-full grid grid-cols-4 gap-4 p-4 mt-8 md:grid-cols-5 lg:grid-cols-10">
        {testUsernames.map((testUsername) => (
          <img
            className={
              "rounded-full w-full h-full transition-[filter] " +
              (loading[testUsername] ? "animate-spin repeat-infinite blur" : "")
            }
            key={testUsername}
            src={`${GEN_URL}${testUsername}`}
            alt={testUsername}
            onLoad={() => onFetched(testUsername)}
            onError={() => onFetched(testUsername)}
          />
        ))}
      </div>
    </div>
  );
}
