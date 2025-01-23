import Home from "./Pages/Home";
import Product from "./Pages/Product";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/ecom-web-project/" element={<Home />} />
        <Route path="/ecom-web-project/product" element={<Product />} />
        <Route path="/ecom-web-project/category" element={<Home />} />
        
        </Routes>
    </BrowserRouter>
   
  );
}

export default App;
