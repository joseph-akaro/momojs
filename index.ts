import { momoClient } from "./src/momoClient"

export default function momo(config: Parameters<typeof momoClient>[0]) {
  return momoClient(config)
}

export * from "./src/types/Config"
export * from "./src/types/payloads"
