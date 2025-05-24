import { ShoppingCart, Search } from "lucide-react";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-blue-900 text-white p-4 px-14">
        <div className="font-bold text-lg md:text-4xl">Logo</div>
        <div className="flex justify-center gap-10">
          <div className="flex items-center border border-white rounded-md bg-blue-900 h-12 px-3 w-[400px]">
            <Search className="text-white w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none text-slate-100 placeholder-slate-100 flex-1"
            />
          </div>

          <div className="flex rounded-md bg-blue-950 px-5 py-2 text-white items-center space-x-4">
            <ShoppingCart />
            <p>Cart</p>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
