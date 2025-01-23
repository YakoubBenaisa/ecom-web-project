import Econ from "../../assets/icons/Email.svg";

function Newsletter() {
    return (
        <div className="flex justify-center px-4 sm:px-8 lg:px-16 py-6 mt-[-100px]">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1241px] h-auto lg:h-[180px] bg-black rounded-[20px] p-6 gap-6 lg:gap-0">
                {/*---------------------------- Title  ----------------------------------------*/}
                <h3 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-white text-center lg:text-left lg:w-[551px]">
                    STAY UP TO DATE ABOUT OUR LATEST OFFERS
                </h3>
                <div className="flex flex-col gap-4 w-full lg:w-auto">
                    {/*---------------------------- Email input  ----------------------------------------*/}
                    <div className="flex items-center bg-[#fefefe] w-full lg:w-[350px] h-[48px] rounded-full px-4">
                        <img src={Econ} alt="Email Icon" className="w-6 h-6 mr-3" />
                        <input
                            type="email"
                            className="bg-transparent flex-grow outline-none placeholder-gray-400 text-sm"
                            placeholder="youremail@example.com"
                            aria-label="Email Address"
                        />
                    </div>
                    {/*---------------------------- Subscribe Button  ----------------------------------------*/}
                    <button className="bg-white w-full lg:w-[350px] h-[48px] rounded-full px-4 font-semibold transition-transform transform active:scale-95 active:bg-gray-200">
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;