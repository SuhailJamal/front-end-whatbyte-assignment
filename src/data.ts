interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}
const products: Product[] = [
  {
    id: 1,
    title: "Running Shoes",
    price: 99,
    image: "/images/runningshoes.jpeg",
    category: "Clothing",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 249,
    image: "/images/wirelessheadphones.jpeg",
    category: "Electronics",
  },
  {
    id: 3,
    title: "Backpack",
    price: 129,
    image: "/images/backpack.jpeg",
    category: "Clothing",
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 249,
    image: "/images/smartwatch.jpeg",
    category: "Electronics",
  },
  {
    id: 5,
    title: "Sunglasses",
    price: 149,
    image: "/images/sunglasses.jpeg",
    category: "Clothing",
  },
  {
    id: 6,
    title: "Digital Camera",
    price: 499,
    image: "/images/digitalcamera.jpeg",
    category: "Clothing",
  },
  {
    id: 7,
    title: "T-Shirt",
    price: 29,
    image: "/images/tshirt.jpeg",
    category: "Clothing",
  },
  {
    id: 8,
    title: "Smart Phone",
    price: 699,
    image: "/images/smartphone.jpeg",
    category: "Electronics",
  },
];

export default products;
