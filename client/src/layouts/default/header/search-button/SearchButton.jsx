import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import cn from "utils/cn";

export default function SearchButton() {
  return (
    <form
      className={cn(
        "relative flex-1 justify-center items-center rounded-full",
        "h-10 w-full max-w-96 px-4",
        "border border-solid border-neutral-600 bg-neutral-50",
        "hidden xs:flex",
      )}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="레시피 검색"
        className="w-full text-base p-0"
      />
      <button
        type="submit"
        className="absolute right-2 top-0 flex items-center h-full z-20"
      >
        <MagnifyingGlassIcon className="h-8 w-8" />
      </button>
    </form>
  );
}
