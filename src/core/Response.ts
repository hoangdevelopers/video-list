export interface IResponse<T> {
  code: number;
  data: T;
  totalData: number;
  totalPagination: number;
}
export interface IPaging {
  sort: string;
  skipCount: number;
  limit: number;
}
