import axios, { AxiosInstance } from "../../node_modules/axios/index"

// TODO: Axios Client
export function axiosClient(
  baseURL: string,
  timeout = 10000
): AxiosInstance {
  return axios.create({
    baseURL,
    timeout,
    headers: {
      "Content-Type": "application/json"
    }
  })
}