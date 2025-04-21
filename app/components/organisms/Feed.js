/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Product from "../molecules/Product";

async function Feed() {
  try {
    const products = await getData();
    return (
      <div className="grid grid-flow-row-dense mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">

        {products.slice(0, 4).map((product) => (
          <Product key={product.id} {...product} />
        ))}
        <div className="md:col-span-full">
          <Image
            src="https://links.papareact.com/dyz"
            alt="Promotional banner"
            width={1800}
            height={300}
            className="w-full"
            priority // Important for above-the-fold images
          />
        </div>

        <div className="md:col-span-2">
          {products.slice(4, 5).map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>

        {products.slice(5, products.length).map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Failed to load products:", error);
    return (
      <div className="text-center py-10">
        <p>Failed to load products. Please try again later.</p>
      </div>
    );
  }
}

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export default Feed;
