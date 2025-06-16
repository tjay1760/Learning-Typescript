var menu = [
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
var cashInRegister = 1000;
var CurrentID = 1;
var orderQueue = [];
var addNewItem = function (foodObj) {
    menu.push(foodObj);
};
addNewItem({ name: "water", price: 4.50 });
addNewItem({ name: "uzito", price: 45.50 });
// console.log(menu)
var placeOrder = function (name) {
    var orderedItem = menu.find(function (item) { return item.name === name; });
    if (!orderedItem) {
        console.log("not found");
    }
    cashInRegister += orderedItem.price;
    var newOrder = { id: CurrentID, order: orderedItem, status: "ordered" };
    orderQueue.push(newOrder);
    CurrentID++;
    return newOrder;
};
placeOrder("water");
placeOrder("Veggie Wrap");
placeOrder("uzito");
var completeOrder = function (orderId) {
    var order = orderQueue.find(function (order) {
        return order.id === orderId;
    });
    console.log(order);
    order.status = "complete";
};
completeOrder(1);
console.log(orderQueue);
