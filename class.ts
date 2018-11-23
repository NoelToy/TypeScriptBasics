class Point{

    //private x:number;
    //private y:number;

    /*Insted of declaring the fields above it can be declared in the constructor itself as below */
    //Question mark makes the parameters optional!!
    constructor(private _x?: number, private _y?:number){
    }
    draw(){
        console.log(this._x,this._y);
    }
    //Setting the property
    set x(value)
    {
        this._x=value;
    }
    //Getting the value with property
    get x()
    {
        return this._x;
    }
}

let point= new Point(50,70);
point.draw();

let p=new Point();

//setting the value of x of p object
p.x=150;

p.draw();
//getting the value of x of p object
let x=p.x;

console.log('The value of x of object p is: '+x);
//p.x=40 will generate an error because x and y are private and can only be accessed within the class Point
 