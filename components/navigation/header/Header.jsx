import Link from 'next/link';

const Header = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between ${className}`}
    >
      <div className="m-5 space-x-5">
        <Link href="/">
          <a className="hover:underline">Home</a>
        </Link>
        <Link href="/">
          <a className="hover:underline">Store</a>
        </Link>
      </div>
      <div className="m-5 space-x-5">
        <Link href="/">
          <a className="hidden hover:underline sm:inline">Gmail</a>
        </Link>
        <Link href="/">
          <a className="hidden hover:underline sm:inline">Images</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
