import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ResultData } from './interface'

const config = {
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 1000,
}

class RequestHttp {
  public instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }

  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.instance.get(url, { params, ..._object })
	}
	post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.instance.post(url, params, _object)
	}
	put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.instance.put(url, params, _object)
	}
	delete<T>(url: string, params?: unknown, _object = {}): Promise<ResultData<T>> {
		return this.instance.delete(url, { params, ..._object })
	}
}

export default new RequestHttp(config)
