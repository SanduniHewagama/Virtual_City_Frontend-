"use client"; 
import { useState } from "react";
import SearchBar from "./searchBar";
import Categories from "./categories"; 
import Cart from "./cart"; 
import { FiShoppingCart } from "react-icons/fi";
import React from "react";

export default function HeaderService() {
  const [isCartOpen, setIsCartOpen] = useState(false); // State for cart visibility

  return (
    <header
      className="text-white p-4 shadow-md"
      style={{ backgroundImage: "url('/headerimage.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo and Subheading */}
        <div className="flex items-center space-x-20"> {/* Increased space */}
          <h1 className="text-xl font-bold">
            <span className="text-blue-500 text-3xl">Virtual</span>
            <span className="text-white text-3xl">City</span>
          </h1>
        </div>

        <span className="text-gray-100 text-sm ml-6">subheading</span>
        
        {/* Search Bar */}
        <div className="max-w-lg w-full"> {/* Full-width for max length */}
          <SearchBar />
        </div>

        {/* Cart & Profile */}
        <div className="flex items-center space-x-4 md:space-x-6 mr-2">

          {/* Cart */}
          <div className="relative">
            <button onClick={() => setIsCartOpen(!isCartOpen)} className="p-2">
              <FiShoppingCart className="h-6 w-6 text-gray-300 " />
            </button>
            {isCartOpen && <Cart />}
          </div>

          {/* Switch to Seller Button */}
          <button className="p-2 px-4 bg-white  text-blue-700 font-bold rounded hover:bg-blue-200">
            Switch to Seller
          </button>

          {/* User Profile */}
          <div className="w-8 h-8 bg-gray-500 rounded-full overflow-hidden">
            <img
              src="/images/headerimage.jpg" // Ensure this path is correct
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <Categories isService={true} />
      

      {/* Switch to Service Full-Width Button */}
      <div className="bg-blue-600 text-white text-center py-3 font-bold text-lg mt-2 cursor-pointer hover:bg-blue-700">
        Switch To Product →
      </div>
    </header>
  );
}
