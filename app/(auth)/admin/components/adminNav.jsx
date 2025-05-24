import Link from "next/link";
import ElemntIcon from "@/public/icons/elements.svg"
import ProductsIcone from "@/public/icons/products.svg"
import Order from "@/public/icons/orders.svg"
import MaliIcone from "@/public/icons/mali.svg"
import EmtiyazIcone from "@/public/icons/emtiyaz.svg"
import TakhfifIcone from "@/public/icons/takhfif.svg"
import NazaratIcon from "@/public/icons/nazarat.svg"
import RahnamaIcone from "@/public/icons/rahnama.svg"
import PoshtibaniIcone from "@/public/icons/poshtibani.svg"


export default function AdminNav (){
    return(
            <nav className='flex flex-col space-y-4'>
               <Link href="/admin/dashboard" className="text-[#50545F]  flex gap-2 items-center text-lg
                hover:text-white rounded-2xl hover:bg-[#2D59C8]  px-3 py-2"> 
                     <ElemntIcon className="w-6 h-6" /> 
               <span> داشبورد </span>
               </Link>
               <Link href="/admin/"className="text-[#50545F]  flex gap-2 items-center text-lg
                hover:text-white rounded-2xl hover:bg-[#2D59C8]  ">
                    <ProductsIcone className="w-10 h-10"/>
                     <span>محصولات</span>
                  </Link>
               <Link href="/admin/" className="text-[#50545F]  flex gap-2 items-center text-lg
                hover:text-white rounded-2xl hover:bg-[#2D59C8]  px-2 py-2">
                    <Order className="w-6 h-6" />
                  <span>لیست سفارش ها</span>
                  </Link>
               <Link href="/admin/" className="text-[#50545F]  flex gap-2 items-center text-lg
                hover:text-white rounded-2xl hover:bg-[#2D59C8] ">
                    <MaliIcone className="w-10 h-10"/>
                     <span> مالی</span>
                  </Link>
               <Link href="/admin/" className="text-[#50545F]  flex gap-2 items-center text-lg
                hover:text-white rounded-2xl hover:bg-[#2D59C8]  ">
                     <EmtiyazIcone className="w-10 h-10" />
                     <span> امتیاز من</span>
                </Link>
                  <Link href="/admin/" className="text-[#50545F]  flex gap-2 items-center text-lg
                hover:text-white rounded-2xl hover:bg-[#2D59C8] ">
                     <TakhfifIcone className="w-10 h-10" />
                     <span> تخفیف ها </span>
                </Link>
                  <Link href="/admin/" className="text-[#50545F]  flex gap-2 items-center text-lg
                hover:text-white rounded-2xl hover:bg-[#2D59C8] ">
                     <NazaratIcon className="w-10 h-10" />
                     <span>  نظرات مشتریان</span>
                </Link>
                  <Link href="/admin/" className="text-[#50545F]  flex gap-2 items-center text-lg
                hover:text-white rounded-2xl hover:bg-[#2D59C8]  ">
                     <RahnamaIcone className="w-10 h-10" />
                     <span> راهنما</span>
                </Link>
                 <Link href="/admin/" className="text-[#50545F]  flex gap-2 items-center text-lg
                hover:text-white rounded-2xl hover:bg-[#2D59C8]  ">
                     <PoshtibaniIcone className="w-10 h-10" />
                     <span>پشتیبانی</span>
                </Link>

            </nav>
    )
}