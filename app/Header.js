import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
// import { useSelector } from "react-redux";
// import { selectItems } from "@/slices/cartSlice";
function Header() {
  // const items = useSelector(selectItems);
  return (
    <header>
      <div className="flex items-center flex-grow p-1 py-2 bg-amazon_blue">
        <div className="flex items-center flex-grow mt-2 sm:flex-grow-0">
          <Image
            className="object-contain cursor-pointer"
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            alt=""
          />
        </div>
        <div className="items-center flex-grow hidden h-10 bg-yellow-400 rounded-md cursor-pointer sm:flex hover:bg-yellow-500">
          <input
            className="flex-grow flex-shrink w-6 h-full p-2 px-4 rounded-l-md focus:outline-none"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        <div className="flex items-center mx-6 space-x-6 text-xs text-white whitespace-nowrap">
          <div className="link">
            <p>Hello Name</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Retrurns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative flex items-center link ">
            <span className="absolute top-0 right-0 w-4 h-4 font-bold text-center text-black bg-yellow-400 rounded-full md:right-10">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden mt-2 font-extrabold md:inline md:text-sm ">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center p-2 pl-6 space-x-3 text-sm text-white bg-amazon_blue-light">
        <p className="flex items-center link">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon business</p>
        <p className="link">TYoday deals</p>
        <p className="hidden link lg:inline-flex">Electronices</p>
        <p className="hidden link lg:inline-flex">Food </p>
        <p className="hidden link lg:inline-flex">prime</p>
        <p className="hidden link lg:inline-flex">buy again</p>
        <p className="hidden link lg:inline-flex">Shopper toljkit</p>
        <p className="hidden link lg:inline-flex">asdasd toljkiasdasdasdt</p>
      </div>
    </header>
  );
}

export default Header;
