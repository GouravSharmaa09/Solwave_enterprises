import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const products = [
  {
    name: "Tapi R",
    slug: "tapi-r",
    image: "https://solex.in/wp-content/uploads/2025/02/Tapi-RSOLEX-1920X920-100.jpg",
    type: "N-Type TOPcon Technology",
    wattage: "595 – 610 W",
    efficiency: "23.14%",
    warranty: "12 Years (Product), 30 Years (Performance)",
    cells: "132 Half Cut Cell",
    details: [
      "Advanced N-Type TOPcon cell technology for higher efficiency.",
      "Excellent low-light performance.",
      "Durable design for harsh weather conditions.",
      "PID & LID resistance for long-term reliability."
    ],
    uses: [
      {
        step: "Step 1: Site Assessment",
        desc: "Evaluate your rooftop or land for optimal solar installation.",
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: "Step 2: Installation",
        desc: "Professional installation of Tapi R panels by certified engineers.",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: "Step 3: Power Generation",
        desc: "Start generating clean, renewable energy for your home or business.",
        img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    name: "Tapi Trans",
    slug: "tapi-trans",
    image: "https://solex.in/wp-content/uploads/2025/02/Tapi-TransSOLEX-1920X920_1-100.jpg",
    type: "N-Type Dual Glass Module",
    wattage: "560 – 585 W",
    efficiency: "22.83%",
    warranty: "12 Years (Product), 30 Years (Performance)",
    cells: "144 Half Cut Cell",
    details: [
      "Dual glass design for enhanced durability.",
      "High power output and efficiency.",
      "Ideal for large-scale and commercial projects.",
      "Excellent fire resistance."
    ],
    uses: [
      {
        step: "Step 1: Project Planning",
        desc: "Plan your commercial or utility-scale solar project.",
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: "Step 2: Mounting",
        desc: "Install dual glass modules on mounting structures.",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: "Step 3: Grid Connection",
        desc: "Connect the system to the grid for maximum output.",
        img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    name: "Tapi Series",
    slug: "tapi-series",
    image: "https://solex.in/wp-content/uploads/2025/02/Tapi-SeriesSOLEX-1920X920_2-100.jpg",
    type: "Monocrystalline / Bi-Facial Monocrystalline",
    wattage: "530 – 555 W",
    efficiency: "21.48%",
    warranty: "12 Years (Product), 30 Years (Performance)",
    cells: "144 Half Cut Cell",
    details: [
      "Monocrystalline and bi-facial options for versatile use.",
      "High efficiency and output.",
      "Long-term performance warranty.",
      "Suitable for both residential and commercial installations."
    ],
    uses: [
      {
        step: "Step 1: Design Selection",
        desc: "Choose the right module for your needs (mono or bi-facial).",
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: "Step 2: Installation",
        desc: "Install the panels with professional support.",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: "Step 3: Monitoring",
        desc: "Monitor performance and enjoy energy savings.",
        img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    name: "Tapi Black",
    slug: "tapi-black",
    image: "https://solex.in/wp-content/uploads/2025/02/Tapi-Black-SOLEX-1920X920_3-100.jpg",
    type: "All Black Monocrystalline / Bi-Facial Monocrystalline",
    wattage: "400 – 420 W",
    efficiency: "21.50%",
    warranty: "12 Years (Product), 30 Years (Performance)",
    cells: "108 Half Cut Cell",
    details: [
      "Sleek all-black design for premium aesthetics.",
      "High efficiency and output.",
      "Ideal for residential rooftops.",
      "Long-term reliability and warranty."
    ],
    uses: [
      {
        step: "Step 1: Aesthetic Planning",
        desc: "Plan your rooftop for a modern, all-black look.",
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: "Step 2: Installation",
        desc: "Install the all-black panels for a seamless finish.",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: "Step 3: Enjoy",
        desc: "Enjoy the blend of performance and style.",
        img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    name: "Ganga",
    slug: "ganga",
    image: "https://solex.in/wp-content/uploads/2025/02/SOLEX-1920X920_4-100_GANGA.webp",
    type: "Monocrystalline",
    wattage: "120 – 125 W",
    efficiency: "19.91%",
    warranty: "10 Years (Product)",
    cells: "33 Half Cut Cell",
    details: [
      "Compact and lightweight design.",
      "Ideal for small-scale and portable applications.",
      "Reliable monocrystalline technology.",
      "Easy to install and maintain."
    ],
    uses: [
      {
        step: "Step 1: Portable Setup",
        desc: "Set up the Ganga panel for portable or small-scale use.",
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: "Step 2: Connection",
        desc: "Connect to your device or battery system.",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: "Step 3: Use Anywhere",
        desc: "Enjoy solar power wherever you go!",
        img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80"
      }
    ]
  }
];

const fadeVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
          <Link to="/" className="text-orange-500 underline">Go Home</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-white py-16 px-4"
      initial="hidden"
      animate="visible"
      variants={fadeVariants}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text font-serif">{product.name}</h1>
        <div className="flex flex-col items-center mb-10">
          <img src={product.image} alt={product.name} className="rounded-2xl w-full max-w-2xl h-[420px] object-cover" />
        </div>
        {/* Product Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-orange-50 rounded-xl p-6 text-center">
            <div className="text-gray-500 text-sm font-semibold mb-1">Type</div>
            <div className="text-lg font-bold text-gray-800">{product.type}</div>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 text-center">
            <div className="text-gray-500 text-sm font-semibold mb-1">Wattage</div>
            <div className="text-lg font-bold text-gray-800">{product.wattage}</div>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 text-center">
            <div className="text-gray-500 text-sm font-semibold mb-1">Efficiency</div>
            <div className="text-lg font-bold text-gray-800">{product.efficiency}</div>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 text-center">
            <div className="text-gray-500 text-sm font-semibold mb-1">Warranty</div>
            <div className="text-lg font-bold text-gray-800">{product.warranty}</div>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 text-center">
            <div className="text-gray-500 text-sm font-semibold mb-1">Cells</div>
            <div className="text-lg font-bold text-gray-800">{product.cells}</div>
          </div>
        </div>
        {/* Product Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Key Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {product.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
        {/* Uses Steps Horizontal */}
        <h2 className="text-2xl font-bold mb-4 text-orange-600">How to Use</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-6 min-w-[600px]">
            {product.uses.map((use, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col justify-between bg-orange-50 rounded-xl p-6 min-w-[260px] max-w-xs flex-shrink-0"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="font-bold text-lg mb-2">{use.step}</div>
                <div className="text-gray-700 text-base">{use.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link to="/" className="inline-block px-6 py-2 rounded-full bg-orange-500 text-white font-bold border-2 border-orange-500 transition-all duration-300 hover:bg-black hover:text-white hover:border-black focus:scale-105 active:scale-95">Back to Home</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail; 