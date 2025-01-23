import React from 'react';
import LandingPage from './Sections/LandingSection';
import StyleCards from './Sections/StyleCards';
import Reviews from './Sections/RSection';
import Header from '../Components/Structure/Header';
import Footer from '../Components/Structure/Footer'
import TopProd from '../Components/ProductStructure/TopProd';
import { BShirt, Jeans, Chemise, OrShirt,
         Gchemise, Orange, Short, BlackJeans
 } from '../assets/Images';

function Home() {


    return (
        <>
            <Header />

            <LandingPage />

            <TopProd title="Top Selling" pictures={[BShirt, Jeans, Chemise, OrShirt]}/>
            <TopProd title="New Arrivals" pictures={[Gchemise, Orange, Short, BlackJeans]}/>

            <StyleCards />
           
            <Reviews />

            <Footer />
        
        </>
    );
}

export default Home;
