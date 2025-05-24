import AdminInfoCart from "./components/adminInfoCart";
import AccountCart from "./components/accountCart";
import AdminNav from "./components/adminNav";
export default function AdminLayout({ children }) {
  return (
            <div className="flex flex-row bg-gray-100">
            <aside className="bg-white rounded-xl m-2 py-4 w-1/5 flex flex-col h-screen items-start px-2 overflow-y-auto shadow-lg  ">
                <AdminInfoCart />
                <AdminNav />
                <AccountCart />
            </aside>
            <main className="flex-1  p-4 rounded-lg ">
                {children}
            </main>
        </div>
  );
}