import Image from "next/image";
import Bell from "@icons/bell.svg";

export const Header = ({ inventory = 23000000 }) => {
  return (
    <div>
      <div className="flex ">
        <div></div>
        <div className="bg-primary-600 flex text-white w-fit px-1 flex-row-reverse rounded-[4px] gap-1">
          تومان
          <div>{inventory}</div>
          <span>موجودی : </span>
        </div>
        <Bell className="!w-[30px] !h-[30px]" />
      </div>
    </div>
  );
};
