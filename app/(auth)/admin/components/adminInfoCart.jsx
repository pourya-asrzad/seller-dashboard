import LingoMasters from "@/public/images/LingoMasters.jpg"
import adminImage from "@/public/images/Avatars.png"
import Image from "next/image";
import EditIcone from "@/public/icons/button-icon-edit.svg"
import StarIcone from "@/public/icons/star.svg"
export default function AdminInfoCart() {
  return (
    <div className="flex flex-col items-center justify-center ">
       <Image src={LingoMasters} alt="Lingo Masters" className="p-3" width={200} height={200} />
        <div className="bg-[#F0F6FE] rounded-2xl w-[13.5rem] h-auto flex flex-col items-center
         justify-center gap-1 my-2">
            <div>
                <Image src={adminImage} alt="Admin Info" className="p-1" width={60} height={60} />
            </div>
            <div className="flex items-center font-bold justify-center">
                <span>سعید اسدی</span>
                <span>
                    <EditIcone className="w-4 h-4 mr-2" />
                </span>
            </div>
            <div className="flex items-center gap1">
                <span> امتیاز:</span>
                    <StarIcone className="w-16" />
            </div>
            <div>
                <span>  سابقه:</span>
                <span className="font-semibold">1سال و5 ماه</span>
            </div>
            <div className="flex items-center gap-1 mb-1">
                <span>  احراز هویت:</span>
                <span className="rounded-md bg-[#DAFEE5] text-[#0F973D] p-1 w-auto h-auto"> تایید شده </span>
            </div>
        </div>
    </div>
  );
}