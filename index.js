
import KeyGen from "./utils/keyGen.js"

const UserID = "1f269b09-15b3-4f3d-9a2f-a09e578896dd"
const PrimaryKey= "4e898b5ebc604156a39487cb3ad4a8a0"

const Keygenerator = new KeyGen(PrimaryKey, UserID)

const user = Keygenerator.createUser()


// This is just a test publis function
export function transfer(){
    return `${user}`
}

// Display outputs

const send = transfer()

console.log(send)
