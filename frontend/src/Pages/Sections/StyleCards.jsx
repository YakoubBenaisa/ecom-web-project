import { Casual, Formal, Gym, Party } from '../../assets/Images';

function StyleCards() {
  return (
    <>
      {/*----------------------------- Styles Cart ---------------------------*/}
      <div className="flex justify-center items-center border-b-4 pb-[2%]">
        <div className="w-full max-w-[1239px] h-auto bg-[#F0F0F0] rounded-[40px] my-[40px] px-4 sm:px-8">
          <div className="flex flex-col h-full justify-center">
            <div className="flex justify-center mb-8">
              <h3 className="text-[32px] sm:text-[48px] font-bold">BROWSE BY DRESS STYLE</h3>
            </div>
            <div className="grid grid-cols-1 gap-8 mx-4 sm:mx-16 sm:grid-cols-2 lg:grid-cols-12">
              {/* Casual Style */}
              <div className="lg:col-span-4 sm:col-span-1">
                <img 
                  src={Casual} 
                  alt="Casual Style" 
                  className="w-full h-[289px] object-cover rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                />
              </div>
              {/* Formal Style */}
              <div className="lg:col-span-8 sm:col-span-1">
                <img 
                  src={Formal} 
                  alt="Formal Style" 
                  className="w-full h-[289px] object-cover rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                />
              </div>
              {/* Party Style */}
              <div className="lg:col-span-8 sm:col-span-1">
                <img 
                  src={Party} 
                  alt="Party Style" 
                  className="w-full h-[289px] object-cover rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                />
              </div>
              {/* Gym Style */}
              <div className="lg:col-span-4 sm:col-span-1">
                <img 
                  src={Gym} 
                  alt="Gym Style" 
                  className="w-full h-[289px] object-cover rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StyleCards;