"use client";

import { CancelRequest } from "./_components/cancelling-request/CancelRequest";
import { Header } from "./_components/layout/Header";
import { OrderList } from "./_components/order-list/OrderList";
import { ProductList } from "./_components/product-list/ProductList";

export default function Home() {
  return (
    <main>
      <Header />
      <OrderList />
      <ProductList />
      <CancelRequest />
    </main>
  );
}
