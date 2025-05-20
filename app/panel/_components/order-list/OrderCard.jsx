import { Button, Card, Divider } from "@heroui/react";
import Image from "next/image";
import Category from "@icons/elements.svg";

export const OrderCard = ({
  category,
  productName,
  orderNumber,
  orderCount,
  phoneNumber,
  dateCreated,
  price,
  address,
  orderCode,
  productImage,
  customerName,
}) => {
  return (
    <Card className="max-w-[860px] shadow-none outline-none   border border-gray-200 p-4">
      <div className="grid-cols-4 grid-rows-2 grid gap-4">
        <div className="flex">
          <span className=" ml-1 text-xs">شماره سفارش :</span>
          <p className="text-sm  font-medium">{orderNumber}</p>
        </div>
        <div className="flex">
          <span className=" ml-1 text-nowrap  text-xs">تاریخ ثبت سفارش :</span>
          <p className="text-sm  font-medium">{dateCreated}</p>
        </div>
        <div className="flex">
          <span className=" ml-1 text-nowrap text-xs">کد پیگیری سفارش :</span>
          <p className="text-sm font-medium">{orderCode} </p>
        </div>
        <div className="flex">
          <span className=" ml-1 text-xs">مبلغ :</span>
          <p className="text-sm font-medium text-secondary-700">
            {price}
            تومان
          </p>
        </div>{" "}
        <div className="flex">
          <span className=" ml-1 text-xs">نام مشتری :</span>
          <p className="text-sm font-medium"> {customerName}</p>
        </div>
        <div className="flex">
          <span className=" ml-1 text-xs">شماره تماس : </span>

          <p className="text-sm font-medium">{phoneNumber}</p>
        </div>{" "}
        <div className=" ml-2 col-[3/5]">
          <span className=" ml-1 text-xs">آدرس :</span>
          <p className="text-sm inline font-medium">{address}</p>
        </div>{" "}
      </div>
      <Divider />

      <div className="flex gap-4 items-center my-2">
        <div>
          <Image src={productImage} alt="product" width={100} height={100} />
        </div>
        <div>
          <span></span>
          <div>
            <span className="text-xs">تعداد سفارش :</span>
            <p className="text-sm inline font-medium">
              {orderCount}
              عدد
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Category />
            {category}
          </div>
        </div>
      </div>
      <div className="flex gap-2 w-full justify-end">
        <Button className=" rounded-md " variant="bordered" color="danger">
          لغو سفارش
        </Button>
        <Button className="rounded-md bg-primary-600" color="primary">
          تایید سفارش
        </Button>
      </div>
    </Card>
  );
};
