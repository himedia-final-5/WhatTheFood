import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import cn from "utils/cn";
import { useState } from "react";

export default function SearchButton({ value, onChange }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    const searchTerm = value.trim();

    if (searchTerm) {
      setLoading(true);
      setError(null);

      try {
        // 서버의 검색 API를 호출합니다.
        const response = await fetch(
          `/api/recipes/search?title=${encodeURIComponent(searchTerm)}`,
        );

        if (!response.ok) {
          throw new Error("error");
        }

        const data = await response.json();

        navigate(`/api/recipes/`, { state: { searchResults: data } });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
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
        value={value}
        onChange={onChange}
        className="w-full text-base p-0"
      />
      <button
        type="submit"
        className="absolute right-2 top-0 flex items-center h-full z-20"
        disabled={loading}
      >
        <MagnifyingGlassIcon className="h-8 w-8" />
      </button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
    </form>
  );
}
