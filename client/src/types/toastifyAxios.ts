import { AxiosRequestConfig } from "axios";
import { UpdateOptions } from "react-toastify";

declare interface ToastifyOptions<T> extends UpdateOptions<T> {
  fallback?: null | T;
}

declare type ToastifyAxios = {
  get<T = any, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>,
    toastifyOptions?: ToastifyOptions<T>,
  ): Promise<T>;
  delete<T = any, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>,
    toastifyOptions?: ToastifyOptions<T>,
  ): Promise<T>;
  post<T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
    toastifyOptions?: ToastifyOptions<T>,
  ): Promise<T>;
  put<T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
    toastifyOptions?: ToastifyOptions<T>,
  ): Promise<T>;
  patch<T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
    toastifyOptions?: ToastifyOptions<T>,
  ): Promise<T>;
  postForm<T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
    toastifyOptions?: ToastifyOptions<T>,
  ): Promise<T>;
  putForm<T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
    toastifyOptions?: ToastifyOptions<T>,
  ): Promise<T>;
  patchForm<T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
    toastifyOptions?: ToastifyOptions<T>,
  ): Promise<T>;
};
