"use strict";
class Product {
    constructor(name) {
        this.name = name;
    }
    describe() {
        return 5;
    }
}
const laptop = new Product("laptop");
console.log(laptop);
