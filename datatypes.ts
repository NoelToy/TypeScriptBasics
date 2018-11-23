let count =5; //type of the variable is number

let str;//type of the variable is any

let str1:string;//setting the datatype for the variable

/*Type of datatypes available in type script

let variable:number
            : boolean 
            : string
            :any
            :number[] //numeric array
            :any[] //any array 
*/

str=1;
str="Beena";
str=true;

//str1=5; Throws an error because the datatype of the variable is string

//Enumeration
enum Color {Red=0,Green=1,Blue=3}; //setting the index values which is automatic also can be specified explicitly like this.
let background = Color.Blue;
 