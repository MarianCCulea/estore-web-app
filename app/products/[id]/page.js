import Header from "app/Header";
import React, { use } from "react";
import Image from "next/image";
import AddToCartButton from "app/AddToCartButton";

function ProductPage({ params }) {
  let product = use(getData(params.id));
  return (
    <div>
      <Header />
      <section class=" body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -my-8">
            <div class="py-8 px-4 lg:w-1/3  bg-gray-600">
              <div class="h-full flex items-start bg-gray-500">
                <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none bg-white">
                  <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                    Jul
                  </span>
                  <span class="font-medium text-lg text-gray-800 title-font leading-none">
                    18
                  </span>
                </div>
                <div class="flex-grow pl-6 bg-white">
                  <Image
                    src={product.image}
                    alt=""
                    height={200}
                    width={200}
                    className="object-contain "
                  />
                </div>
              </div>
            </div>{" "}
            <div class="py-8 px-4 lg:w-1/3  bg-gray-600">
              <div class="h-full flex items-start bg-gray-500">
                <div class="flex-grow pl-6 bg-white">
                  <h1 className="text-3xl ">{product.description}</h1>
                </div>
              </div>
            </div>
            <div class="py-8 px-4 lg:w-1/3  bg-gray-600">
              <div class="h-full  border-black  rounded-2xl border-2 flex items-start bg-gray-500">
                <div class="flex-grow px-6  text-2xl rounded-2xl bg-white">
                  <h1>{product.price} $</h1>
                  <h1>
                    FREE delivery Tuesday, March 7 on eligible first order
                  </h1>

                  <a class="inline-flex items-center">
                    <img
                      alt="blog"
                      src="https://dummyimage.com/103x103"
                      class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-3">
                      <span class="title-font font-medium text-gray-900">
                        Deliver To Denmark
                      </span>
                    </span>
                  </a>

                  <h1 className="text-green-600 font-xl">In stock</h1>
                  <a class="inline-flex items-center">
                    <span>Quantity: </span>
                    <span class="flex-grow flex flex-col pl-3">
                      <span class="title-font font-medium text-gray-900">
                        1
                      </span>
                    </span>
                  </a>
                  <div>
                    <AddToCartButton />
                  </div>
                  <div>
                    <AddToCartButton />
                  </div>

                  <div class="flex-grow border-t border-gray-400"></div>
                  <a class="inline-flex items-center">
                    <input type="checkbox" />
                    <span class="flex-grow flex flex-col pl-3">
                      <span class="title-font font-medium text-gray-900">
                        Gift wrap
                      </span>
                    </span>
                  </a>
                  <div class="flex-grow border-t border-gray-400"></div>
                  <div class="">
                    Return policy: Returnable within 30 days of receipt
                  </div>
                  <div class="">
                    Return policy: Returnable within 30 days of receipt
                  </div>
                  <div class="">
                    Return policy: Returnable within 30 days of receipt
                  </div>
                  <div class="">
                    Return policy: Returnable within 30 days of receipt
                  </div>
                </div>
              </div>

              <div class="h-full  border-black  rounded-2xl border-2 flex items-start bg-gray-500">
                <div class="flex-grow px-6  text-2xl rounded-2xl bg-white">
                  <h1>{product.price} $</h1>
                  <h1>
                    FREE delivery Tuesday, March 7 on eligible first order
                  </h1>

                  <a class="inline-flex items-center">
                    <img
                      alt="blog"
                      src="https://dummyimage.com/103x103"
                      class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-3">
                      <span class="title-font font-medium text-gray-900">
                        Deliver To Denmark
                      </span>
                    </span>
                  </a>

                  <h1 className="text-green-600 font-xl">In stock</h1>
                  <a class="inline-flex items-center">
                    <span>Quantity: </span>
                    <span class="flex-grow flex flex-col pl-3">
                      <span class="title-font font-medium text-gray-900">
                        1
                      </span>
                    </span>
                  </a>
                  <div>
                    <AddToCartButton />
                  </div>
                  <div>
                    <AddToCartButton />
                  </div>

                  <div class="flex-grow border-t border-gray-400"></div>
                  <a class="inline-flex items-center">
                    <input type="checkbox" />
                    <span class="flex-grow flex flex-col pl-3">
                      <span class="title-font font-medium text-gray-900">
                        Gift wrap
                      </span>
                    </span>
                  </a>
                  <div class="flex-grow border-t border-gray-400"></div>
                  <div class="">
                    Return policy: Returnable within 30 days of receipt
                  </div>
                  <div class="">
                    Return policy: Returnable within 30 days of receipt
                  </div>
                  <div class="">
                    Return policy: Returnable within 30 days of receipt
                  </div>
                  <div class="">
                    Return policy: Returnable within 30 days of receipt
                  </div>
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
