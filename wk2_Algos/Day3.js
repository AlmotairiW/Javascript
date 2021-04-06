// Fib Recursive

function rFib(idx){
    
    if(idx === 0)
        return 0;
    if (idx === 1)
        return 1;
    //formula: fn = fn-1 + fn - 2;//n = idx
    return rFib(idx - 1) + rFib(idx - 2);
}
console.log(rFib(8));


/*
  Given an array, reverse it's items in place
  return the array after reversing it
  Do it in place without using any built in methods
*/
function reverse(arr)
{
    var temp;
    for( let i = 0; i < arr.length / 2; i++)
    {
        temp = arr[i];
        arr[i] = arr[arr.length - i - 1]
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}
// console.log(reverse([3,5]));

/* ********************************************************** */

/*
  Recreate the built in .slice method
  Given an array, a start index, and an end index,
  return a NEW array that has only the elements from
  the start index (inclusive) to the end index (exclusive)
  What should you do if the provided end index is out of bounds?
*/

function slice(arr, start, end)
{
    if(end > arr.length)
    return "out of bounds";

    var newArr = [];
    for( let i = start; i < end; i++)
    {
        newArr.push(arr[i]);
    }
    return newArr;
}
//console.log(slice([0,1,2,3,4,5,6], 0, 6));
