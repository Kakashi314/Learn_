class squre {
    constructor(width) {
        this.width = width;
        this.higth = width;

    }
    static equals(a, b) {
        return a.width == b.width;
    }
    static isValidDimensions(width, heigth) {
        return width === heigth;
    }


}
let squre1 = new squre(25);
let squre2 = new squre(16);
// console.log(squre.equals(squre1, squre2));
console.log(squre.isValidDimensions(24, 25));