export type Environment = "sandbox" | "production"

// TODO: MomoConfig Types
export interface MomoConfig {
  userId: string
  apiKey: string
  subscriptionKey: string
  environment: Environment
  timeout?: number
}