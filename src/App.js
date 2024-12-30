import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Home />} />
          <Route path="/category" element={<Home />} />
        
        </Routes>
    </BrowserRouter>
   
  );
}

export default App;
