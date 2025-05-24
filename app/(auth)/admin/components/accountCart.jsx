import { Button } from "@heroui/react";

export default function AccountCart() { 
    return(
        
                <div className="bg-[#F5F7F8] rounded-2xl w-[13.5rem] h-auto flex flex-col items-center
                 justify-center gap-3 my-2 p-3">
                    <div className="flex w-full items-center justify-between bg-[#DEEBFB] p-2 rounded-xl">
                        <span className="font-bold "> پلن یک ماهه </span>
                        <span className="text-[#0F973D]">رایگان</span>
                    </div>
                    <div className="flex w-full items-center justify-between  rounded-xl">
                        <span className="text-sm">تعداد روزهای باقی مانده:</span>
                        <span className="font-bold">20روز</span>
                    </div>
                    <Button className="text-white bg-[#366CDA] w-full">طرح های عضویت</Button>
                </div>
            
    )
}