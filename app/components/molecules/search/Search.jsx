'use client';
//import { useRouter } from 'next/router';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Search = () => {
  //const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="flex-grow ">
      <form
        className="items-center h-10 bg-yellow-400 rounded-md cursor-pointer sm:flex hover:bg-yellow-500"
        onSubmit={(e) => {
          e.preventDefault();
          //router.push(`/results?search=${searchTerm}`);
        }}
      >
        <input
          type="text"
          className="flex-grow flex-shrink w-6 h-full p-2 px-4 rounded-l-md focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <MagnifyingGlassIcon type="submit" className="h-12 p-4" />
      </form>
    </div>
  );
};

export default Search;
