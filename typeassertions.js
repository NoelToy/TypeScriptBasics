let message;
message = 'Anything';
//One way of doing type assertion
let flag = message.endsWith('g');
//Another way of doing type assertion
let alternativeWay = message.endsWith('c');
console.log(flag);
console.log(alternativeWay);
