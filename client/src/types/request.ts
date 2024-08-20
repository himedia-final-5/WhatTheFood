/* eslint-disable @typescript-eslint/no-unused-vars */

declare interface Pageable<T = any> {
  page: number;
  size: number;
  sort?: Array<keyof T & string>;
  direction?: "ASC" | "DESC";
}
