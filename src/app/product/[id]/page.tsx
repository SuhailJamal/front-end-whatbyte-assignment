import products from "@/data";

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
const {id} = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-10 p-8 bg-slate-100 min-h-[80vh]">
      <div className="flex-1 flex flex-col items-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-w-md h-96 object-contain rounded-lg shadow"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-xl text-green-700 font-semibold">${product.price}</p>
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a placeholder description for the product.</p>
        <p className="text-sm text-gray-500">Category: {product.category}</p>
        <button
          className="mt-6 bg-blue-900 text-white px-6 py-3 rounded font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}