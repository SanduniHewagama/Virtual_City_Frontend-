"use client";

import HeaderProduct from "./components/headerProduct";
import { FiSearch, FiX } from "react-icons/fi";
import HeaderService from "./components/headerService";



const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search products, categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300"
        />
        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        {searchQuery && (
          <button onClick={() => setSearchQuery("")} className="absolute right-4">
            <FiX className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};
export default function Home() {
  return (
    <div className="flex-col items-center min-h-screen">
      <HeaderProduct />
      <HeaderService />
      <main className="p-4">
        <h2>Welcome to My Website</h2>
      </main>
       {/* <Button label="Click Me" onClick={() => alert('Button Clicked!')} /> */}
    </div>
  );
}
