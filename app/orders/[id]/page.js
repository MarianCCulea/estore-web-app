import React, { use } from "react";

async function OrderPage({ params }) {
  let order = use(getOrder(params.id));
  return (
    <div>
      <h2>{order.id}</h2>
    </div>
  );
}

async function getOrder(id) {
  let order = await fetch("");

  return order.json();
}

export default OrderPage;
