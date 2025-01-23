import React, { useState, useRef, useEffect } from 'react';
import Header from "../Components/Structure/Header";
import Reviews from './Sections/ReviewsProdSection';
import Footer from '../Components/Structure/Footer';
import { Browny } from "../assets/Images";
import ProductSection from "./Sections/ProductSection";


function Product() {

    const [activeButton, setActiveButton] = useState('reviews');
    const containerRef = useRef(null);
    const [underlineWidth, setUnderlineWidth] = useState(0);
    const [underlineLeft, setUnderlineLeft] = useState(0);

    useEffect(() => {
    // Get the active button element
    const activeEl = containerRef.current?.querySelector(`button[data-id="${activeButton}"]`);
    if (activeEl) {
        const containerLeft = containerRef.current.getBoundingClientRect().left;
        const buttonRect = activeEl.getBoundingClientRect();
        
        setUnderlineWidth(buttonRect.width);
        setUnderlineLeft(buttonRect.left - containerLeft);
    }
    }, [activeButton]);

    const handleClick = (button) => {
        setActiveButton(button);
    };

    return (
    <>
        <Header />
        <ProductSection
            type="T-Shirt"
            pictures={[Browny, Browny, Browny, Browny]}
            title="One Life Graphic T-shirt"
            rank={4}
            currentPrice={260}
            wasPrice={300}
            paragraph="This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."
        />

        <div ref={containerRef} className="mx-[140px] mt-10 flex justify-around relative">
        <div 
            className="absolute bottom-0 h-0.5 bg-black transition-all duration-300 ease-in-out"
            style={{
            width: `${underlineWidth}px`,
            left: `${underlineLeft}px`
            }}
        />
        
        <button
            data-id="details"
            onClick={() => handleClick('details')}
            className="p-4 w-[350px]"
            style={{ opacity: activeButton === 'details' ? 1 : 0.6 }}
        >
            Product Details
        </button>
        
        <button
            data-id="reviews"
            onClick={() => handleClick('reviews')}
            className="p-4 w-[350px]"
            style={{ opacity: activeButton === 'reviews' ? 1 : 0.6 }}
        >
            Rating & Reviews
        </button>
        
        <button
            data-id="faqs"
            onClick={() => handleClick('faqs')}
            className="p-4 w-[350px]"
            style={{ opacity: activeButton === 'faqs' ? 1 : 0.6 }}
        >
            FAQs
        </button>
        </div>

        {activeButton==='reviews'&&<Reviews />}
        {activeButton==='faqs'&&<h2 className='my-10 font-bold flex justify-center'> Will Be Soon!</h2>}
        {activeButton==='details'&&<h2 className='my-10 font-bold flex justify-center'> Will Be Soon!</h2>}

        <Footer />

    </>
    );
}

export default Product;