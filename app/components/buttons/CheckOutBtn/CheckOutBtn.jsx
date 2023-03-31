'use client';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectCartSize } from '../../../../Redux/cartSlice';

function CheckOutBtn() {
  const cartSize = useSelector(selectCartSize);
  return (
    <Link href="/basket">
      <div className="relative flex items-center link ">
        <span className="absolute top-0 right-0 w-4 h-4 font-bold text-center text-black bg-yellow-400 rounded-full md:right-10">
          {cartSize}
        </span>
        <ShoppingCartIcon className="h-10 " />
        <p className="hidden mt-2 font-extrabold md:inline md:text-sm ">
          Basket
        </p>
      </div>
    </Link>
  );
}

export default CheckOutBtn;
