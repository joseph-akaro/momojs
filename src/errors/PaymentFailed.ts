// TODO: Momo Custom ERROR
export class MomoError extends Error {
    public code // Public type since its used in any place it's called.
    public details // Public details type since it's used publically.

    constructor(message: string, code: number | string, details: string) {
        super(message)
        this.name = "Payment Faild, try again!"
        this.code = code
        this.details = details
    }
}