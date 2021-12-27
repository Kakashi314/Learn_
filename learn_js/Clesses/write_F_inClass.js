class Trangal {
    constructor(hight, width, color) {
        this.hight = hight;
        this.width = width;
        this.color = color;
    }
    area() {
        return `IN ${this.color} Trangal area ${this.hight*this.width}`;

    }
    Description() {
        return `I am trangal.width:${this.width} and hight:${this.hight}`
    }
}
let frist = new Trangal(10, 20, 'blue')
let second = new Trangal(5, 5, 'red')
console.log(second.Description());