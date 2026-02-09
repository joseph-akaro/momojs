import { AxiosInstance } from "axios"
import { RequestToPay } from "../types/payloads"


// TODO: Request To Pay
export async function requestToPay(
  payload: RequestToPay,
  client: AxiosInstance
) {
  if (!payload.amount || !payload.phoneNumber) {
    throw new Error("amount and phoneNumber are required")
  }

  return client.post(
    "/collection/v1_0/requesttopay",
    payload,
    {
      headers: {
        "X-Reference-Id": payload.referenceId
      }
    }
  )
}
