"use client";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import products from "@/data";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
export default function HomeContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const price = searchParams.get("price");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filterPrice, setFilterPrice] = useState<number>(1000);
  useEffect(() => {
    if (typeof category === "string") setSelectedCategory(category);
    if (typeof price === "string") {
      const priceRange = price.split("-"); // e.g., "0-1000"
      if (priceRange[1]) setFilterPrice(Number(priceRange[1]));
    }
  }, [category, price]);
  const filteredProducts = products.filter((val) => {
    const categoryMatch = selectedCategory === "all" || val.category === selectedCategory;
    const priceMatch = val.price <= filterPrice;
    return categoryMatch && priceMatch;
  });

  return (
    <div className="bg-slate-100 flex flex-row pt-10 pb-5">
      <Sidebar
        category={selectedCategory}
        setCategory={setSelectedCategory}
        filterPrice={filterPrice}
        setFilterPrice={setFilterPrice}
      />
      <div className="pl-5">
        <h2 className="text-3xl font-bold mb-2">Product Listing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((val) => (
              <ProductCard key={val.id} product={val} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
