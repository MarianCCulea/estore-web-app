import { use } from 'react';

async function OrderPage({ params }) {
  let order = use(getOrder(params.id));
  return (
    <div>
      <h2>{order.id}</h2>
    </div>
  );
}

async function getOrder(id) {
  let order = await fetch('', id);

  return order.json();
}

export default OrderPage;
