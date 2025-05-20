"use client";

import { CancelRequest } from "./_components/cancelling-request/CancelRequest";
import { Header } from "./_components/layout/Header";
import { Notifications } from "./_components/notifications/Notifications";
import { OrderList } from "./_components/order-list/OrderList";
import { ProductList } from "./_components/product-list/ProductList";

export default function Home() {
  return (
    <main className="flex mt-6">
      <div className="w-full">
        <Header />
        <OrderList />
        <ProductList />
        <CancelRequest />
      </div>
      <Notifications />
    </main>
  );
}
