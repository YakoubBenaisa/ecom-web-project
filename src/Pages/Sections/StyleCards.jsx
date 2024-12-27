import { Casual, Formal, Gym, Party } from '../../assets/Images';
function StyleCards(){

    return(
        <>
            {/*----------------------------- Styles Cart ---------------------------*/}
            <div className='flex justify-center items-center border-b-4 pb-[2%]'>
                <div className='w-[1239px] h-[866px] bg-[#F0F0F0] rounded-[40px] my-[40px]'>
                    <div className='flex flex-col h-full justify-center'>
                        <div className='flex justify-center mb-8'>
                            <h3 className='text-[48px] font-bold'>BROWSE BY DRESS STYLE</h3>
                        </div>
                        <div className='grid grid-cols-12 gap-8 mx-16'>
                            <img 
                                src={Casual} 
                                alt="Casual Style" 
                                className='col-span-4 w-full h-[289px] object-cover rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl' 
                            />
                            <img 
                                src={Formal} 
                                alt="Formal Style" 
                                className='col-span-8 w-full h-[289px] object-cover rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl' 
                            />
                            <img 
                                src={Party} 
                                alt="Party Style" 
                                className='col-span-8 w-full h-[289px] object-cover rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl' 
                            />
                            <img 
                                src={Gym} 
                                alt="Gym Style" 
                                className='col-span-4 w-full h-[289px] object-cover rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl' 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    
    )
}
export default StyleCards;