import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";

import cn from "@utils/cn";
import useSearchParamState from "@hooks/useSearchParamState";

export default function SearchButton() {
  const navigate = useNavigate();
  const [searchTerm] = useSearchParamState("q", "");
  const inputRef = useRef(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (inputRef.current) {
      const trimTerm = encodeURIComponent(inputRef.current.value.trim());
      navigate(`/recipes?q=${trimTerm}`);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = searchTerm;
    }
  }, [searchTerm]);

  return (
    <form
      className={cn(
        "relative flex-1 justify-center items-center rounded-full",
        "h-10 w-full max-w-96 px-4",
        "border border-neutral-600 bg-neutral-50",
        "hidden xs:flex",
      )}
      onSubmit={handleSearch}
    >
      <input
        ref={inputRef}
        type="search"
        placeholder="레시피 검색"
        defaultValue={searchTerm}
        className="w-full text-base p-0"
      />
      <button
        type="submit"
        className="absolute right-2 top-0 flex items-center h-full z-20"
      >
        <IconSearch className="h-6 w-6" />
      </button>
    </form>
  );
}
