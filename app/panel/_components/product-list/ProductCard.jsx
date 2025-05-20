import { Badge, Button, Card, Chip, Divider } from "@heroui/react";
import Image from "next/image";
import Category from "@icons/elements.svg";
import ButtonIconEdit from "@icons/button-icon-edit.svg";

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
    <Card className="max-w-[410px] shadow-none outline-none   border border-gray-200 p-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <span className="text-xs ">کد محصول :</span>
          <p className="text-xs">1554545454</p>
        </div>
        <Chip color="success" variant="flat" className="text-xs ">
          تایید ادمین
        </Chip>
      </div>
      <div className="flex gap-4 items-center my-2 mt-4">
        <div className="w-20  overflow-hidden rounded-lg border h-20 border-gray-200">
          <Image src={productImage} alt="product" width={100} height={100} />
        </div>
        <div>
          <span className="text-sm">{productName}</span>
          <div>
            <span className="text-xs ml-2">تعداد موجودی :</span>
            <p className="text-sm inline font-medium ">
              {orderCount}
              عدد
            </p>
          </div>
          <div>
            <span className="text-xs ml-2"> قیمت :</span>
            <p className="text-sm inline font-medium">
              {price}
              تومان
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Category />
            {category}
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-xs "> وضعیت :</span>

          <Chip color="success" variant="flat" className="text-xs  p-0 h-6">
            فعال
          </Chip>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs "> تعداد فروش :</span>

          <p className="text-sm flex gap-1 font-medium">
            {orderCount}
            <span>عدد</span>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs "> مبلغ دریافتی :</span>

          <p className="text-sm  font-medium flex gap-1">
            {price}
            <span>تومان</span>
          </p>
        </div>
      </div>
      <Button
        startContent={<ButtonIconEdit />}
        className="text-primary-600 rounded-md mt-4"
        variant="bordered"
      >
        ویرایش محصول
      </Button>
    </Card>
  );
};
