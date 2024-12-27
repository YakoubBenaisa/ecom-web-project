import { useState } from "react";
import { FaX } from "react-icons/fa6";

function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleCloseBanner = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`relative bg-black w-full flex justify-center items-center overflow-hidden transition-all duration-500 ease-in-out ${
        isVisible ? 'h-9' : 'h-0'
      }`}
    >
      <h4 className="select-none text-white text-sm text-center pt-1.5">
        Sign up and get 20% off your first order. <a href="/" className="underline">Sign Up Now</a>
      </h4>
      <button
        aria-label="Close banner"
        onClick={handleCloseBanner}
        className="absolute right-4 pt-1 pr-[120px] text-sm text-white cursor-pointer"
      >
        <FaX />
      </button>
    </div>
  );
}

export default Banner;
