export default function Sidebar() {
  return (
    <div className="flex flex-col">
      <div className="bg-blue-900 w-[250px] rounded-lg p-4 mb-5 text-white ml-5">
        <h2 className="font-semibold mb-4">Filters</h2>
        <div>
          <h3 className="font-medium mb-2">Category</h3>
          <div className="space-y-2 flex flex-col">
            <label>
              <input type="radio" name="category" /> All
            </label>
            <label>
              <input type="radio" name="category" /> Electronics
            </label>
            <label>
              <input type="radio" name="category" /> Clothing
            </label>
            <label>
              <input type="radio" name="category" /> Home
            </label>
          </div>
          <h3 className="mt-4 font-medium mb-2">Price</h3>
          <input
            type="range"
            min={0}
            max={1000}
            className="w-full accent-white"
          />
        </div>
        <div className="flex justify-between items-center">
          <p>0</p>

          <p>1000</p>
        </div>
      </div>{" "}
      <div className="bg-white w-[250px] rounded-lg p-4 text-black ml-5">
        <h2 className="font-semibold mb-4">Filters</h2>
        <div>
          <h3 className="font-medium mb-2">Category</h3>
          <div className="space-y-2 flex flex-col">
            <label>
              <input type="radio" name="category" /> All
            </label>
            <label>
              <input type="radio" name="category" /> Electronics
            </label>
            <label>
              <input type="radio" name="category" /> Clothing
            </label>
            <label>
              <input type="radio" name="category" /> Home
            </label>
          </div>
          <h3 className="mt-4 font-bold mb-2">Price</h3>
          <input
            type="number"
            name="price"
            className="p-1 rounded-md outline-none border border-black "
          />
        </div>
      </div>
    </div>
  );
}
