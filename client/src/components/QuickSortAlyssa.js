import "./QuickSortAlyssa.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Topbar from "./Header/Topbar";
import Navbar from "./Header/Navbar";
import { Box } from "@mui/material";

const QuickSortAlyssa = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/suggestions`)
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const returnedItem = products.map((result) => {
    return result.name;
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
      <Topbar></Topbar>
      <Navbar></Navbar>
      <Box className="layout">
        <Box>
          <br></br>
        </Box>
        <Box>
          <Box>Sorting the names of computers:</Box>
        </Box>
        <br></br>
        <Box className="title" sx={{ height: "100px" }}>
          <Box>Computer products not sorted:</Box>
          <Box className="object">{arr}</Box>
        </Box>

        <Box className="title" sx={{ height: "100px" }}>
          <Box>Using Quick Sort to:</Box>
          <Box className="object">
            <span>{quickSort(arr)}</span>
          </Box>
        </Box>
      </Box>
      <Footer></Footer>
    </>
  );
};

export default QuickSortAlyssa;
