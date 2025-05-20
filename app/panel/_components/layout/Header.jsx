import Image from "next/image";
import Bell from "@icons/bell.svg";
import User from "@images/Avatars.png";

export const Header = ({ inventory = 23000000 }) => {
  return (
    <div className="flex  mx-6  justify-between rounded-2xl   py-6  px-5 items-center  border border-gray-200 bg-white ">
      <h2>داشبورد</h2>
      <div className="flex gap-2  items-center">
        <div className="bg-primary-600 flex text-white w-fit px-4 h-8 flex-row-reverse rounded-sm   gap-1 items-center justify-center">
          تومان
          <div>{inventory}</div>
          <span>موجودی : </span>
        </div>
        <Bell style={{ width: "24px", height: "24px" }} />

        <div>
          <Image
            src={User}
            alt="user"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
