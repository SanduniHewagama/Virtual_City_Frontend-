"use client";
import React from "react";

const Categories = ({ isService }) => {
  const categoriesInProduct = [
    { name: "Electronics" },
    { name: "Fashion" },
    { name: "Beauty" },
    { name: "Toys" },
    { name: "Home Things" },
    { name: "Sports" },
    { name: "Baby" },
    { name: "Help & Support" },
  ];

  const categoriesInService = [
    { name: "Restaurant" },
    { name: "Laundry" },
    { name: "Salon" },
    { name: "Rooms" },
    { name: "Vehicle" },
    { name: "Decorations" },
    { name: "Help & Support" },
  ];

  // Choose categories based on the prop
  const categoriesToDisplay = isService ? categoriesInService : categoriesInProduct;

  return (
    <div className="bg-black py-3">
      <div className="container mx-auto px-4">
        <div className="flex justify-between space-x-6 overflow-x-auto">
          {categoriesToDisplay.map((category) => (
            <button
              key={category.name}
              className="text-white hover:text-blue-500 w-full text-center font-semibold"
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
