/*
  Recreate the pop method without using .pop()
  Remove and return the last item from a given array
  After removing an item from an array, what else changes?
*/

function pop(arr)
{
    var retValue = arr[arr.length - 1];
    delete arr[arr.length - 1];
    arr.length=arr.length-1;
    return retValue;

}


/* ******************************************************************* */

/*
  Given an array and an item to search for,
  return the index where the item is found,
  return -1 to represent not found
  */

  function search(arr, item)
  {
    
    for(var x = 0; x < arr.length; x++)
    {
        if(arr[x] == item)
            return x;
    }
    return -1;
  }

var ar = [1,2,3,4];
var ret = pop(ar);
console.log(ret);
var ret2 = search(ar,2);
console.log(ret2);
