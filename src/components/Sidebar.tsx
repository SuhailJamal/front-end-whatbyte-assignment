interface sideBarProps {
  category: string;
  setCategory: (value: string) => void;
  filterPrice: number;
  setFilterPrice: (value: number) => void;
}
export default function Sidebar({
  category,
  setCategory,
  filterPrice,
  setFilterPrice,
}: sideBarProps) {
  return (
    <div className="flex flex-col">
      <div className="bg-blue-900 hidden md:block md:w-[250px] rounded-lg p-4 mb-5 text-white ml-5">
        <h2 className="font-semibold mb-4">Filters</h2>
        <div>
          <h3 className="font-medium mb-2">Category</h3>
          <div className="space-y-2 flex flex-col">
            <label>
              <input
                type="radio"
                name="category"
                value="all"
                checked={category === "all"}
                onChange={() => setCategory("all")}
              />{" "}
              All
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="electronics"
                checked={category === "electronics"}
                onChange={() => setCategory("electronics")}
              />{" "}
              Electronics
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="clothing"
                checked={category === "clothing"}
                onChange={() => setCategory("clothing")}
              />{" "}
              Clothing
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="home"
                checked={category === "home"}
                onChange={() => setCategory("home")}
              />{" "}
              Home
            </label>
          </div>
          <input
            type="range"
            min={0}
            max={1000}
            value={filterPrice}
            onChange={(e) => setFilterPrice(Number(e.target.value))}
            className="w-full accent-white"
          />{" "}
          <div className="flex justify-between items-center">
            <p>0</p>

            <p>1000</p>
          </div>
        </div>
      </div>{" "}
      <div className="bg-white hidden md:block md:w-[250px] rounded-lg p-4 text-black ml-5">
        <h2 className="font-semibold mb-4">Filters</h2>
        <div>
          <h3 className="font-medium mb-2">Category</h3>
          <div className="space-y-2 flex flex-col">
            <label>
              <input
                type="radio"
                name="category"
                value="all"
                checked={category === "all"}
                onChange={() => setCategory("all")}
              />{" "}
              All
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="electronics"
                checked={category === "electronics"}
                onChange={() => setCategory("electronics")}
              />{" "}
              Electronics
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="clothing"
                checked={category === "clothing"}
                onChange={() => setCategory("clothing")}
              />{" "}
              Clothing
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="home"
                checked={category === "home"}
                onChange={() => setCategory("home")}
              />{" "}
              Home
            </label>
          </div>
          <h3 className="mt-4 font-bold mb-2">Price</h3>
          <input
            type="number"
            name="price"
            min="0"
            max="1000"
            value={filterPrice}
            onChange={() => setFilterPrice(Number(filterPrice))}
            className="p-1 rounded-md outline-none border border-black "
          />
        </div>
      </div>
    </div>
  );
}
