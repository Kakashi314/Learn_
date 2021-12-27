/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon{
    constructor(arra){
        this.perimeter1=0;
        this.arra1=arra.length;
        this.arrmain=arra;
        
    }
    perimeter(){
        for(let i=0;i<this.arra1;i++){
            this.perimeter1=this.perimeter1+this.arrmain[i];
        }
        return this.perimeter1;
    }
}