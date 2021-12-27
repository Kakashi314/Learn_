class squre {
    constructor(width) {
        this.width = width;
        this.higth = width;

    }
    get area() {
        return `Area ${this.width*this.higth}`
    }
    set area(area) {
        this.width = Math.sqrt(area);
        this.higth = this.width;
    }
}
let squre1 = new squre();
// console.log(squre1.area);
squre1.area = 25;
console.log(squre1.width);