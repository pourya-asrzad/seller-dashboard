import Link from "next/link";

const Login = () => {
  return (
    <div className=" flex flex-col justify-center items-center h-screen  bg-[#FBFCFE]">
      <div className="flex flex-col  justify-between items-center gap-4 p-10 border border-gray-300
       mx-auto w-[533px] h-[633px] bg-white 
       rounded-lg  ">
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-medium text-primary-700">لینگومسترز</h1>
            <h2>ورود | ثبت نام</h2>

          <form className="mt-8">
          <div className="flex flex-col gap-4">
            <label className="text-sm text-gray-600">تلفن همراه یا ایمیل خود را وارد کنید</label>
            <input
              type="text"
              placeholder="ایمیل"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none w-[28.3125rem] "
            />
          </div>
        </form>
        </div>
      
        
        <div className="flex justify-between items-center gap-4">
          <Link href={'/login/otp'} className="bg-gray-200 w-[13.375rem] h-[3rem] border-2 border-primary-700  
          text-primary-700 rounded-lg px-4 py-2 hover:bg-primary-700 hover:text-white">
            ارسال کد 
          </Link>
          <button  className="bg-gray-200 w-[13.375rem] h-[3rem] border-2 border-primary-700  
          text-primary-700 rounded-lg px-4 py-2 hover:bg-primary-700 hover:text-white">
            ورودبا رمز عبور
          </button>
      </div>
    </div>
    </div>
  );
};
export default Login;
