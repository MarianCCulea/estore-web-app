/* eslint-disable @next/next/no-img-element */
'use client';
import Dropdown from 'app/components/molecules/dropdown/Dropdown';
import { useState } from 'react';

function TestingPage() {
  const [activeQ, setActiveQ] = useState('q1');

  const openQ = (id) => {
    setActiveQ(activeQ === id ? '' : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? 'active-answer' : '';
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? 'active-question' : '';
  };
  const base = {
    id: '14512',
    amount: `255$`,
    amountShipping: '25$',
    items: 23,
    timestamp: '1976-04-19T12:59-0500',
    images: [
      'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
      'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    ],
  };

  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const handleButtonClick1 = () => {
    setShowDropdown1(!showDropdown1);
    setShowDropdown2(false);
  };

  const handleButtonClick2 = () => {
    setShowDropdown1(false);
    setShowDropdown2(!showDropdown2);
  };
  return (
    <div className="h-screen bg-blue-50">
      <main className="p-5 bg-light-blue">
        <div className="flex items-start justify-center my-2">
          <div className="w-full my-1 sm:w-10/12 md:w-1/2">
            <ul className="flex flex-col">
              <Dropdown title="When will my order arrive?" opened={true}>
                <div className="flex flex-col w-full p-8 mt-10 bg-gray-100 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
                  <h2 className="mb-5 text-lg font-medium text-gray-900 title-font">
                    Sign Up
                  </h2>
                  <div className="relative mb-4">
                    <label className="text-sm leading-7 text-gray-600">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      name="full-name"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label className="text-sm leading-7 text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>
                  <button className="px-8 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
                    Button
                  </button>
                  <p className="mt-3 text-xs text-gray-500">
                    Literally you probably heard of them jean shorts.
                  </p>
                </div>
              </Dropdown>
              <Dropdown
                title="How do I return or exchange an item?"
                opened={true}
              >
                If you are not satisfied with your purchase, you can return or
                exchange the item within 30 days of delivery. Please contact our
                customer support team for further assistance.
              </Dropdown>
              <Dropdown title="what payment method you acccept?">
                If you are not satisfied with your purchase, you can return or
                exchange the item within 30 days of delivery. Please contact our
                customer support team for further assistance.
              </Dropdown>
              <Dropdown title="How can i track order?">
                If you are not satisfied with your purchase, you can return or
                exchange the item within 30 days of delivery. Please contact our
                customer support team for further assistance.
              </Dropdown>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TestingPage;
