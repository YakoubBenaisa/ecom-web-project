import Cart from './Cart';

function TopProd({ title, pictures }) {
    return (
        <>
            {/*----------------------------- New Arrivals ---------------------------*/}
            <div className="text-[32px] sm:text-[40px] lg:text-[55px] font-bold mt-[80px] lg:mt-[140px] block border-b-4 pb-[2%]">
                <div className="flex justify-center">
                    <h1>{title}</h1>
                </div>

                {/* Product Grid */}
                <div className="mt-[50px] lg:mt-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[140px] justify-center px-4 lg:px-0">
                    <Cart src={pictures[0]} title="T-SHIRT WITH TAPE DETAILS" price="120" wasPrice="200" />
                    <Cart src={pictures[1]} title="SKINNY FIT JEANS" price="240" />
                    <Cart src={pictures[2]} title="CHECKERED SHIRT" price="180" wasPrice="250" />
                    <Cart src={pictures[3]} title="SLEEVE STRIPED T-SHIRT" price="130" />
                </div>

                {/* View All Button */}
                <div className="cursor-pointer duration-500 hover:border-black font-normal mt-[50px] lg:mt-[100px] text-[16px] align-middle w-[218px] h-[58px] border-2 rounded-3xl flex m-auto justify-center items-center">
                    <span>View All</span>
                </div>
            </div>
        </>
    );
}

export default TopProd;