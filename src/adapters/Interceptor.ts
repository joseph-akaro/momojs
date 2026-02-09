import { AxiosInstance } from "../../node_modules/axios/index"
import { MomoConfig } from "../types/Config"
import { getAccessToken } from "../core/auth"

// TODO: Interceptor
export function Interceptor(
  client: AxiosInstance,
  config: MomoConfig
) {
  let tokenCache: string | null = null

  client.interceptors.request.use(async (request) => {
    if (!tokenCache) {
      tokenCache = await getAccessToken(config, client)
    }

    request.headers = request.headers || {}
    request.headers.Authorization = `Bearer ${tokenCache}`
    request.headers["Ocp-Apim-Subscription-Key"] =
      config.subscriptionKey

    return request
  })
}
