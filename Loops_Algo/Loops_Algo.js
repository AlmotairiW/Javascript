//Print out all odd numbers from 1 to 20
console.log("Print out all odd numbers from 1 to 20: ");
for(var i = 1; i <=20; i++ )
{
    if(i % 2 != 0)
    console.log(i);
}

//Sum and Print 1-5
//Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
console.log("Sum numbers from 1 to 5: ");
var sum = 0;
for( var i = 1; i <= 5; i++ )
{
    sum += i;
    console.log("Num: "+ i + ", Sum: " + sum);
}