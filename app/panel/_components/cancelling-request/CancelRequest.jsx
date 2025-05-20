const { Button, Divider } = require("@heroui/react");

export const CancelRequest = () => {
  return (
    <div>
      <h2 className="font-bold mb-6">درخواست فوری تسویه</h2>
      <div className="flex  w-full gap-8">
        <div className="  w-[416px] flex flex-col justify-center rounded-lg  h-[218px]  px-4  bg-primary-300 gap-8  bg-[url('/images/Card-Mask.png')] bg-cover bg-center">
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

        <div
          className="relative  w-[416px]
h-[218px]   border border-gray-400  p-4 rounded-2xl bg-white overflow-hidden text-right"
        >
          {/* Simulated blue ambient shadow */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-40 h-8 bg-blue-400 blur-2xl rounded-full z-0" />

          {/* Content goes above the shadow */}
          <div className="relative justify-between h-full py-6 z-10 flex flex-col gap-3 ">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">تسویه شده تاکنون :</span>
              <span className="text-sm text-blue-700 font-bold hasToman">
                12000000
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">در حال تسویه :</span>
              <span className="text-sm text-yellow-500 font-bold hasToman">
                30000000
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">
                مالیات و کارمزد کسرشده تاکنون :
              </span>
              <span className="text-sm text-rose-500 font-bold hasToman">
                12400000
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
