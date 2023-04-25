/* eslint-disable @next/next/no-img-element */
'use client';
import Zoom from 'app/Zoom';
import Order from 'app/components/order/Order';
import { useState } from 'react';

function TestingPage() {
  const base = {
    id: '14512',
    amount: `255$`,
    amountShipping: '25$',
    items: 23,
    timestamp: '1976-04-19T12:59-0500',
    images: [
      'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
      'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    ],
  };
  let links = [
    'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
    'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
  ];
  const [src, setSrc] = useState(links[0]);
  return (
    <div>
      <Zoom
        src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
        zoomSize={500}
      />

      <Order {...base} />
    </div>
  );
}

export default TestingPage;
