/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Product from "./Product";

async function Feed() {
  const products = await getData();
  return (
    <div className="grid grid-flow-row-dense mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
      {products.slice(0, 4).map((product) => (
        <Product key={product.id} {...product} />
      ))}
      <Image
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
        width={1800}
        height={300}
      />
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
}

async function getData() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return products;
}

export default Feed;
