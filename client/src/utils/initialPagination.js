/** @returns {Pagination}*/
export default function initialPagination(page = 0) {
  return {
    page,
    size: 0,
    totalElements: 0,
    totalPages: 0,
    first: false,
    last: false,
  };
}
