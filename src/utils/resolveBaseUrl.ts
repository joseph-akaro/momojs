import { Environment } from "../types/Config"

// TODO: BaseURL Resolver method
export function resolveBaseUrl(env: Environment): string {
  return env === "sandbox"
    ? "https://sandbox.momodeveloper.mtn.com"
    : "https://momodeveloper.mtn.com"
}