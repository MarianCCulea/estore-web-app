import Header from "app/Header";
import React, { use } from "react";
import Image from "next/image";
import AddToCartButton from "app/AddToCartButton";

import { MapPinIcon } from "@heroicons/react/24/outline";

function ProductPage({ params }) {
  let product = use(getData(params.id));
  return (
    <div>
      <Header />
      <section class="container px-5 py-12 mx-auto ">
        <div class="flex flex-wrap  justify-between space-x-6">
          <div class="grow ">
            <div class="h-full flex items-start bg-gray-500">
              <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none bg-white">
                <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                  Jul
                </span>
                <span class="font-medium text-lg text-gray-800 title-font leading-none">
                  18
                </span>
                <span>Jul</span>
                <span>Jul</span>
                <span>Jul</span>
              </div>
              <div class="flex-grow pl-6 bg-white">
                <Image
                  src={product.image}
                  alt=""
                  height={500}
                  width={500}
                  className="object-contain "
                />
              </div>
            </div>
          </div>{" "}
          <div class=" grow">
            <div class="h-full flex items-start  bg-gray-500">
              <div class="pl-6 bg-white">
                <h1 className="text-3xl ">{product.title}</h1>
              </div>
              <div>{product.category}</div>
            </div>
          </div>
          <div class=" grow-0 space-y-4 w-72 ">
            <div class=" border-gray-400 rounded-2xl border-2 flex items-start bg-gray-500">
              <div class="flex-grow px-4 py-2 space-y-2 text-2xl rounded-2xl bg-white">
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

                <a class="inline-flex items-center text-base">
                  <MapPinIcon class="w-5 h-5 flex-shrink-0 object-cover object-center" />
                  <span class="flex-grow flex flex-col pl-3">
                    <span class="title-font font-medium text-gray-900">
                      Deliver To Denmark
                    </span>
                  </span>
                </a>

                <h1 className="text-2xl text-green-600">In stock</h1>
                <a class="inline-flex items-center  text-base">
                  <span>Quantity: </span>
                  <span class="flex-grow flex flex-col pl-3">
                    <span class="title-font font-medium text-gray-900">1</span>
                  </span>
                </a>
                <div className="text-center">
                  <AddToCartButton />
                </div>
                <div className="text-center">
                  <AddToCartButton />
                </div>

                <div class="flex-grow border-t border-gray-400"></div>
                <div className="text-sm text-blue-700 ">Details</div>

                <h1 className="text-base">
                  <span className="">Return policy: </span>

                  <span className="text-blue-700 ">
                    Returnable within 30 days of receipt
                  </span>
                </h1>

                <h1 class="inline-flex items-center text-base">
                  <input type="checkbox" />
                  <span class="flex-grow flex flex-col pl-3">
                    <span class="title-font font-medium text-gray-900">
                      Add gift options
                    </span>
                  </span>
                </h1>
                <div class="flex-grow border-t border-gray-400"></div>
                <div class="">
                  <button className="w-full py-1 pl-2 text-base text-left border-2 border-gray-800 rounded-lg">
                    Add to List
                  </button>
                </div>
              </div>
            </div>

            <div class=" border-gray-400  rounded-2xl border-2 flex items-start bg-gray-500">
              <div class="flex-grow px-6 py-4  space-y-2 text-2xl rounded-2xl bg-white">
                <h1 className="text-base font-bold text-center">
                  Add an Accessory:
                </h1>
                <div class="flex-grow border-t border-gray-400"></div>
                <h2 className="text-sm text-blue-700 line-clamp-3">
                  deleyCON 2 m 8K UHD-II HDMI 2.1 Nylon Cable 4320p 2160p 8K @
                  60Hz 4K @ 120Hz 7680x4320p Metal Connector Dolby DTS HDR eARC
                  CEC HDTV EthernetdeleyCON 2 m 8K UHD-II HDMI 2.1 Nylon Cable
                  4320p 2160p 8K @ 60Hz 4K @ 120Hz 7680x4320p Me…
                </h2>

                <div class="flex  justify-between ">
                  <span class="text-red-500 -mt-1 text-base">$ 10.99</span>

                  <span class="-mt-3">
                    <AddToCartButton size={1} />
                  </span>
                </div>
                <div class="flex-grow border-t border-gray-400"></div>

                <h2 className="text-sm text-blue-700 line-clamp-3">
                  deleyCON 2 m 8K UHD-II HDMI 2.1 Nylon Cable 4320p 2160p 8K @
                  60Hz 4K @ 120Hz 7680x4320p Metal Connector Dolby DTS HDR eARC
                  CEC HDTV EthernetdeleyCON 2 m 8K UHD-II HDMI 2.1 Nylon Cable
                  4320p 2160p 8K @ 60Hz 4K @ 120Hz 7680x4320p Me…
                </h2>

                <div class="flex  justify-between ">
                  <span class="text-red-500 -mt-1 text-base">$ 10.99</span>

                  <span class="-mt-3">
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
