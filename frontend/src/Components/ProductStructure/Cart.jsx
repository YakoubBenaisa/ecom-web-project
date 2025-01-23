import React from 'react';
import { Star } from '../../assets/Images';
import { Link } from 'react-router-dom';

const Cart = ({ src, title, price, wasPrice }) => {
  // Calculate discount percentage if wasPrice exists
  const discountPercentage = wasPrice ? Math.round(((wasPrice - price) / wasPrice) * 100) : null;

  return (
    <Link to="/ecom-web-project/product">
      <div className="block cursor-pointer border-2 rounded-lg p-2 duration-300 hover:scale-105">
        {/* Product Image */}
        <img
          src={src}
          alt=""
          className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover"
        />

        {/* Product Title */}
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] pt-4">{title}</p>

        {/* Star Rating */}
        <div className="flex items-center gap-1 mt-2">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src={Star}
              alt="star rating"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          ))}
          <span className="ml-2 text-[12px] sm:text-[14px] text-gray-600">4/5</span>
        </div>

        {/* Price and Discount */}
        <div className="flex items-center mt-2">
          <span className="text-[18px] sm:text-[20px] lg:text-[24px]">
            ${price} {wasPrice && <span className="line-through text-[12px] sm:text-[14px] text-gray-600">${wasPrice}</span>}
          </span>
          {discountPercentage && (
            <span className="text-[12px] sm:text-[14px] font-normal border-2 rounded-full p-1 px-2 text-[#FF3333] border-[rgba(255,51,51,0.1)] bg-[rgba(255,51,51,0.1)] my-2 mx-4">
              -{discountPercentage}%
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Cart;