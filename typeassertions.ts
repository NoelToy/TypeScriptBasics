let message;
message ='Anything';

//One way of doing type assertion
let flag=(<string>message).endsWith('g'); 

//Another way of doing type assertion
let alternativeWay=(message as string).endsWith('c');



console.log(flag);
console.log(alternativeWay);

