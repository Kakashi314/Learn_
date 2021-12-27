class Trangal {
    constructor(hight, width, color) {
        this.hight = hight;
        this.width = width;
        this.color = color;
        console.log(`IN ${this.color} Trangal area ${this.hight*this.width}`);
    }
}
let frist = new Trangal(10, 20, 'blue')
let second = new Trangal(5, 5, 'red')
console.log(frist.hight);