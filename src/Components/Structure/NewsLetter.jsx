import Econ from "../../assets/icons/Email.svg";
function Newsletter() {
    return (
        <div className="flex justify-center px-4 py-6 mt-[-100px]">
            <div className="mx-[150px] flex w-[1241px] h-[180px] bg-black rounded-[20px] p-6">
                    {/*---------------------------- Title  ----------------------------------------*/}
                <h3 className="ml-[50px] mr-[150px] text-[24px] w-[551px] text-[40px] font-bold text-white mb-4">
                    STAY UP TO DATE ABOUT OUR LATEST OFFERS
                </h3>
                <div className='flex flex-col gap-4'>
                    {/*---------------------------- Email input  ----------------------------------------*/}
                    <div className="flex items-center bg-[#fefefe] w-[350px] h-[48px] rounded-full px-4">
                        <img src={Econ} alt="Email Icon" className="w-6 h-6 mr-3" />
                        <input
                            type="email"
                            className="bg-transparent flex-grow outline-none placeholder-gray-400 text-sm"
                            placeholder="youremail@example.com"
                            aria-label="Email Address"
                        />                    
                    </div>
                    {/*---------------------------- Subscribe Button  ----------------------------------------*/}
                    <button className="bg-white w-[350px] h-[48px] rounded-full px-4 font-semibold
                                    transition-transform transform active:scale-95 active:bg-gray-200">
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
