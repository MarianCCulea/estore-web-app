import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import HeaderSignInBtn from './components/HeaderSignInBtn';
import GoToCheckoutBtn from './GoToCheckoutBtn';
// import { useSelector } from "react-redux";
// import { selectItems } from "@/slices/cartSlice";
function Header() {
  // const items = useSelector(selectItems);
  // const router = useRouter();
  return (
    <header>
      <div className="flex items-center flex-grow p-1 py-2 bg-amazon_blue">
        <Link href="/">
          <div className="flex items-center flex-grow mt-2 sm:flex-grow-0">
            <Image
              className="object-contain px-4 cursor-pointer"
              src="https://links.papareact.com/f90"
              width={150}
              height={40}
              alt=""
            />
          </div>
        </Link>

        <div className="items-center flex-grow hidden h-10 bg-yellow-400 rounded-md cursor-pointer sm:flex hover:bg-yellow-500">
          <input
            className="flex-grow flex-shrink w-6 h-full p-2 px-4 rounded-l-md focus:outline-none"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        <div className="flex items-center mx-6 space-x-6 text-xs text-white whitespace-nowrap">
          <HeaderSignInBtn />
          <div className="link">
            <p>Retrurns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <GoToCheckoutBtn />
        </div>
      </div>
      <div className="flex items-center p-2 pl-6 space-x-4 text-sm text-white bg-amazon_blue-light">
        <p className="flex items-center font-bold link">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Best Sellers</p>
        <p className="link">Amazon Basics</p>
        <p className="link">New Releases</p>
        <p className="hidden link lg:inline-flex">Today&apos;s Deals</p>
        <p className="hidden link lg:inline-flex">Customer Service </p>
        <p className="hidden link lg:inline-flex">Music</p>
        <p className="hidden link lg:inline-flex">PC & Video Games</p>
        <p className="hidden link lg:inline-flex">Books</p>
        <p className="hidden link lg:inline-flex">Kindle Books</p>
        <p className="hidden link lg:inline-flex">Home & Kitchen</p>
        <p className="hidden link lg:inline-flex">Fashion</p>
        <p className="hidden link lg:inline-flex">Electronics & Photo</p>
      </div>
    </header>
  );
}

export default Header;
