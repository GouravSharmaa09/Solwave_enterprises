import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "./Projects";

const fadeVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
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
      <div className="max-w-3xl mx-auto">
        {/* Project Image at the very top */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12" style={{ marginTop: '0', marginBottom: '3rem' }}>
          <img src={project.img} alt={project.name} className="w-screen h-[60vh] object-cover" style={{ borderRadius: 0, display: 'block', margin: 0 }} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text font-serif">{project.name}</h1>
        {/* Project Info Grid */}
        <div className="flex flex-wrap gap-6 mb-6 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-8">
          <div className="bg-orange-50 rounded-xl p-6 text-center flex-1 min-w-[180px]">
            <div className="text-gray-500 text-sm font-semibold mb-1">Project Size</div>
            <div className="text-lg font-bold text-gray-800">{project.size}</div>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 text-center flex-1 min-w-[180px]">
            <div className="text-gray-500 text-sm font-semibold mb-1">Revenue</div>
            <div className="text-lg font-bold text-gray-800">{project.revenue}</div>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 text-center flex-1 min-w-[180px]">
            <div className="text-gray-500 text-sm font-semibold mb-1">Project Area</div>
            <div className="text-lg font-bold text-gray-800">{project.area}</div>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 text-center flex-1 min-w-[180px]">
            <div className="text-gray-500 text-sm font-semibold mb-1">Review Rating</div>
            <div className="text-lg font-bold text-yellow-500 flex items-center justify-center">
              {project.rating} <span className="ml-1">★</span>
            </div>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 text-center flex-1 min-w-[180px]">
            <div className="text-gray-500 text-sm font-semibold mb-1">Estimated Days</div>
            <div className="text-lg font-bold text-gray-800">{project.estimatedDays} days</div>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 text-center flex-1 min-w-[180px]">
            <div className="text-gray-500 text-sm font-semibold mb-1">Man Power</div>
            <div className="text-lg font-bold text-gray-800">{project.manPower} people</div>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 text-center flex-1 min-w-[180px]">
            <div className="text-gray-500 text-sm font-semibold mb-1">Product Name</div>
            <div className="text-lg font-bold text-gray-800">{project.productName}</div>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 text-center flex-1 min-w-[180px]">
            <div className="text-gray-500 text-sm font-semibold mb-1">Product Quality</div>
            <div className="text-lg font-bold text-gray-800">{project.productQuality}</div>
          </div>
        </div>
        {/* Key Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-orange-600 text-center">Key Features</h2>
          <div className="flex flex-wrap gap-4 w-full">
            {project.keyFeatures && project.keyFeatures.map((f, i) => (
              <span key={i} className="font-bold text-gray-800 bg-orange-100 rounded-full px-4 py-2 whitespace-nowrap">{f}</span>
            ))}
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-orange-600 text-center">Project Description</h2>
          <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line bg-orange-50 rounded-xl p-6 shadow-sm">
            {project.longDesc}
            {"\n\n"}
            <span className="block mt-4">
              <b>Impact:</b> This project has not only contributed to clean energy generation but also created jobs, improved local infrastructure, and set a benchmark for future developments. The use of advanced solar technology ensures long-term sustainability and reliability, making it a model for similar projects nationwide.
            </span>
            <span className="block mt-4">
              <b>Community & Environment:</b> The project has fostered community engagement through awareness programs, training sessions, and local partnerships. Environmental benefits include significant CO₂ reduction, improved air quality, and a positive ecological footprint.
            </span>
            <span className="block mt-4">
              <b>Future Prospects:</b> With ongoing monitoring and maintenance, the project is expected to deliver consistent performance and inspire further adoption of renewable energy solutions in the region.
            </span>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link to="/" className="inline-block px-6 py-2 rounded-full bg-orange-500 text-white font-bold border-2 border-orange-500 transition-all duration-300 hover:bg-black hover:text-white hover:border-black focus:scale-105 active:scale-95">Back to Home</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail; 