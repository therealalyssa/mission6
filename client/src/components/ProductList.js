
import axios from "axios";
import { useState, useEffect } from "react";

const ProductList = () => {

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
  
  return (
    <div>
      {products.map((result) => {
        return (
          <div key={result._id}>
          <div>
            <h1>{result.name}</h1>
          </div>

          <div>
            <p>{result.description}</p>
          </div>
          </div>
        )
        })}
    </div>
    
  )
}

export default ProductList