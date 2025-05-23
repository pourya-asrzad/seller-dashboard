'use client'
import { useState } from "react";
import {InputOtp} from "@heroui/input-otp";
export default function OTP() {
    const [value, setValue] = useState("");
    return (
        <div className=" flex flex-col justify-between items-center h-screen  bg-[#FBFCFE]">
        <div className="flex flex-col  justify-between items-center gap-4 p-10 border border-gray-300
         mx-auto w-[533px] h-[633px] bg-white 
         rounded-lg  ">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-3xl font-medium text-primary-700">لینگومسترز</h1>
                <h2>ورود | ثبت نام</h2>
            </div>
             <form className="w-full">
            <div className="flex flex-col gap-4">
                <label className="text-sm text-gray-600"> کد تایید ارسال شده به شماره را وارد کنید</label>
                <div className="flex justify-center items-center w-full">
                    <InputOtp dir="ltr" length={6} size={"lg"} 
                    variant={"bordered"} value={value} onValueChange={setValue}
                    classNames={{
                    segment: ['flex', "p-7","rounded-xl"]
                    }}
                    />
                </div>

              <div className="flex flex-col justify-between items-start gap-4 pt-5">
                  <button className="text-sm text-primary-700 font-semibold pt-5">تغیر شماره موبایل</button>
                <div className="flex justify-between items-center gap-2">
                  <button className="text-sm text-gray-600">ارسال مجدد </button>
                  <span className="text-sm text-[#F3A218] ">2 : 20</span>
                </div>
                
            </div> 

            </div>
                  
            </form>
           
            <div className="flex justify-between items-center gap-4">
            <button  className="bg-gray-200 w-[28.31rem] h-[3rem] border-2 border-primary-700  
            text-primary-700 rounded-lg px-4 py-2 hover:bg-primary-700 hover:text-white">
                    ورود
            </button>
        </div>
        </div>
        </div>
    );
}