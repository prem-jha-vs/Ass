const shoppingCart = {
    items: [],

    // Add item to the cart
    addItem(name, price, quantity = 1) {
        const existingItem = this.items.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            const newItem = {
                name,
                price,
                quantity,
            };
            this.items.push(newItem);
        }
    },

    // Remove item from the cart
    removeItem(name, quantity = 1) {
        const existingItem = this.items.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity = Math.max(0, existingItem.quantity - quantity);
            
            if (existingItem.quantity === 0) {
                const index = this.items.indexOf(existingItem);
                this.items.splice(index, 1);
            }
        } else {
            console.log(`${name} not found in the cart.`);
        }
    },

    // Calculate total cost of items in the cart
    calculateTotal() {
        let totalCost = 0;
        for (const item of this.items) {
            totalCost += item.price * item.quantity;
        }
        return totalCost;
    },
};

// Example Usage:
shoppingCart.addItem("Laptop1",1200.49);
shoppingCart.addItem("Mobile",500.49);
shoppingCart.addItem("Laptop1");
shoppingCart.addItem("tablet",800.49);
console.log(shoppingCart.items);
shoppingCart.removeItem("Laptop1");
console.log(shoppingCart.items);
shoppingCart.removeItem("tablet");
console.log(shoppingCart.items);
