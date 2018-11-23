class Point {
    //private x:number;
    //private y:number;
    /*Insted of declaring the fields above it can be declared in the constructor itself as below */
    //Question mark makes the parameters optional!!
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log(this.x, this.y);
    }
    //Setting the property
    set X(value) {
        this.x = value;
    }
    //Getting the value with property
    get X() {
        return this.x;
    }
}
let point = new Point(50, 70);
point.draw();
let p = new Point();
//setting the value of x of p object
p.X = 150;
p.draw();
//getting the value of x of p object
let x = p.X;
console.log('The value of x of object p is: ' + x);
//p.x=40 will generate an error because x and y are private and can only be accessed within the class Point
