import { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart, MdAccountCircle } from "react-icons/md";
import { FaAngleDown, FaBars } from "react-icons/fa6";
import Banner from "./Banner";

const Search = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-gray-100 transition-all duration-300 ease-in-out rounded-full ${
      isExpanded ? 'w-full' : 'lg:w-96 w-48'
    } h-10 inline-flex items-center px-3 hover:bg-gray-200`}>
      <IoIosSearch className="w-6 h-6 text-gray-500 shrink-0" />
      <input
        type="search"
        className="bg-transparent ml-2 w-full outline-none placeholder-gray-400"
        placeholder="Search products..."
        onFocus={() => setIsExpanded(true)}
        onBlur={() => setIsExpanded(false)}
      />
    </div>
  );
};

const DropdownMenu = ({ label, items, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`relative ${isMobile ? 'w-full' : 'px-2'}`}
    >
      <a
        href={`#${label}`}
        className="text-black inline-flex items-center group hover:text-blue-500 transition-all py-4"
      >
        {label}
        <FaAngleDown className={`ml-1 transition-transform duration-400 ${isOpen ? 'rotate-180' : ''}`} />
      </a>
      {isOpen && (
        <div className={`bg-white shadow-lg rounded-lg overflow-hidden
          ${isMobile ? 'w-full mt-2' : 'absolute w-screen max-w-lg mt-4 left-1/2 -translate-x-1/2'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
            {items.map((item, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-black">{item.name}</h4>
                <ul className="space-y-2">
                  {item.subcategories.map((subcategory, subIndex) => (
                    <li
                      key={subIndex}
                      className="text-gray-600 hover:text-blue-500 transition-all cursor-pointer text-sm py-1"
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

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="sticky top-0 z-50 bg-white">
      <Banner />
      
      <header className={`border-b transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo and Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Toggle menu"
              >
                <FaBars className="w-6 h-6" />
              </button>
              <a href="#" className="font-bold text-2xl hover:text-blue-500 transition-colors">
                SHOP.CO
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <DropdownMenu label="Shop" items={shopCategories} />
              <DropdownMenu label="Sales" items={saleItems} />
              <DropdownMenu label="Arrivals" items={newArrivalsItems} />
              <DropdownMenu label="Brands" items={brandsItems} />
            </nav>

            {/* Search and Icons */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <Search />
              </div>
              <div className="flex items-center gap-4">
                <button aria-label="Cart" className="p-2 hover:text-blue-500 transition-colors">
                  <MdOutlineShoppingCart className="w-6 h-6" />
                </button>
                <button aria-label="Account" className="p-2 hover:text-blue-500 transition-colors">
                  <MdAccountCircle className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="mt-4 md:hidden">
            <Search />
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              <DropdownMenu label="Shop" items={shopCategories} isMobile />
              <DropdownMenu label="Sales" items={saleItems} isMobile />
              <DropdownMenu label="Arrivals" items={newArrivalsItems} isMobile />
              <DropdownMenu label="Brands" items={brandsItems} isMobile />
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;