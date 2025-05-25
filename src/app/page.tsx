import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import products from "@/data";
export default function Home() {
  return (
    <div className="bg-slate-100 flex flex-row pt-10 pb-5">
      <Sidebar />
      <div className="pl-5">
        <h2 className="text-3xl font-bold mb-2">Product Listing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((val) => (
            <ProductCard key={val.id} product={val} />
          ))}
        </div>
      </div>
    </div>
  );
}
