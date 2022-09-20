// import React from 'react'

function QuickSortBernie(array) {
  if (array.length <= 1) {
    return array;
  } 
  
  const pivot = array[array.length - 1];
  const leftArray = [];
  const rightArray = [];
  for (const el of array.slice(0, array.length - 1)) {
    el < pivot ? leftArray.push(el) : rightArray.push(el);
  }

  return [...QuickSortBernie(leftArray), pivot, ...QuickSortBernie(rightArray)]; 
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

export default QuickSortBernie
