import "./QuickSortAlyssa.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./Footer";

const QuickSortAlyssa = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/products`)
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const returnedItem = products.map((result) => {
    return result.price;
  });

  const arr = returnedItem;

  const quickSort = (arr) => {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (const element of arr.slice(0, arr.length - 1)) {
      element < pivot ? left.push(element) : right.push(element);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
  };

  return (
    <>
      <div className="layout">
        <div>
          <h1>Sorting the prices:</h1>
        </div>

        <div className="title">
          <h2>Unsorted Computer Prices:</h2>
          <p className="object">{arr}</p>
        </div>

        <div className="title">
          <h2>Using Quick Sort to:</h2>
          <p className="object">
            <span>{quickSort(arr)}</span>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default QuickSortAlyssa;
