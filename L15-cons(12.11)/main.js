function Burger(size, topping = []) {
    this.size = size;
    this.toppings = [...topping];
};

Burger.size = {
    small: {
        price: 50,
        nrj: 20
    },
    medium: {
        price: 75,
        nrj: 30
    },
    big: {
        price: 100,
        nrj: 40
    },
};

Burger.toppingList = {
    cheese: {
        price: 10,
        nrj: 10
    },
    fries: {
        price: 15,
        nrj: 25
    },
    spice: {
        price: 15,
        nrj: 1
    },
    sal: {
        price: 10,
        nrj: 5
    },
    mayonesse: {
        price: 20,
        nrj: 25
    },
};

Burger.prototype.addTopping = function(...toppings) {
    this.toppings.push(...toppings);
};

Burger.prototype.calPrice = function() {
    return this.size.price + this.toppings.reduce((acc, e) => acc + e.price, 0);
};

Burger.prototype.calCal = function() {
    return this.size.nrj + this.toppings.reduce((acc, e) => acc + e.nrj, 0);
};

const cheeseBurger = new Burger(Burger.size.medium);

cheeseBurger.addTopping(Burger.toppingList.cheese);
cheeseBurger.addTopping(Burger.toppingList.fries);
cheeseBurger.addTopping(Burger.toppingList.mayonesse);

console.log(cheeseBurger, cheeseBurger.calPrice());
console.log(cheeseBurger, cheeseBurger.calCal());