import { BShirt, Jeans, Chemise, OrShirt, Gchemise, Orange, Short, BlackJeans }
    from '../../assets/Images';
import Cart from '../../Components/Cart';

function Sellings(){

    return (
        <>
            {/*----------------------------- New Arrivals ---------------------------*/}
            <div className='text-[55px] font-bold mt-[140px] block border-b-4 pb-[2%] '>
            <div className='flex justify-center'>
                <h1 className=''>New Arrivals</h1>
            </div>
            
            <div className='mt-[100px] flex justify-center space-x-[150px] '>
                <Cart src = {BShirt} title = "T-SHIRT WITH TAPE DETAILS" price="120" wasPrice="200"/>
                <Cart src = {Jeans} title = "SKINNY FIT JEANS" price="240" />
                <Cart src = {Chemise} title = "CHECKERED SHIRT" price="180" wasPrice="250"/>
                <Cart src = {OrShirt} title = "SLEEVE STRIPED T-SHIRT" price="130" />

            </div>
            <div className='cursor-pointer duration-500 hover:border-black font-normal mt-[100px] text-[16px] align-middle w-[218px] h-[58px] border-2 rounded-3xl
                            flex m-auto justify-center items-center'>
                <span>View All</span>
                </div>
        </div>

        {/*----------------------------- Top Selling ---------------------------*/}
        <div className='text-[55px] font-bold mt-[140px] block border-b-4 pb-[2%] '>
            <div className='flex justify-center'>
                <h1 className=''>Top Selling</h1>
            </div>
            
            <div className='mt-[100px] flex justify-center space-x-[150px] '>
                <Cart src = {Gchemise} title = "VERTICAL STRIPED SHIRT" price="120" />
                <Cart src = {Orange} title = "COURAGE GRAPHIC T-SHIRT" price="240" wasPrice="340"/>
                <Cart src = {Short} title = "LOOSE FIT BERMUDA SHORTS" price="180"/>
                <Cart src = {BlackJeans} title = "FADED SKINNY JEANS" price="130" wasPrice="170"/>

            </div>
            <div className='cursor-pointer duration-500 hover:border-black font-normal mt-[100px] text-[16px] align-middle w-[218px] h-[58px] border-2 rounded-3xl
                            flex m-auto justify-center items-center'>
                <span>View All</span>
                </div>
        </div>
    </>
    )
}
export default Sellings;