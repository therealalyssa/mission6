import "./QuickSortSonja.css";
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
      <div className="quick-sort-sonja-container">
        <div>
          <h1>Quick Sort with products from the MongoDB database</h1>
        </div>

        <div className="quick-sort-sonja-list">
          <h2>Hi:</h2>
          <p className="quick-sort-sonja-items">{arr}</p>
        </div>

        <div className="quick-sort-sonja-list">
          <h2>quick sort array:</h2>
          <p className="quick-sort-sonja-items">
            <span>{quickSort(arr)}</span>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default QuickSortAlyssa;
