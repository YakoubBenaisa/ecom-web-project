import React from 'react';
import LandingPage from './Sections/LandingSection';
import Sellings from './Sections/Sells';
import StyleCards from './Sections/StyleCards';
import Reviews from './Sections/ReviewS';
import Header from '../Components/Header';
import Footer from '../Components/Footer'

function Home() {


    return (
        <>
            <Header />

            <LandingPage />

            <Sellings />
            
            <StyleCards />
           
            <Reviews />

            <Footer />
        
        </>
    );
}

export default Home;
