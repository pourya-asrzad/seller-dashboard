const { Button, Divider } = require("@heroui/react");

export const CancelRequest = () => {
  return (
    <div>
      <h2 className="font-bold mb-6">درخواست فوری تسویه</h2>
      <div className="  max-w-[416px] flex flex-col justify-center rounded-lg w-full h-[218px]  px-4  bg-primary-300 gap-8  bg-[url('/images/Card-Mask.png')] bg-cover bg-center">
        <div className="flex justify-between items-center">
          <span className="text-sm ">موجودی</span>

          <p className="text-sm hasToman  font-medium flex gap-1">1200000</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium ">موجودی قابل برداشت </span>

          <p className="text-sm  hasToman font-medium flex gap-1 text-success-700">
            8000000
          </p>
        </div>
        <Divider className="bg-white" />
        <Button className="bg-primary-500 text-white rounded-md effect-1">
          درخواست تسویه
        </Button>
      </div>
    </div>
  );
};
