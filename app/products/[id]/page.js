import Header from "app/Header";
import React, { use } from "react";
import Image from "next/image";
import AddToCartButton from "app/AddToCartButton";
import ImageDisplay from "app/ImagePicker/ImageDisplay";

import { MapPinIcon } from "@heroicons/react/24/outline";

import { StarIcon } from "@heroicons/react/24/solid";

function ProductPage({ params }) {
  let product = use(getData(params.id));
  return (
    <div>
      <Header />
      <section className="container px-5 py-12 mx-auto ">
        <div className="flex justify-between space-x-6">
          <ImageDisplay />
          <div>
            <div className="items-start px-4 py-2 space-y-2 ">
              <div className="text-3xl">{product.title}</div>
              <div>
                <span className="text-blue-600 ">{product.category}</span>
              </div>
              <div className="inline-flex items-center text-base">
                <StarIcon className="flex-shrink-0 object-cover object-center w-5 h-5 text-yellow-500" />
                <StarIcon className="flex-shrink-0 object-cover object-center w-5 h-5 text-yellow-500" />
                <StarIcon className="flex-shrink-0 object-cover object-center w-5 h-5 text-yellow-500" />
                <StarIcon className="flex-shrink-0 object-cover object-center w-5 h-5 text-yellow-500" />
                <span className="flex flex-col flex-grow pl-3">
                  <span className="font-medium text-blue-600 title-font">
                    1,920 Ratings
                  </span>
                </span>
              </div>
              <div className="border-t border-white "></div>
              <div className="inline-flex items-center text-base">
                <div className="px-2 text-white bg-amazon_blue">
                  {" "}
                  Amazon`s <span className=" text-amazon_orange">Choice</span>
                </div>
              </div>
              <div className="flex-grow border-t border-gray-400"></div>
              <div className="inline-flex items-center">
                <span className="pb-1 text-sm">$</span>
                <h1 className="text-xl font-bold">{product.price}</h1>
              </div>
              <div>
                Prices for items sold by Amazon include VAT. Depending on your
                delivery address, VAT may vary at Checkout. For other items,
                please see details.
              </div>
              <div className="w-72">
                <TwoColumnRow
                  leftContent={"Brand"}
                  rightContent={<p>Soundcore</p>}
                />
                <TwoColumnRow
                  leftContent={"Model name"}
                  rightContent={<p>Bluetooth 5.2</p>}
                />
                <TwoColumnRow
                  leftContent={"Colour"}
                  rightContent={<p>White</p>}
                />
                <TwoColumnRow
                  leftContent={"Colour"}
                  rightContent={<p>White</p>}
                />
                <TwoColumnRow
                  leftContent={"Special feature"}
                  rightContent={<p>Wireless, Noise Cancellation</p>}
                />
                <TwoColumnRow
                  leftContent={"Colour"}
                  rightContent={<p>White</p>}
                />
              </div>
              <div className="flex-grow pb-3 border-t border-gray-400"></div>
              <span className="text-lg font-semibold ">About this item</span>
              <div className="">
                <ul className="list-disc list-inside">
                  <li>{product.description}</li>
                </ul>{" "}
                <ul className="list-disc list-inside">
                  <li>{product.description}</li>
                </ul>{" "}
                <ul className="list-disc list-inside">
                  <li>{product.description}</li>
                </ul>{" "}
                <ul className="list-disc list-inside">
                  <li>{product.description}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4 grow-0 w-72">
            <div className="flex items-start bg-gray-500 border-2 border-gray-400 rounded-2xl">
              <div className="flex-grow px-4 py-2 space-y-2 text-2xl bg-white rounded-2xl">
                <div className="inline-flex items-center">
                  <span className="pb-1 text-sm">$</span>
                  <h1 className="font-bold text-md">{product.price}</h1>
                </div>
                <h1 className="text-base">
                  <span className="text-blue-700 ">FREE delivery </span>
                  <span className="font-bold ">Tuesday, March 7 </span>
                  on eligible first order. Order within
                  <span className="text-green-600 "> 20 hrs 17 mins</span>
                </h1>

                <a className="inline-flex items-center text-base">
                  <MapPinIcon className="flex-shrink-0 object-cover object-center w-5 h-5" />
                  <span className="flex flex-col flex-grow pl-3">
                    <span className="font-medium text-gray-900 title-font">
                      Deliver To Denmark
                    </span>
                  </span>
                </a>

                <h1 className="text-2xl text-green-600">In stock</h1>
                <a className="inline-flex items-center text-base">
                  <span>Quantity: </span>
                  <span className="flex flex-col flex-grow pl-3">
                    <span className="font-medium text-gray-900 title-font">
                      1
                    </span>
                  </span>
                </a>
                <div className="text-center">
                  <AddToCartButton />
                </div>
                <div className="text-center">
                  <AddToCartButton />
                </div>

                <div className="flex-grow border-t border-gray-400"></div>
                <div className="text-sm text-blue-700 ">Details</div>

                <h1 className="text-base">
                  <span className="">Return policy: </span>

                  <span className="text-blue-700 ">
                    Returnable within 30 days of receipt
                  </span>
                </h1>

                <h1 className="inline-flex items-center text-base">
                  <input type="checkbox" />
                  <span className="flex flex-col flex-grow pl-3">
                    <span className="font-medium text-gray-900 title-font">
                      Add gift options
                    </span>
                  </span>
                </h1>
                <div className="flex-grow border-t border-gray-400"></div>
                <div className="">
                  <button className="w-full py-1 pl-2 text-base text-left border-2 border-gray-800 rounded-lg">
                    Add to List
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start bg-gray-500 border-2 border-gray-400 rounded-2xl">
              <div className="flex-grow px-6 py-4 space-y-2 text-2xl bg-white rounded-2xl">
                <h1 className="text-base font-bold text-center">
                  Add an Accessory:
                </h1>
                <div className="flex-grow border-t border-gray-400"></div>
                <h2 className="text-sm text-blue-700 line-clamp-3">
                  deleyCON 2 m 8K UHD-II HDMI 2.1 Nylon Cable 4320p 2160p 8K @
                  60Hz 4K @ 120Hz 7680x4320p Metal Connector Dolby DTS HDR eARC
                  CEC HDTV EthernetdeleyCON 2 m 8K UHD-II HDMI 2.1 Nylon Cable
                  4320p 2160p 8K @ 60Hz 4K @ 120Hz 7680x4320p Me…
                </h2>

                <div className="flex justify-between ">
                  <span className="-mt-1 text-base text-red-500">$ 10.99</span>

                  <span className="-mt-3">
                    <AddToCartButton size={1} {...product} />
                  </span>
                </div>
                <div className="flex-grow border-t border-gray-400"></div>

                <h2 className="text-sm text-blue-700 line-clamp-3">
                  deleyCON 2 m 8K UHD-II HDMI 2.1 Nylon Cable 4320p 2160p 8K @
                  60Hz 4K @ 120Hz 7680x4320p Metal Connector Dolby DTS HDR eARC
                  CEC HDTV EthernetdeleyCON 2 m 8K UHD-II HDMI 2.1 Nylon Cable
                  4320p 2160p 8K @ 60Hz 4K @ 120Hz 7680x4320p Me…
                </h2>

                <div className="flex justify-between ">
                  <span className="-mt-1 text-base text-red-500">$ 10.99</span>

                  <span className="-mt-3">
                    <AddToCartButton size={1} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;

async function getData(id) {
  const products = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );

  return products;
}

const TwoColumnRow = ({ leftContent, rightContent }) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full px-4 py-2 font-bold md:w-1/2">{leftContent}</div>
      <div className="w-full px-4 py-2 md:w-1/2">{rightContent}</div>
    </div>
  );
};
