
// Almotairi, Waleed
//1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function get1to255()
{
    var arr = [];
    for( var i = 1; i <= 255; i++)
    {
        arr.push(i);
    }
    return arr;
}
//2. Write a function that would get the sum of all the even numbers from 1 to 1000.
function getEven1000()
{
    var sum = 0;
    for(var i = 1; i <= 1000; i++ )
    {
        if(i % 2 == 0)
        {
            sum+= i;
        }
    }
    return sum;
}

//3. Write a function that returns the sum of all the odd numbers from 1 to 5000
function SumOdd5000()
{
    var sum = 0;
    for(var i = 1; i <= 5000; i++ )
    {
        if(i % 2 != 0)
        {
            sum+= i;
        }
    }
    return sum;
}

//4. Write a function that returns the sum of all the values within an array.

function SumArr(arr)
{
    var sum = 0;
    for(var i = 0; i < arr.length; i++)
    {
        sum+= arr[i];
    }
    return sum;
}
//5.  Given an array with multiple values, write a function that returns the maximum number in the array

function findMax(arr)
{
    var max = arr[0];
    for(var i = 1; i < arr.length; i++ )
    {
        if(arr[i] > max)
        max = arr[i];
    }
    return max;
}

//6. Given an array with multiple values, write a function that returns the average of the values in the array.
function findAvg(arr)
{
    var sum = 0;
    for(var i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    return sum / arr.length;
}

// 7. Write a function that would return an array of all the odd numbers between 1 to 50.
function arrOdd()
{
    var arr = [];
    for(var i = 1; i <= 50; i++)
    {
        if(i % 2 != 0)
        arr.push(i);
    }
    return arr;
}

//8.Given value of Y, write a function that takes an array and returns the number of values that are greater than Y
function greaterThanY(arr,Y)
{
    var count = 0;
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] > Y)
        count++;
    }
    return count;
}

//9. Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself.

function Squares(arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

//10. Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0
function negatives(arr)
{
    for( var i = 0; i < arr.length; i++)
    {
        if(arr[i] < 0)
        arr[i] = 0;
    }
    return arr;
}

//11. Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array
function MaxMinAvg(arr)
{
    var retArr = [];
    var sum = 0;
    var max = arr[0];
    var min = [0];
    for(var i = 0; i < arr.length; i++)
    {
        sum+= arr[i];
        if(arr[i] > max)
        max = arr[i];
        if(arr[i] < min)
        min = arr[i];
    }
    retArr.push(max);
    retArr.push(min);
    retArr.push(sum/arr.length);
    return retArr;
} 

//12. Write a function that will swap the first and last values of any given array
function swap(arr)
{
    var first = arr[0];
    var last = arr[arr.length-1];

    arr[0] = last;
    arr[arr.length-1] = first;

    return arr;
}


//13. Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'

function numToString(arr)
{
    for(var i = 0; i < arr.length; i++ )
    {
        if( arr[i] < 0)
        arr[i] = "Dojo";
    }
    return arr;
}


