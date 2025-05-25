import { FC } from "react";
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}
interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <div className="border w-[250px] bg-white rounded-lg">
      <img
        src={product.image}
        alt={product.title}
        className="h-32 w-full object-contain"
      />
      <div className="p-4">
        <h3 className="mt-2 font-semibold">{product.title}</h3>
        <p className="font-bold">${product.price}</p>
        <button className="bg-blue-900 text-white mt-2 w-full py-1 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
