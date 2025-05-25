"use client";
import { ShoppingCart, Search, User } from "lucide-react";
import { useState } from "react";
import SearchPopUp from "./SearchPopUp";
import Link from "next/link";
const Header = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <SearchPopUp search={search} />
      <nav className="flex justify-between items-center bg-blue-900 text-white p-2 md:p-4 px-2 md:px-14">
        <Link href="/">
          <div className="font-bold text-lg md:text-4xl">Logo</div>
        </Link>
        <div className="flex justify-between items-center border border-white rounded-md bg-blue-900 h-10 md:h-12 px-3 w-[150px] md:w-[400px]">
          <Search className="hidden md:block text-white w-5 h-5 md:mr-2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products..."
            className="bg-transparent outline-none text-white placeholder-slate-100 flex-1 md:text-xl text-sm"
          />
        </div>
        <div className="flex justify-center gap-2 items-center">
          <Link href="/cart">
            <div className="flex rounded-md bg-blue-950 px-3 md:px-5 py-3 text-white items-center space-x-4">
              <ShoppingCart />
              <p className="hidden md:block">Cart</p>
            </div>
          </Link>
          <User />
        </div>
      </nav>
    </>
  );
};
export default Header;
