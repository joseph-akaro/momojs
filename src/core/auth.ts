import { AxiosInstance } from "../../node_modules/axios/index"
import { MomoConfig } from "../types/Config"
import { TokenResponse } from "../types/responses"


// TODO: Token Generator
export async function getAccessToken(
  config: MomoConfig,
  client: AxiosInstance
): Promise<string> {
  const response = await client.post<TokenResponse>(
    "/collection/token/",
    null,
    {
      auth: {
        username: config.userId,
        password: config.apiKey
      },
      headers: {
        "Ocp-Apim-Subscription-Key": config.subscriptionKey
      }
    }
  )

  return response.data.access_token
}