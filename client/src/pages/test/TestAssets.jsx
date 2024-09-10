import * as assets from "@components/asset";
import { cn } from "utils";

export default function TestAssets() {
  const assetEntries = Object.entries(assets);
  return (
    <>
      <h1 className="w-full text-center text-4xl font-bold mb-2">Assets</h1>
      <div className="flex flex-wrap gap-2 justify-center">
        {assetEntries.map(([key, value]) => (
          <div
            key={key}
            className="flex flex-col justify-center items-center relative p-4 border-2 rounded-md w-96 h-96"
          >
            <div
              aria-label="asset-name-wrapper"
              className={cn(
                "absolute flex justify-center items-bottom w-full h-full pt-8",
                "text-3xl font-bold drop-shadow-2xl",
                "bg-slate-50 bg-opacity-0 hover:bg-opacity-25",
                "text-primary text-opacity-0 hover:text-opacity-70",
              )}
            >
              <p>{key}</p>
            </div>
            {value({
              className: "max-w-72 max-h-72 text-primary",
            })}
          </div>
        ))}
      </div>
    </>
  );
}
