import "./QuickSortSonja.css";
import axios from "axios";
import { useState, useEffect } from "react";

const QuickSortSonja = () => {

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
        return (result.name)
    })

    const arr = returnedItem;
 
    // const arr = ["Mac Book Pro, ", "Dell Laptop, ", "HP Laptop, ", "Mac Book Air, ", "Dell XPS 13 Laptop, ", "Lenovo Laptop, "];

    const quickSort = (arr) => {
        if (arr.length <= 1) return arr       // base case

        const pivot = arr[arr.length - 1];    //pivot value
        const left = [];                     // left handside array
        const right = [];                    // right handside array

        for (const element of arr.slice(0, arr.length - 1)) {
            element < pivot ? left.push(element) : right.push(element);
        }

        return [...quickSort(left), pivot, ...quickSort(right)];
    }


    return (
        <>
            <div className="quick-sort-sonja-container">

                <div>
                    <h1>Quick Sort with products from the MongoDB database</h1>
                </div>

                <div className="quick-sort-sonja-list" >
                    <h2>original array:</h2>
                    <p className="quick-sort-sonja-items">{arr}</p>
                </div>

                <div className="quick-sort-sonja-list">
                    <h2>quick sort array:</h2>
                    <p className="quick-sort-sonja-items"><span>{(quickSort(arr))}</span></p>
                </div>

            </div>
        </>
    )
}

export default QuickSortSonja
