import React from 'react';
import {Star} from '../../assets/Images';
import { Link } from 'react-router-dom';
const Cart = ({ src, title, price, wasPrice }) => {
  // Calculate discount percentage if wasPrice exists
  const discountPercentage = wasPrice ? Math.round(((wasPrice - price) / wasPrice) * 100) : null;

  return (
    <Link to="/product">
      <div className="block cursor-pointer border-2 rounded-lg p-2 duration-300 hover:scale-105">
        <img
          src={src}
          alt=""
          className="w-[300px] h-[300px] object-cover"
        />
        <p className="text-[20px] pt-4">{title}</p>
        <div className="flex items-center gap-1 mt-2">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src={Star}
              alt="star rating"
              className="w-5 h-5"
            />
          ))}
          <span className="ml-2 text-[14px] text-gray-600">4/5</span>
        </div>
        <div className="flex items-center">
          <span className="text-[24px]">
            ${price} {wasPrice && <span className="line-through text-[14px] text-gray-600">${wasPrice}</span>}
          </span>
          {discountPercentage && (
            <span className="text-[14px] font-normal border-2 rounded-full p-1 px-2 text-[#FF3333] border-[rgba(255,51,51,0.1)] bg-[rgba(255,51,51,0.1)] my-2 mx-4">
              -{discountPercentage}%
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Cart;