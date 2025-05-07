'use client';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useCartTotal } from '../../../../hooks/useCartTotal';
import { selectCartSize } from '../../../../store/cartSlice';


function CheckOutBtn() {
  const cartSize = useSelector(selectCartSize);
  const [isHovered, setIsHovered] = useState(false);
  const { subtotal, itemCount, total } = useCartTotal();
  

  return (
    <div className="relative inline-block">

    
    <Link href="/basket">
      <div className="relative flex items-center link "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
        <span className="absolute top-0 right-0 w-4 h-4 font-bold text-center text-black bg-yellow-400 rounded-full md:right-10">
          {cartSize}
        </span>
        <ShoppingCartIcon className="h-10 " />
        <p className="hidden mt-2 font-extrabold md:inline md:text-sm ">
          Basket
        </p>
      </div>
    </Link>
    {isHovered && (
        <div className="absolute px-3 py-3 bg-white text-black text-sm font-medium rounded shadow-lg z-[99] -translate-x-2/4">
          Subtotal : {subtotal} $
          <br />
          Discounted : {total} $
          <br />
          ItemsCount : {itemCount}

        </div>
      )}
    </div>
  );
}

export default CheckOutBtn;
