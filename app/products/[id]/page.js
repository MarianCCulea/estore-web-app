import Header from "app/Header";
import React, { use } from "react";
import Image from "next/image";

function ProductPage({ params }) {
  let product = use(getData(params.id));
  return (
    <div>
      <Header />
      <div className="max-w-screen-xl pt-2 mx-auto">
        <div>asdasdasdsa</div>
        <div className="flex pt-2">
          <Image
            src={product.image}
            alt=""
            height={200}
            width={200}
            className="flex self-center object-contain "
          />
          <div className="flex bg-red-400">{product.description}</div>
          <div className="flex bg-red-500">sad saddddddddddd</div>
        </div>
      </div>
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
