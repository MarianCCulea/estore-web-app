import Header from 'app/Header';
import Order from 'app/Order';
import { useSession } from 'next-auth/react';

function Orders() {
  let orders = getData(session.user);
  const { data: session } = useSession();

  return (
    <div>
      <Header />
      <main className="max-w-screen-lg p-10 mx-auto">
        <h1 className="pb-1 mb-2 text-3xl border-b border-yellow-400">
          Your Orders
        </h1>
        {session ? <h2>X Orders</h2> : <h2>Please Sign in</h2>}

        <div className="mt-5 space-y-4 ">
          {orders?.map((order, i) => (
            <Order key={i} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Orders;

async function getData(user) {
  const res = await fetch('http://localhost:3005/orders', {
    method: 'GET',

    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${user.token}`,
    },
  });
  const orderrs = await res.json();

  return orderrs;
}
