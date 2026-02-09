import { MomoConfig } from "./types/Config"
import { axiosClient } from "./adapters/axiosClient"
import { Interceptor } from "./adapters/Interceptor"
import { resolveBaseUrl } from "./utils/resolveBaseUrl"
import { requestToPay } from "./collection/requestToPay"

// TODO: MomoClient method
export function momoClient(config: MomoConfig) {
  if (!config.userId || !config.apiKey || !config.subscriptionKey) {
    throw new Error("Missing required MTN MoMo credentials")
  }

  const momoClient = axiosClient(
    resolveBaseUrl(config.environment),
    config.timeout
  )

  Interceptor(momoClient, config)

  return {
    requestToPay: (payload: any) =>
      requestToPay(payload, momoClient)
  }
}
