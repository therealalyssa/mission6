import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuickSortAlyssa from './components/QuickSortAlyssa';
import QuickSortBernie from './components/QuickSortBernie';
import QuickSortSonja from './components/QuickSortSonja';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/Quick-Sort-Alyssa" element={QuickSortAlyssa}></Route>
      <Route path="/Quick-Sort-Alyssa" element={QuickSortBernie}></Route>
      <Route path="/Quick-Sort-Alyssa" element={QuickSortSonja}></Route>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
