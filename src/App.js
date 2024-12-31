import Home from "./Pages/Home";
import Product from "./Pages/Product";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/category" element={<Home />} />
        
        </Routes>
    </BrowserRouter>
   
  );
}

export default App;
