//Almotairi, Waleed
//1. Given an array, write a function that changes all positive numbers in the array to the string "big"
function makeItBig(arr)
{
    for ( var i =0; i < arr.length; i++)
    {
        if(arr[i] > 0)
        arr[i] = "big";
    }
    return arr;
}
// var arr = [-1,3,5,-5];
// console.log(makeItBig(arr));

//2. Create a function that takes in an array of numbers.  
//The function should print the lowest value in the array, and return the highest value in the array.
function prtLoRetHi(arr)
{
    var lo = arr[0];
    var hi = arr[0];
    for( var i =0; i < arr.length; i++)
    {
        if(arr[i] > hi)
        hi = arr[i];
        if(arr[i] < lo)
        lo = arr[i];
    }
    console.log("lowest value in the array: ", lo);
    return hi;
}
// var arr = [-1,3,5,-5];
// console.log(prtLoRetHi(arr));

//3.  Build a function that takes in an array of numbers.  
//The function should print the second-to-last value in the array, and return the first odd value in the array.
function secToLastRetOdd(arr)
{
    console.log("second-to-last value: ", arr[arr.length - 2]);
    for(var i = 0; i < arr.length; i++ )
    {
        if(arr[i] < 0)
        return arr[i];
    }
}
// var arr = [6,-1,3,5,-5];
// console.log(secToLastRetOdd(arr));

//4.  Given an array (similar to saying 'takes in an array'),
// create a function that returns a new array where each value in the original array has been doubled.
function double(arr)
{
    var doubled = [];
    for(var i = 0; i < arr.length; i++)
    {
        doubled.push(arr[i] + arr[i]);
    }
    return doubled;
}
// var arr =[1,2,3];
// console.log(double(arr));

//5. Given an array of numbers, 
//create a function to replace the last value with the number of positive values found in the array.
function posCount(arr)
{
    var count = 0;
    for(var i = 0; i < arr.length; i++ )
    {
        if(arr[i] > 0)
        count++;
    }
    arr[arr.length - 1] = count;
    return arr;
}
// var arr =[-1,1,1,1];
// console.log(posCount(arr));

//6. Create a function that accepts an array.  Every time that array has three odd values in a row, 
//print "That's odd!". Every time the array has three evens in a row, print "Even more so!".
function evenOddCount(arr)
{
    var even = 0;
    var odd = 0;
    for(var i = 0;i < arr.length; i++ )
    {
        if(arr[i] % 2 == 0)
        {
            even++;
            odd = 0;
            if(even == 3)
            console.log("Even more so!");
        }
        else
        {
            odd++;
            even = 0;
            if(odd == 3)
            console.log("That's odd!");
        }
    }
}
// var testArr = [1,1,2,2,2,1,1,1,2,2,2,1,1,1]
// evenOddCount(testArr);

//7. Given an array of numbers arr, add 1 to every other element,
// specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  
//Afterward, console.log each array value and return arr.

function addOne (arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        if(i % 2 == 1)
        arr[i] = arr[i] + 1;// add one to odd i
        
        console.log(arr[i]);//prints all elements one by one 
    }
    return arr;
    
}
//  var testArr = [1,1,1,1,1,1]
//  console.log((addOne(testArr)));

//8.  You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.
//  Working within that same array, replace each string with a number - the length of the string 
//at the previous array index - and return the array. 


function previousLengths(arr){
    for (var i = arr.length - 1; i > 0; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}
//   var arr =["hello", "dojo", "awesome","Waleed", "NotSurIfCorrect"];
//  console.log(previousLengths(arr));

//9. Build a function that accepts an array. Return a new array 
//with all the values of the original, but add 7 to each. Do not alter the original array
function addSeven(arr)
{
    var newArr = [];
    for ( var i = 0; i < arr.length; i++)
    {
        newArr.push(arr[i] + 7);
    }

    return newArr;
}
// var arr = [1,2,3];
// console.log(addSeven(arr));

//10. Given an array, write a function that reverses its values, in-place

function reverseArray(arr)
{
    for(var i = 0; i < arr.length/2; i++ )
    {

        var temp = arr[arr.length-1-i];
        arr[arr.length-1-i] = arr[i];
        arr[i] = temp;
    }
  
    return arr;
}
// var arr = [3,1,6,4,2];
// console.log(reverseArray(arr));

//11.  Given an array, create and return a new one containing 
//all the values of the original array, but make them all negative
function makeNeg(arr)
{
    var newArr = [];
    for(var i =0; i < arr.length; i++)
    {
        if(arr[i] > 0)
        newArr.push(arr[i] * - 1);
        else
        newArr.push(arr[i]);
    }
    return newArr;
}
// var arr = [1,-3,5];
// console.log(makeNeg(arr));

//12. Create a function that accepts an array, and prints "yummy" 
//each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
function hungry(arr)
{
    var notHungry = false;
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] === "food")
        {
            console.log("yummy");
            notHungry = true;
        }
        
    }
    if(!notHungry)
    console.log("I'm hungry");
}
//  var arr = ["food","food",1,2];
//  var arr1 = [1,2];
//  hungry(arr);
//  hungry(arr1);

//13. Given an array, swap the first and last values, third and third-to-last values, 
function swap(arr){
    for (var i = 0; i < arr.length/2; i+=2){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
// var arr = [1,2,3,4,5,6];
// console.log(swap(arr));

//14. Given an array arr and a number num, multiply all values in the array arr by the number num, 
//and return the changed array arr.
function mult(arr, num)
{
    for(var i = 0; i < arr.length; i++)
    {
        arr[i] = arr[i] * num;
    }
    return arr;
}
//  var arr = [1,2,3];
// console.log(mult(arr, 3));