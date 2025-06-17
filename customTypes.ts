
type User = {
    id: number;
    username: string;
    role: "member" | "contributor" | "admin"; // Using a union type for specific roles
};

/**
 * An array containing 10 user objects.
 * Each object adheres to the 'User' type definition.
 */
const users: User[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brown", role: "member" },
    { id: 5, username: "emma_stone", role: "contributor" },
    { id: 6, username: "david_lee", role: "member" },
    { id: 7, username: "sara_connor", role: "admin" },
    { id: 8, username: "mike_tyson", role: "member" },
    { id: 9, username: "olivia_wilde", role: "contributor" },
    { id: 10, username: "peter_parker", role: "member" }
];
type UpdatedUser = Partial<User>
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
const updateUser =(id:number,updates:UpdatedUser)=>{
    const user = users.find((person)=>person.id===id)
    if(!user){
return
    }
    Object.assign(user,updates)

}
updateUser(4,{role:"contributor"})
console.log(users)