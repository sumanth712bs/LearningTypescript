class Product {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    
    describe(): number {

        return 5;
    }
}


const laptop = new Product("laptop");

console.log(laptop);
 