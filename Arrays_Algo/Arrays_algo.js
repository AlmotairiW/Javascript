//Challenge 1: Print Values and Sum
//Print each array value and the sum so far
var testArr = [6,3,5,1,2,4]
var sum =0;
for(var i = 0; i < testArr.length; i++)
{
    sum+= testArr[i];
    console.log("Num " + testArr[i] + ", Sum: "+ sum);

}

//Challenge 2: Value * Position
//Multiply each value in the array by its array position
for(var i = 0; i < testArr.length; i++)
{
   testArr[i] = testArr[i] * i;

}
console.log(testArr);