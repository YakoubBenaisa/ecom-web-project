import Header from "../Components/Structure/Header";
import {Browny} from "../assets/Images";
import ProductSection from "./Sections/ProductSection";

function Product() {
    

    return (
        <>
            <Header />

            <ProductSection type="T-Shirt" pictures = {[Browny, Browny, Browny, Browny]} 
            title="One Life Graphic T-shirt" rank= {4} currentPrice={260} 
            wasPrice={300} paragraph="This graphic t-shirt which is perfect for any occasion.
            Crafted from a soft and breathable fabric, it offers superior comfort and style." />
            
        </>
    );
}

export default Product;