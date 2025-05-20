"use client";

import { Header } from "./_components/layout/Header";
import { OrderList } from "./_components/order-list/OrderList";

export default function Home() {
  return (
    <main>
      <Header />
      <OrderList />
    </main>
  );
}
