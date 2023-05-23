'use client';
import Order from 'app/components/order/Order';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, selectOrders } from 'Redux/ordersSlice';

export default function Orders() {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const data = useSelector(selectOrders);
  const isLoading = useSelector((state) => state.orders.isLoading);

  useEffect(() => {
    if (session) {
      dispatch(fetchOrders(session.user.token));
    }
  }, [dispatch, session]);

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
