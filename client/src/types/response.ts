/* eslint-disable @typescript-eslint/no-unused-vars */

declare type GeneratedId = {
  id: number;
};

declare type ErrorResponse = {
  status: number;
  message: string;
};

declare type Pagination = {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
};

declare type PageResponse<T> = {
  content: T[];
  pagination: Pagination;
};
