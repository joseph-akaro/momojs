
// Create API User and API Key
export default class KeyGen {
    constructor(subcriptionKey, UserID){
        this.subcriptionKey = subcriptionKey,
        this.UserID = UserID
    }

     async createUser(){
        const Header = {
                "content-type" : "text/json",
                "X-Reference-Id" : this.UserID,
                "Ocp-Apim-Subscription-Key": this.subcriptionKey
        }

        try {
            const response = await fetch("https://momodeveloper.mtn.com/provisioning/v1_0/apiuser",
                {
                    method: "POST",
                    headers: Header
                }
            )

            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
}