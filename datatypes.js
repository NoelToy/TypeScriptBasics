var count = 5; //type of the variable is number
var str; //type of the variable is any
var str1; //setting the datatype for the variable
/*Type of datatypes available in type script

let variable:number
            : boolean
            : string
            :any
            :number[] //numeric array
            :any[] //any array
*/
str = 1;
str = "Beena";
str = true;
//str1=5; Throws an error because the datatype of the variable is string
//Enumeration
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
; //setting the index values which is automatic also can be specified explicitly like this.
var background = Color.Blue;
