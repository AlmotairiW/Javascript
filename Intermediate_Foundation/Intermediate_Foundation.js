// Almotairi, Waleed
//1. Implement function sigma(num) that, given a number, 
//returns the sum of all positive integers up to the given number (inclusive)
function sigma(num)
{
    let sum = 0;
    for( var i = 1 ; i <= num; i ++)
    {
        sum += i; 
    }
    return sum;
}
// console.log(sigma(3));
// console.log(sigma(5));

//2. Write a function factorial(num) that, given a number,
// returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).
function factorial(num)
{
    let fact = 1;
    for( var i = 1 ; i <= num; i ++)
    {
        fact *= i; 
    }
    return fact;
}
// console.log(factorial(3));
// console.log(factorial(5));

//3. Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, 
//each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument,
//an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later
function fibonacci(num)
{
    var fib = [0,1];
    for(let i = 2; i <= num; i++ )
    {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib[num];
}
// console.log(fibonacci(7));

//4.  Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  
//If array is too short, return null.
function secondToLast(arr)
{
    if(arr.length < 2)
        return null;
    else
        return arr[arr.length - 2];
}
// var ar1 = [1,2];
// var ar2 = [1];
// var ar3 = [1,2,3,4,5];
// console.log(secondToLast(ar3));

//5.  Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function NthToLast(arr, num)
{
    if(arr.length < num)
        return null;
    else
        return arr[arr.length - num];
}
// var ar1 = [1,2];
// var ar2 = [1];
// var ar3 = [1,2,3,4,5];
// console.log(NthToLast([5,2,3,6,4,9,7],3));

// 6. Return the second-largest element of an array
function secondLargest(arr)
{
    if(arr.length < 2)
        return null;
    var largest = arr[0];
    var secLargest = arr[1];
    for(let i = 1; i < arr.length; i++)
    {
        if(arr[i] > largest)
        {   
            secLargest = largest;
            largest = arr[i];
        }
        else if( arr[i] > secLargest && arr[i] != largest)
        {
            secLargest = arr[i];
        }
    }
    return secLargest;
}
// console.log(secondLargest([42,1,4,3.14,7]));

// 7. Create a function that changes a given array to list each existing element twice, retaining original order.
function convert(arr)
{
    const newArr = [];
    for(let i = 0; i < arr.length; i++)
    {
        newArr.push(arr[i]);
        newArr.push(arr[i]);
    }
    arr = newArr;
    return arr;
}
// console.log(convert([4, "Ulysses", 42, false]));

