
import { Star } from "../../assets/Images";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

function ProductSection({type, pictures, title, rank, currentPrice, wasPrice, paragraph}) {
    const [selectedColor, setSelectedColor] = useState(1);
    
    const handleButtonClick = (buttonIndex) => {
        setSelectedColor(selectedColor === buttonIndex ? null : buttonIndex);
    };
    const [selectedSize, setSelectedSize] = useState('Large');
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="mx-[140px] mt-[50px]">
            <div className="links">
                <div>
                    <a href="ecom-web-project" className="px-2 hover:underline opacity-60">Home</a>
                    <span> &gt; </span>
                    <a href="/ecom-web-project" className="px-2 hover:underline opacity-60">Shop</a>
                    <span> &gt; </span>
                    <a href="" className="px-2 hover:underline opacity-60">Men</a>
                    <span> &gt; </span>
                    <a href="ecom-web-project/product" className="px-2 hover:underline"> {type}</a>
                </div>
            </div>

            <div className="my-[50px] flex">
                <div className="images flex justify-center">
                    <div className="img-block my-4">
                        <img src={pictures[0]} alt="" className="w-[152px] h-[167px]" />
                        <img src={pictures[1]} alt="" className="my-4 w-[152px] h-[167px]" />
                        <img src={pictures[2]} alt="" className="w-[152px] h-[167px]" />
                    </div>
                    <div className="main-pic">
                        <img src={pictures[3]} alt="" className="mx-8 my-4 w-[444px] h-[530px]" />
                    </div>
                </div>
                <div className="information mx-auto my-[-10px]">
                    <h2 className="text-[64px] font-bold">{title}</h2>

                    <div className="mb-4 flex items-center gap-1 mt-2">
                        {[...Array(rank)].map((_, i) => (
                            <img
                                key={i}
                                src={Star}
                                alt="star rating"
                                className="mx-1 w-[25px] h-[25px]"
                            />
                        ))}
                        <span className="mx-2"> {rank} / <span className="opacity-60">5</span></span>
                    </div>

                    <div className="flex items-center">
                        <span className="text-[34px] font-semibold">
                            ${currentPrice} <span className="line-through text-gray-600">${wasPrice}</span>
                        </span>
                        <span className="text-[14px] font-normal rounded-full px-4 p-2 text-[#FF3333] border-[rgba(255,51,51,0.1)] bg-[rgba(255,51,51,0.1)] mx-4">
                        -{Math.round(((wasPrice - currentPrice) / wasPrice) * 100)}%
                        </span>
                    </div>
                    <div className="border-b-1">
                    <p className="my-4 pb-2 w-[590px] h-auto opacity-60">
                        {paragraph}
                    </p>
                    </div>
                    

                    <div className="color">
                        <h3 className="mb-4 text-[16px] opacity-60">Select Color</h3>
                        <div className="flex pb-4 border-b-1">
                            <button
                                onClick={() => handleButtonClick(1)}
                                className="w-[37px] h-[37px] rounded-full bg-[#4F4631] hover:opacity-95 text-white flex items-center justify-center"
                            >
                                {selectedColor === 1 && <FaCheck />}
                            </button>

                            <button
                                onClick={() => handleButtonClick(2)}
                                className="w-[37px] h-[37px] rounded-full bg-[#314F4A] hover:opacity-95 mx-4 flex items-center justify-center text-white"
                            >
                                {selectedColor === 2 && <FaCheck />}
                            </button>

                            <button
                                onClick={() => handleButtonClick(3)}
                                className="w-[37px] h-[37px] rounded-full bg-[#31344F] hover:opacity-95 flex items-center justify-center text-white"
                            >
                                {selectedColor === 3 && <FaCheck />}
                            </button>
                        </div>
                    </div>
                    <div className="size mt-4 pb-8 border-b-1">
                        <h3 className=" text-[16px] opacity-60">Choose Size</h3>

                        <div className="flex pt-6 border-b-1 space-x-4">
                            <button 
                            onClick={() => setSelectedSize('Small')}
                            className={`w-[86px] rounded-full h-[46px] ${selectedSize === 'Small' ? 'bg-black text-white' : 'bg-[#F0F0F0]'} text-center content-center`}>
                            <span className={selectedSize === 'Small' ? '' : 'opacity-60'}>Small</span>
                            </button>
                            
                            <button
                            onClick={() => setSelectedSize('Medium')} 
                            className={`w-[105px] rounded-full h-[46px] ${selectedSize === 'Medium' ? 'bg-black text-white' : 'bg-[#F0F0F0]'} text-center content-center`}>
                            <span className={selectedSize === 'Medium' ? '' : 'opacity-60'}>Medium</span>
                            </button>
                            
                            <button
                                onClick={() => setSelectedSize('Large')}
                                className={`w-[89px] rounded-full h-[46px] ${selectedSize === 'Large' ? 'bg-black text-white' : 'bg-[#F0F0F0]'} text-center content-center`}>
                                    <span className={selectedSize === 'Large' ? '' : 'opacity-60'}>Large</span>
                            </button>
                            <button
                                onClick={() => setSelectedSize('X-Large')}
                                className={`w-[104px] rounded-full h-[46px] ${selectedSize === 'X-Large' ? 'bg-black text-white' : 'bg-[#F0F0F0]'} text-center content-center`}>
                                    <span className={selectedSize === 'X-Large' ? '' : 'opacity-60'}>X-Large</span>
                            </button>
                        </div>
                    </div>
                    <div className="Buy flex">
                        <div className="flex space-x-6">
                            <div className="content-center w-[171px] h-[51px] border-2 rounded-full flex justify-around">
                                <button className="mx-4" onClick={() => quantity>1 ? setQuantity(quantity-1) : ''}><span className="text-[26px]"> &#8722;</span></button>
                                <span className="mt-3">{quantity}</span>
                                <button className="mx-4" onClick={() => setQuantity(quantity+1) }><span className="text-[26px]"> &#43;</span></button>
                            </div>
                            <button className="w-[400px] h-[51px] bg-[#000] text-white rounded-full">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductSection;