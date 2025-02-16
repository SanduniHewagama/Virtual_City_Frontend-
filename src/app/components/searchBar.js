import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="relative">
        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search products, categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-96 pl-10 pr-10 py-2 rounded-lg border border-gray-300"
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery("")} className="absolute right-4">
            <FiX className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
