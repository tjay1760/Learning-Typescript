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

const addNewItem = (name,price)=> {
    menu.push({"name":name,"price":price})
}
addNewItem("water",4.50)
addNewItem("uzito",45.50)

// console.log(menu)

const placeOrder =(name)=>{
const orderedItem = menu.find((item)=>item.name === name)
cashInRegister+= orderedItem.price
const newOrder = {id:CurrentID,order:orderedItem, status:"ordered"}
orderQueue.push(newOrder)
CurrentID++
return newOrder
}
placeOrder("water")
placeOrder("Veggie Wrap")
placeOrder("uzito")
const completeOrder =()=>{

}
console.log(orderQueue)