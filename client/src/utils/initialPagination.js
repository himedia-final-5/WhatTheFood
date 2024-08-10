/** @returns {Pagination}*/
export default function initialPagination() {
  return {
    page: 0,
    size: 0,
    totalElements: 0,
    totalPages: 0,
    first: false,
    last: false,
  };
}
