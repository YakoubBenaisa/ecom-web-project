import { useState } from "react";

import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart, MdAccountCircle } from "react-icons/md";
import { FaAngleDown, FaBars } from "react-icons/fa6";
import Banner from "./Banner";


{/*---------------------------- Search input  ----------------------------------------*/}
const Search = () => {
    return (
        <div className="bg-[#f0f0f0] lg:w-[400px] w-[60%] h-[38px] inline-flex items-center rounded-full px-3 transition-all ease-in-out hover:bg-[#e0e0e0]">
            <IoIosSearch className="w-[24px] h-[24px] text-gray-500 mr-2" />
            <input
                type="search"
                className="bg-transparent opacity-70 w-full outline-none placeholder-gray-400 transition-all ease-in-out"
                placeholder="Search for product..."
            />
        </div>
    );
};

{/*---------------------------- DropDown Menu Component  ----------------------------------------*/}
const DropdownMenu = ({ label, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    let closeTimeout;

    const handleMouseEnter = () => {
        clearTimeout(closeTimeout);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        closeTimeout = setTimeout(() => setIsOpen(false), 80);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative px-2"
    
        >
            <a
                href={`#${label}`}
                className="text-black inline-flex items-center group hover:text-blue-500 transition-all py-4"
            >
                {label}
                <FaAngleDown className="ml-1" />
            </a>
            {isOpen && (
                <div className="absolute bg-white w-[300px] lg:w-[450px] h-auto mt-[10px] lg:mt-[20px] border-2 left-[320%] transform translate-x-[-50%] rounded shadow-lg transition-all ease-in-out z-50">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
                        {items.map((item, index) => (
                            <div key={index}>
                                <h4 className="font-semibold text-black py-[25px]">{item.name}</h4>
                                <ul className="text-gray-600 text-sm">
                                    {item.subcategories.map((subcategory, subIndex) => (
                                        <li
                                            key={subIndex}
                                            className="py-4 hover:text-blue-500 transition-all"
                                        >
                                            {subcategory}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

{/*---------------------------- Header  ----------------------------------------*/}
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    {/* this Data will be provided by apis */}
    const shopCategories = [
        { name: "Clothing", subcategories: ["T-Shirts", "Jeans", "Jackets"] },
        { name: "Accessories", subcategories: ["Hats", "Sunglasses", "Belts"] },
    ];
    const saleItems = [
        { name: "Special Offers", subcategories: ["Discounts", "Limited Time"] },
        { name: "Clearance", subcategories: ["Shoes", "Sweaters"] },
    ];
    const newArrivalsItems = [
        { name: "Fresh Picks", subcategories: ["Tops", "Bottoms"] },
        { name: "Top Rated", subcategories: ["Outerwear", "Footwear"] },
    ];
    const brandsItems = [
        { name: "Popular Brands", subcategories: ["Brand A", "Brand B"] },
        { name: "New Brands", subcategories: ["Brand C", "Brand D"] },
    ];

    return (
        <>
            <Banner />

            {/* Header */}
            <div className="flex justify-between items-center px-4 lg:mx-[120px] py-3 lg:py-2 relative">
                {/* Block 1: Logo with FaBars Icon */}
                <div className="flex items-center">
                    <FaBars
                        className="lg:hidden w-[24px] h-[24px] cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                    <h1 className="text-xl lg:text-2xl font-bold text-black ml-4 select-none hover:text-blue-500 transition-all">
                        <a href="#">SHOP.CO</a>
                    </h1>
                </div>

                {/* Block 2: Dropdowns and Search */}
                <div className="flex-1 flex justify-center items-center lg:space-x-6">
                    {/* Dropdowns */}
                    <div className="hidden lg:flex space-x-4">
                        <DropdownMenu label="Shop" items={shopCategories} />
                        <DropdownMenu label="Sales" items={saleItems} />
                        <DropdownMenu label="Arrivals" items={newArrivalsItems} />
                        <DropdownMenu label="Brands" items={brandsItems} />
                    </div>
                    {/* Search */}
                    <Search />
                </div>

                {/* Block 3: Cart and Account Icons */}
                <div className="flex items-center space-x-4">
                    <a href="#" aria-label="Shopping Cart" className="hover:text-blue-500 transition-all">
                        <MdOutlineShoppingCart className="w-[24px] h-[24px]" />
                    </a>
                    <a href="#" aria-label="Account" className="hover:text-blue-500 transition-all">
                        <MdAccountCircle className="w-[24px] h-[24px]" />
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute  left-0 bg-white w-full z-50 flex flex-col items-start p-4 lg:hidden shadow-lg">
                    <DropdownMenu label="Shop" items={shopCategories} />
                    <DropdownMenu label="Sales" items={saleItems} />
                    <DropdownMenu label="Arrivals" items={newArrivalsItems} />
                    <DropdownMenu label="Brands" items={brandsItems} />
                </div>
            )}
        </>
    );
}

export default Header;
