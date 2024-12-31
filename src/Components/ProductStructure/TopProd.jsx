import { BShirt, Jeans, Chemise, OrShirt, Gchemise, Orange, Short, BlackJeans }
    from '../../assets/Images';
import Footer from '../Structure/Footer';
import Cart from './Cart';


function TopProd({title, pictures}){

    return (
        <>
            {/*----------------------------- New Arrivals ---------------------------*/}
            <div className='text-[55px] font-bold mt-[140px] block border-b-4 pb-[2%] '>
            <div className='flex justify-center'>
                <h1 className=''>{title}</h1>
            </div>
            
            <div className='mt-[100px] flex justify-center space-x-[140px] '>
                <Cart src = {pictures[0]} title = "T-SHIRT WITH TAPE DETAILS" price="120" wasPrice="200"/>
                <Cart src = {pictures[1]} title = "SKINNY FIT JEANS" price="240" />
                <Cart src = {pictures[2]} title = "CHECKERED SHIRT" price="180" wasPrice="250"/>
                <Cart src = {pictures[3]} title = "SLEEVE STRIPED T-SHIRT" price="130" />

            </div>
            <div className='cursor-pointer duration-500 hover:border-black font-normal mt-[100px] text-[16px] align-middle w-[218px] h-[58px] border-2 rounded-3xl
                            flex m-auto justify-center items-center'>
                <span>View All</span>
                </div>
        </div>
        

    </>
    )
}
export default TopProd;