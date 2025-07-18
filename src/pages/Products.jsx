import React from 'react';

const products = [
  {
    name: "Tapi R",
    slug: "tapi-r",
    image: "https://solex.in/wp-content/uploads/2025/02/Tapi-RSOLEX-1920X920-100.jpg",
  },
  {
    name: "Tapi Trans",
    slug: "tapi-trans",
    image: "https://solex.in/wp-content/uploads/2025/02/Tapi-TransSOLEX-1920X920_1-100.jpg",
  },
  {
    name: "Tapi Series",
    slug: "tapi-series",
    image: "https://solex.in/wp-content/uploads/2025/02/Tapi-SeriesSOLEX-1920X920_2-100.jpg",
  },
  {
    name: "Tapi Black",
    slug: "tapi-black",
    image: "https://solex.in/wp-content/uploads/2025/02/Tapi-Black-SOLEX-1920X920_3-100.jpg",
  },
  {
    name: "Ganga",
    slug: "ganga",
    image: "https://solex.in/wp-content/uploads/2025/02/SOLEX-1920X920_4-100_GANGA.webp",
  },
];

import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div className="bg-white text-black max-w-6xl mx-auto py-12 px-4 mt-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((prod) => (
          <div key={prod.slug} className="bg-gray-100 rounded-lg shadow p-4 flex flex-col items-center">
            <img src={prod.image} alt={prod.name} className="w-full h-48 object-cover rounded mb-4" />
            <h2 className="text-xl font-bold mb-2">{prod.name}</h2>
            <Link to={`/products/${prod.slug}`} className="text-orange-500 hover:underline font-semibold mt-2">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
} 