"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Next.js optimized Image component

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Wireless Earbuds", price: "$129.99", image: "/earbuds.jpg" },
    { id: 2, name: "Smart Watch", price: "$199.99", image: "/watch.jpg" },
  ];

  return (
    <motion.div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">Cart Items</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-4 mb-4">
            {/* Using Next.js Image for better performance */}
            <Image
              src={item.image}
              alt={item.name}
              width={64}
              height={64}
              className="h-16 w-16 object-cover rounded"
            />
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Cart;
