export class MomoProvider{
    constructor(environment, primarySubscriptionKey, secondarySubscriptionKey, apiUser, apiKey){
        this.environment = environment,
        this.primarySubscriptionKey = primarySubscriptionKey,
        this.secondarySubscriptionKey = secondarySubscriptionKey,
        this.apiUser = apiUser,
        this.apiKey = apiKey
    }   
}