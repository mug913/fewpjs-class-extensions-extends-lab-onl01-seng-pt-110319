class Polygon{
    constructor(sides){
        this.sides = sides
    }
    get countSides() {
        return this.sides.length;
    }
    
    get perimeter() {
        let sum =0;
        for (let side of this.sides){
            sum = sum + side;
        }
        return sum;
    }
}

class Triangle extends Polygon{
    get isValid(){
        if (this.countSides !== 3) return false;
        let s1 = this.sides[0]
        let s2 = this.sides[1]
        let s3 = this.sides[2]
        return ((s1+s2>s3)&&(s3+s2>s1)&&(s1+s3>s2))
    }
}

class Square extends Polygon{
    get isValid(){
        if (this.countSides !== 4) return false;
        for(let side of this.sides){
            if (side !== this.sides[0]) return false;
        }
        return true
    }

    get area(){
        return this.sides[0] ** 2
    }
}