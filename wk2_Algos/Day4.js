/*
  Given an array and an index,
  remove the item at that index.
  return the removed item
  No built-in array methods except pop().
*/

// const arr2 = ["a", "b", "c"]
// const removeIdx2 = 3

// const expected2 = null
// const arr2Expected = ["a", "b", "c"]

// const removeIdx3 = -3
// const expected3 = null
// const arr3Expected = ["a", "b", "c"]

function removeAt(arr, idx) {
    
    if(idx > arr.length - 1 || idx < 0)
        return null;
    
    var popped = arr[idx];
    for( let i = idx; i < arr.length - 1; i ++)
    {
        arr[i] = arr[i+1];
    }
    arr.pop();
    return popped;
}
// const arr3 = ["a", "b", "c"]
//  console.log(removeAt(arr3, 2));
/* ****************************************** */

/*
  Given an array of integers, move the minimum value to the front
  return the array after done
  No built in methods
*/

// const nums1 = [1, 5, 2, 9];
// const expected1 = [1, 5, 2, 9];
// const nums2 = [3, 5, 10, 2, 6];
// expected return = [2, 3, 5, 10, 6]

function minToFront(nums) {
    var idx = 0;
    var min = nums[0];
    for(let i = 1; i < nums.length; i++)
    {
        if( nums[i] < min)
        {
            min = nums[i];
            idx = i;
        }
    }
    for ( let i = idx; i > 0; i --)
    {
        nums[i] = nums[i - 1];
    }
    nums[0] = min;
    return nums;
}

// const nums1 = [1, 5, 2, 9];
// const expected1 = [1, 5, 2, 9];
// const nums2 = [3, 5, 10, 2, 6];
// expectedreturn = [2, 3, 5, 10, 6]
// console.log( minToFront(nums2));