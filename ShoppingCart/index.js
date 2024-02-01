let shoppingCart = {
    items: {},
    
    //add an item to cart
    addItem(itemName, price, quantity) {
        if (this.items[itemName]) {
            this.items[itemName].quantity += quantity;
        } else {
            this.items[itemName] = {
                name:itemName,
                price,
                quantity,
            };
        }
    },

    //remove an item from the cart
    removeItem(itemName) {
        if (this.items[itemName]) {
            delete this.items[itemName];
        }
    },

    //calculate the total cost of items in the cart
    calculateTotal() {
        let total = 0;
        for (let itemName in this.items) {
            total += this.items[itemName].price * this.items[itemName].quantity;
        }
        console.log("Total Cost of Items: "+total);
    },
};
const shoppingCartForClothes = Object.create(shoppingCart);
shoppingCartForClothes.addItem("Tshirt",200,12);
shoppingCartForClothes.addItem("Pants",400,8);
console.log(shoppingCartForClothes.items);

shoppingCart.addItem("Laptopl1", 1200.49, 2);
shoppingCart.addItem("Mobile", 500.37, 5);
shoppingCart.addItem("Laptopl1",1200.49 , 2);
shoppingCart.addItem("Laptopl2",1500.35 , 2);
shoppingCart.addItem("Tablet",850.79 , 7);

// console.log(shoppingCart.items)
// shoppingCart.calculateTotal();

// shoppingCart.removeItem("Laptopl1");
// console.log(shoppingCart.items)
// shoppingCart.calculateTotal();