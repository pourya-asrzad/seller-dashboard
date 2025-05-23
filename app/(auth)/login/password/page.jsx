import Link from "next/link";
import { Line } from "recharts";

export default function Password() { 
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
                <label className="text-sm text-gray-600">رمز عبور</label>
                   <input
                    type="text"
                    placeholder="رمز عبور"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none w-[28.3125rem] "
                    />

              <div className="flex flex-col justify-between items-start gap-4 pt-5">
                  <Link href={'/login/forget-password'} className="text-sm text-gray-700 hover:text-gray-900 font-semibold pt-5"> فراموشی رمز </Link>
                  <button className="text-sm text-primary-700  font-semibold pt-5">تغیر شماره موبایل</button>
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