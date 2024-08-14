import cn from "utils/cn";
import PaginationLeft from "components/asset/PaginationLeft";
import PaginationRight from "components/asset/PaginationRight";

/**
 * @typedef {object} Props
 * @property {Pagination} pagination 페이지 정보
 * @property {function(number)} onSelectPage 페이지 이동 함수
 */
/** @type {function(Props): React.JSX.Element} */

export default function PaginationNav({ pagination, onSelectPage }) {
  const current = pagination.page;
  const start = Math.max(0, Math.min(current - 2, pagination.totalPages - 5));
  const end = Math.min(pagination.totalPages - 1, start + 4);

  const isFistPage = current === 0;
  const isLastPage = current === pagination.totalPages - 1;

  return (
    <nav aria-label="pagination" className="flex justify-center mx-auto my-2">
      <ul className="flex items-center justify-center h-9 w-72 text-base">
        <li
          role={isFistPage ? undefined : "button"}
          className={cn(
            "flex items-center justify-center h-full px-3 leading-tight rounded-l-lg border",
            isFistPage
              ? "border-gray-300"
              : "cursor-pointer text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700",
          )}
          onClick={() => isFistPage || onSelectPage(current - 1)}
        >
          <PaginationLeft className="w-2.5 h-2.5" />
        </li>
        {Array.from({ length: end - start + 1 }).map((_, i) => {
          const page = start + i;
          const isCurrent = page === current;
          return (
            <li
              key={i}
              role={isCurrent ? undefined : "button"}
              className={cn(
                "flex items-center justify-center h-full px-3 leading-tight",
                isCurrent
                  ? "bg-slate-200 text-gray-500 border border-gray-300 "
                  : "cursor-pointer text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700",
              )}
              onClick={() => isCurrent || onSelectPage(page)}
            >
              {page + 1}
            </li>
          );
        })}
        <li
          role={isLastPage ? undefined : "button"}
          className={cn(
            "flex items-center justify-center h-full px-3 leading-tight rounded-r-lg  border ",
            isLastPage
              ? "border-gray-300 "
              : "cursor-pointer text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700",
          )}
          onClick={() => isLastPage || onSelectPage(current + 1)}
        >
          <PaginationRight className="w-2.5 h-2.5" />
        </li>
      </ul>
    </nav>
  );
}
