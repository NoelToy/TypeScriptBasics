var number=1;
let count =2;    


function doAnything(){
    for(var i=0;i<5;i++)
    {
        console.log(i);
    }
    console.log('Finally: '+i); //Value of i is 5 because the scope is nearest function. Scope to nearest function.
}

function doSomething(){
    for(let i=0;i<5;i++)
    {
        console.log(i);
    }
    //console.log('Finally: '+i); Gives an error because the scope of i is limited to for loop. Scope to nearest block.
}

doAnything();
doSomething();