import ArrowLeft from "@icons/button-icon.svg";
import TestImage from "@images/test.png";
import { OrderCard } from "./OrderCard";
import { Tab, Tabs } from "@heroui/react";
const orderData = [
  {
    category: "کتاب",
    productName: "کتاب طلسم مکالمه ( پکیج ۵ تایی)",
    orderNumber: 124879653,
    orderCount: 1,
    phoneNumber: "09380842730",
    dateCreated: "1402/01/01",
    price: 400000,
    address: `تهران ، میدان دانشجو ، خیابان سرو ، کوچه بهشت ، پلاک 56 ، طبقه 12، واحد 34`,
    orderCode: "123456789",
    productImage: TestImage,
    customerName: "محمد حسینی",
  },
  {
    category: "کتاب",
    productName: "کتاب طلسم مکالمه ( پکیج ۵ تایی)",
    orderNumber: 124879653,
    orderCount: 1,
    phoneNumber: "09380842730",
    dateCreated: "1402/01/01",
    price: 400000,
    address: `تهران ، میدان دانشجو ، خیابان سرو ، کوچه بهشت ، پلاک 56 ، طبقه 12، واحد 34`,
    orderCode: "123456789",
    productImage: TestImage,
    customerName: "محمد حسینی",
  },
];
export const OrderList = () => {
  return (
    <div id="order-list">
      <div className="flex  justify-between items-center mx-6">
        <h1>لیست سفارشات جاری</h1>
        <div className="flex items-center gap-2">
          <h2 className="text-primary-700 ">مشاهده همه سفارشات</h2>
          <ArrowLeft />
        </div>
      </div>
      <Tabs
        aria-label="Tabs variants"
        variant="underlined"
        fullWidth
        classNames={{
          tabList: "border-b pb-0 gap-2 w-full",
          cursor: "shadow-none w-full",
          tabContent: "w-full sm:text-sm text-xs",
          tab: "py-4 h-fit ",
          panel: "w-full",
        }}
        style={{
          "--heroui-success": "38 87% 56%",
        }}
        color="success"
      >
        <Tab key="waiting-list" title="سفارش های منتظر تایید">
          <div className="flex flex-col gap-4 mt-4">
            {orderData.map((order, index) => {
              return <OrderCard key={index} {...order} />;
            })}
          </div>
        </Tab>

        <Tab key="orders-ready-to-deliver" title=" سفارش های آماده ارسال">
          <div className="flex flex-col gap-4 mt-4">
            {orderData.map((order, index) => {
              return <OrderCard key={index} {...order} />;
            })}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
