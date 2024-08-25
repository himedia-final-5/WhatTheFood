import { useNavigate } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";

import cn from "utils/cn";
import { useInput } from "hooks";

export default function SearchButton() {
  const navigate = useNavigate();
  const [searchTerm, onTermChange, setSearchTerm] = useInput("");

  const handleSearch = async () => {
    const trimTerm = searchTerm.trim();

    if (trimTerm) {
      setSearchTerm("");
      navigate(`/recipes/`, { state: { searchTerm: trimTerm } });
    }
  };

  return (
    <form
      className={cn(
        "relative flex-1 justify-center items-center rounded-full",
        "h-10 w-full max-w-96 px-4",
        "border border-neutral-600 bg-neutral-50",
        "hidden xs:flex",
      )}
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <input
        type="search"
        placeholder="레시피 검색"
        value={searchTerm}
        onChange={onTermChange}
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
