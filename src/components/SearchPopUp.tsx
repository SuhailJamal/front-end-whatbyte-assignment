import products from "@/data";
import Link from "next/link";

export default function SearchPopUp({ search }: { search: string }) {
  if (!search) return null;
  const searchTerm = search.toLowerCase();
  const filtered = products.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm),
  );
  return (
    <div className="absolute top-[70px] left-[60%] w-auto bg-white border rounded z-50 max-h-90 overflow-y-auto">
      {filtered.length === 0 ? (
        <div className="p-4 text-gray-500">No results found.</div>
      ) : (
        filtered.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="block px-4 py-2 bg-slate-100 border-b "
          >
            <div className="flex items-center gap-3">
              <img
                src={product.image}
                alt={product.title}
                className="w-10 h-16 object-cover rounded"
              />
              <div>
                <div className="font-semibold">{product.title}</div>
                <div className="text-sm text-gray-500">${product.price}</div>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
