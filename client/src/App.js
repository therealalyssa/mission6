import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuickSortAlyssa from './components/QuickSortAlyssa';
import QuickSortBernie from './components/QuickSortBernie';
import QuickSortSonja from './components/QuickSortSonja';
import ProductList from './components/ProductList';
import Homepage from "./pages/Homepage";


function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage/>}></Route>
      <Route path="/Quick-Sort-Alyssa" element={<QuickSortAlyssa/>}></Route>
      <Route path="/Quick-Sort-Bernie" element={<QuickSortBernie/>}></Route>
      <Route path="/Quick-Sort-Sonja" element={<QuickSortSonja/>}></Route>
      <Route path="/product-list" element={<ProductList/>}></Route>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
