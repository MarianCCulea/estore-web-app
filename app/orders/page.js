'use client';
import Order from 'app/components/order/Order';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function Orders() {
  const { data: session } = useSession();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3005/orders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${session.user.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <main className="max-w-screen-lg p-10 mx-auto">
        <h1 className="pb-1 mb-2 text-3xl border-b border-yellow-400">
          Your Orders
        </h1>
        {session ? <h2>{data.length} Orders</h2> : <h2>Please Sign in</h2>}
        <div className="mt-5 space-y-4 ">
          {data?.map((order, i) => (
            <Order {...order} key={i} />
          ))}
        </div>
      </main>
    </div>
  );
}
