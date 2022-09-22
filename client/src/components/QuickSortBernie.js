// import "./QuickSortBernie.css";
import axios from "axios";
// import { useState, useEffect } from "react";

// const [products, setProducts] = useState([]);

// useEffect(() => {
//   axios
//     .get(`http://localhost:5001/products`)
//     .then((response) => {
//       setProducts(response.data);
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);

// const returnedItem = products.map((result) => {
//   return result.name;
// });

// const arr = returnedItem;

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
const array = []; //add array

console.log(QuickSortBernie(array));

// const QuickSortBernie = () => {
//   return (
//     <div>

//     </div>
//   )
// }

export default QuickSortBernie;
