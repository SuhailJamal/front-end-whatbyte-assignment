import { ShoppingCart, Search } from "lucide-react";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-blue-900 text-white p-2 md:p-4 px-2 md:px-14">
        <div className="font-bold text-lg md:text-4xl">Logo</div>
        <div className="flex justify-center gap-4 md:gap-10">
          <div className="flex justify-between items-center border border-white rounded-md bg-blue-900 h-10 md:h-12 px-3 w-[150px] md:w-[400px]">
            <Search className="hidden md:block text-white w-5 h-5 md:mr-2" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none text-slate-100 placeholder-slate-100 flex-1 md:text-xl text-sm"
            />
          </div>

          <div className="flex rounded-md bg-blue-950 px-3 md:px-5 py-2 text-white items-center space-x-4">
            <ShoppingCart />
            <p className="hidden md:block">Cart</p>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
