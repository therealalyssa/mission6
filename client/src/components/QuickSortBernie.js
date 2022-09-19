// import React from 'react'

// a recursive function
function QuickSortBernie(array) {
  if (array.length === 1) {
    return array;
  } 
  
  const pivot = array[array.length - 1];
  const leftArray = [];
  const rightArray = [];
  for (const el of array.slice(0, array.length - 1)) {
    el < pivot ? leftArray.push(el) : rightArray.push(el);
  }

  if (leftArray.length > 0 && rightArray.length > 0) {
    return [...QuickSortBernie(leftArray), pivot, ...QuickSortBernie(rightArray)]; 
  } else if (leftArray.length > 0) {
    return [...QuickSortBernie(leftArray), pivot];
  } else {
    return [...QuickSortBernie(rightArray, pivot)];
  } //could remove these conditions if edge case, array.length is equal or less than 1
}

//test array:
const array = [] //add array

console.log(QuickSortBernie(array));

// const QuickSortBernie = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default QuickSortBernie
