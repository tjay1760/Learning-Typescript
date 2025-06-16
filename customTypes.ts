
type Address ={
        city:string
        street:string
        country:string
}
type Person ={
    name: string
    age: number
    isStudent:boolean
    address:Address
}
const people:Person[] = 
[
    {
 name:"jill",
    age: 42,
    isStudent: false,
    address:{
        city:"nairobi",
        country: "PublicKeyCredential",
        street:"kenya"
    }
    },
    {
name:"jasper",
    age: 9,
    isStudent: true,
    address:{
        city:"nairobi",
        country: "PublicKeyCredential",
        street:"kenya"
    }
    }
    
     
]

let person1:Person ={
    name:"jill",
    age: 42,
    isStudent: false,
    address:{
        city:"nairobi",
        country: "PublicKeyCredential",
        street:"kenya"
    }

}