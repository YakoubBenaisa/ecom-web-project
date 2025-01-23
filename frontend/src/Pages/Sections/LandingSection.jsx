import { BgStar, Versace, Zara, Gucci, Prada, Calvin } from '../../assets/Images';

function LandingPage() {
    return (
        <>
            {/*----------------------------- Landing Page  ---------------------------*/}
            <div className="overflow-hidden w-full h-auto lg:h-[calc(95vh)] bg-[#F2F0F1] bg-no-repeat bg-[url('./assets/Background/man.png')] bg-right-bottom lg:bg-[length:90%_auto] md:bg-right bg-[115%_100%] lg:bg-right-top lg:px-[150px] lg:py-[50px]">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/*----------------------------- Text Section  ---------------------------*/}
                    <div className="text-center lg:text-left lg:w-1/2 w-full px-4 lg:px-0 py-8 lg:py-0">
                        <h1 className="mt-[100px] text-[32px] lg:text-[64px] font-bold leading-[40px] lg:leading-[64px] select-none"> 
                            FIND CLOTHES THAT MATCHES YOUR STYLE
                        </h1>

                        {/* Background Stars */}
                        <img src={BgStar} alt="" className="hidden lg:block w-[56px] h-[56px] ml-[1500px] mt-[-150px] mb-[70px]" />
                        <img src={BgStar} alt="" className="hidden lg:block w-[56px] h-[56px] ml-[900px] mt-[150px] mb-[-40px]" />

                        <p className="mt-4 lg:mt-8 text-[14px] lg:text-[16px] w-full lg:w-[545px] leading-[20px] lg:leading-[22px] opacity-60 select-none">
                            Browse through our diverse range of meticulously crafted garments, designed to bring out your 
                            individuality and cater to your sense of style.
                        </p>
                        <button className="min-w-[210px] h-[52px] bg-black my-6 lg:my-10 text-white rounded-full">
                            Shop Now
                        </button>

                        {/*----------------------------- Statistics Section  ---------------------------*/}
                        <div className="py-8 lg:py-[50px] flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 mt-4 lg:mt-0 justify-center lg:justify-start select-none">
                            <div className="border-r-0 lg:border-r-2 px-4">200+ <br />International Brands</div>
                            <div className="border-r-0 lg:border-r-2 px-4">2,000+ <br />High-Quality Products</div>
                            <div>30,000+ <br />Happy Customers</div>
                        </div>
                    </div>
                </div>

                {/*----------------------------- Footer Logos ---------------------------*/}
                <div className="w-full lg:w-screen lg:mx-[-150px] h-auto lg:h-[120px] lg:my-[80px] bg-black flex justify-center items-center py-4 lg:py-0">
                    <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-4 lg:gap-[250px] max-w-[1200px] mx-auto px-4 lg:px-0">
                        <img src={Versace} alt="Versace logo" className="w-[120px] lg:w-[167px] h-[25px] lg:h-[33px]" />
                        <img src={Zara} alt="Zara logo" className="w-[80px] lg:w-[91px] h-[30px] lg:h-[38px]" />
                        <img src={Gucci} alt="Gucci logo" className="w-[120px] lg:w-[156px] h-[30px] lg:h-[36px]" />
                        <img src={Prada} alt="Prada logo" className="w-[120px] lg:w-[156px] h-[30px] lg:h-[36px]" />
                        <img src={Calvin} alt="Calvin logo" className="w-[120px] lg:w-[156px] h-[30px] lg:h-[36px]" />
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default LandingPage;