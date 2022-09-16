import "./QuickSortSonja.css";
// import data from './data.json'
// import axios from "axios";
// import {useState} from 'react'

const QuickSortSonja = () => {

    // const [state, setState] = useState([]);

    // const originalArray = async (query) => {
    //     try {
    //         const results = await axios.post("http://localhost:4001/sort", {
    //             query: query,
    //         })
    //         console.log(query)
    //         const data = results.data;
    //         return setState(data.name);

    //     } catch (error) {
    //         console.log(error);
    //     }

    // };
    //    const arr = originalArray();  
    
    const arr = ["Mac Book Pro, ", "Dell Laptop, ", "HP Laptop, ", "Mac Book Air, ", "Dell XPS 13 Laptop, ", "Lenovo Laptop, "];

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
                    <h1>These are the products</h1>
                </div>

                <div className="quick-sort-sonja-list">
                    <h2>original array:</h2>
                    <p>{arr}</p>
                </div>

                <div className="quick-sort-sonja-list">
                <h2>quick sort array:</h2>
                <p>{(quickSort(arr))} </p>
                </div>
            </div>
        </>
    )
}

export default QuickSortSonja
