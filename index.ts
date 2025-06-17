type Food ={
    id:number
    name: string
    price: number
}
type OrderType = {
id:number
order: Food
status: "ordered"| "completed"
}
let cashInRegister = 1000;
let CurrentID = 1;
let nextFoodId =1;
const orderQueue:OrderType[] = [];

const menu:Food[] = [
    { id:nextFoodId++,name: "Margherita Pizza", price: 8.99 },
    { id:nextFoodId++,name: "Cheeseburger", price: 10.49 },
    { id:nextFoodId++,name: "Caesar Salad", price: 7.25 },
    { id:nextFoodId++,name: "Spaghetti Bolognese", price: 11.50 },
    { id:nextFoodId++,name: "Grilled Chicken Sandwich", price: 9.75 },
    { id:nextFoodId++,name: "Fish and Chips", price: 12.00 },
    { id:nextFoodId++,name: "Veggie Wrap", price: 8.50 },
    { id:nextFoodId++,name: "Steak Frites", price: 15.99 },
    { id:nextFoodId++,name: "Chicken Tikka Masala", price: 13.25 },
    { id:nextFoodId++,name: "Chocolate Lava Cake", price: 6.75 }
];



const addNewItem = (foodObj:Omit <Food,"id">):Food => {
    const food:Food = {
    id:nextFoodId++,
    ...foodObj
    }

    menu.push(food)
    return food
}
addNewItem({name:"water",price:4.50})
addNewItem({name:"uzito",price:45.50})

// console.log(menu)

const placeOrder =(name:string): OrderType |undefined=>{
const orderedItem = menu.find((item)=>item.name === name)
if(!orderedItem){
console.log("not found")
return
}
cashInRegister+= orderedItem.price
const newOrder:OrderType = {id:CurrentID,order:orderedItem, status:"ordered"}
orderQueue.push(newOrder)
CurrentID++
return newOrder
}
placeOrder("water") 
placeOrder("Veggie Wrap")
placeOrder("uzito")
const completeOrder =(orderId:number) :void|undefined=>{
const order = orderQueue.find((order)=>
    order.id === orderId
)
if(!order){
console.log("order not found")
return
}

order.status = "completed"
}
const getPizzaDetail = (identifier:string|number):Food|undefined =>{

    const foodDetail = menu.find((item)=>item.id===identifier||item.name===identifier)
    if(!foodDetail){
        return
    }
    return foodDetail

}
completeOrder(1)
// getPizzaDetail(3)
getPizzaDetail("water")
console.log(orderQueue)
console.log(menu)