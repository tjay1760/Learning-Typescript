type Food ={
    name: string
    price: number
}
const menu = [
    { name: "Margherita Pizza", price: 8.99 },
    { name: "Cheeseburger", price: 10.49 },
    { name: "Caesar Salad", price: 7.25 },
    { name: "Spaghetti Bolognese", price: 11.50 },
    { name: "Grilled Chicken Sandwich", price: 9.75 },
    { name: "Fish and Chips", price: 12.00 },
    { name: "Veggie Wrap", price: 8.50 },
    { name: "Steak Frites", price: 15.99 },
    { name: "Chicken Tikka Masala", price: 13.25 },
    { name: "Chocolate Lava Cake", price: 6.75 }
];

let cashInRegister = 1000;
let CurrentID = 1;
const orderQueue = [];

const addNewItem = (foodObj:Food)=> {
    menu.push(foodObj)
}
addNewItem({name:"water",price:4.50})
addNewItem({name:"uzito",price:45.50})

// console.log(menu)

const placeOrder =(name:string)=>{
const orderedItem = menu.find((item)=>item.name === name)
if(!orderedItem){
console.log("not found")
}
cashInRegister+= orderedItem.price
const newOrder = {id:CurrentID,order:orderedItem, status:"ordered"}
orderQueue.push(newOrder)
CurrentID++
return newOrder
}
placeOrder("water")
placeOrder("Veggie Wrap")
placeOrder("uzito")
const completeOrder =(orderId:number)=>{
const order = orderQueue.find((order)=>
    order.id === orderId
)
console.log(order)
order.status = "complete"
}
completeOrder(1)
console.log(orderQueue)