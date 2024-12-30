import { BgStar, Versace, Zara, Gucci, Prada, Calvin } from '../../assets/Images';


function LandingPage(){

    return(
        <>
            {/*----------------------------- Landing Page  ---------------------------*/}
            <div className="w-screen h-[120vh] lg:h-[calc(100vh-100px)] bg-[#F2F0F1] bg-no-repeat bg-[url('./assets/Background/man.png')] lg:bg-[length:90%_auto] bg-right bg-[115%_100%] lg:bg-right-top lg:px-[150px] lg:py-[50px] block">
                <div className="ml-[-30px] flex flex-col lg:flex-row items-center justify-between">
                        
                    {/*----------------------------- Text Section  ---------------------------*/}
                    <div className="text-center lg:text-left lg:w-1/2 mx-14 py-[120px]">
                        <h1 className="text-[32px] sm:mx-auto lg:text-[64px] font-bold leading-[68px] lg:leading-[64px] select-none">
                            FIND CLOTHES THAT MATCHES YOUR STYLE
                        </h1>

                        <img src={BgStar} alt="" className='ml-[1500px] mt-[-150px] mb-[70px]'/>
                        <img src={BgStar} alt="" className='w-[56px] h-[56px] ml-[900px] mt-[150px] mb-[-40px]'/>

                        <p className="mt-[-140px] text-[14px] lg:text-[16px] w-full lg:w-[545px] leading-[20px] lg:leading-[22px] opacity-60 select-none">
                            Browse through our diverse range of meticulously crafted garments, designed to bring out your 
                            individuality and cater to your sense of style.
                        </p>
                        <button className="min-w-[210px] h-[52px] bg-black my-10 text-white rounded-full">
                            Shop Now
                        </button>

                        {/*----------------------------- Statistics Section  ---------------------------*/}
                        <div className="py-[50px] flex space-x-4 lg:space-x-8 mt-4 lg:mt-0 justify-center lg:justify-start select-none">
                            <div className='border-r-2 px-4'>200+ <br />International Brands</div>
                            <div className="border-r-2 px-4">2,000+ <br />High-Quality Products</div>
                            <div>30,000+ <br />Happy Customers</div>
                        </div>
                    </div>
                </div>

                {/*----------------------------- Footer Logos ---------------------------*/}
                <div className="lg:w-screen h-[120px] mx-[-150px] my-[450px] lg:my-auto bg-black flex lg:flex flex-wrap lg:flex-nowrap">
                    <div className='mx-[170px] flex justify-start space-x-[200px] items-center flex-wrap lg:flex-nowrap'>
                        <img src={Versace} alt="Versace logo" className="w-[167px] h-[33px] mb-4 lg:mb-0" />
                        <img src={Zara} alt="Zara logo" className="w-[91px] h-[38px] mb-4 lg:mb-0" />
                        <img src={Gucci} alt="Gucci logo" className="w-[156px] h-[36px] mb-4 lg:mb-0" />
                        <img src={Prada} alt="Prada logo" className="w-[156px] h-[36px] mb-4 lg:mb-0" />
                        <img src={Calvin} alt="Calvin logo" className="w-[156px] h-[36px]" />
                    </div>
                </div>

            </div>
        </>
    );
}
export default LandingPage;