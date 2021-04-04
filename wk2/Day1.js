/*
  Given an array, remove and
  return the value at the beginning of the array and then shift the remaining items down to fill the empty space.
  Do this without using any built-in array methods except pop().
*/

// const arr1 = [1, 2, 3]
// const expected1 = 1
// // after running function arr1 should now be:
// const arr1Expected = [2, 3]

// const arr2 = ["a", "b", "c", "d"]
// const expected2 = "a"
// // after running function arr2 should now be:
// const arr2Expected = ["b", "c", "d"]

function shift(arr) {

    var newArr = [];
    for (  var i = 1; i < arr.length; i++)
    {
        newArr.push(arr[i]);
    }
    newArr.push(arr[0]);
    arr = newArr;
    console.log(arr);
    return arr.pop();
}
  
  /* ******************************************************************************** */
  
  /*
    Given array and an additional value, insert this value at the beginning of the array by making space for it at the beginning of the array.
    return the new length of the array.
    Do this without using any built-in array methods.
  */
  
  // const arr1 = [1, 2, 3]
  // const newItem1 = 0
  // const expected1 = 4
  // // after function is called, arr1 should be:
  // const arr1Expected = [0, 1, 2, 3]
  
  // const arr2 = []
  // const newItem2 = "a"
  // const expected2 = 1
  // // after function is called, arr2 should be:
  // const arr2Expected = ["a"]
  
  function unshift(arr, newItem) {
    var newArr = [newItem];
    for(var i = 0; i < arr.length; i++)
    {
        newArr.push(arr[i]);
    }

    arr = newArr;
    console.log(arr);
    return arr.length;
}
    var ar = [1,2,3];
    console.log(shift(ar));
    console.log(unshift(ar,0));