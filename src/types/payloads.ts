
// TODO: Request To Pay Payloads Types
export interface RequestToPay {
  amount: string
  currency: string
  phoneNumber: string
  referenceId: string
  payerMessage?: string
  payeeNote?: string
}