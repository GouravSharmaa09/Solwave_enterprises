import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EnquiryFormModal from '../components/EnquiryFormModal';

const services = [
  { title: 'Solar Projects', desc: 'Residential, Commercial, Utility Scale. We provide complete solar project solutions from design and engineering to installation and maintenance, ensuring maximum efficiency and reliability for all types of clients.', image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg' },
  { title: 'Project Management', desc: 'End-to-end project governance. Our experienced team manages every aspect of your solar project, including planning, procurement, execution, and quality control, delivering projects on time and within budget.', image: 'https://images.pexels.com/photos/4254166/pexels-photo-4254166.jpeg' },
  { title: 'Asset Management', desc: 'Ongoing maintenance & support. We offer comprehensive asset management services to maximize the performance and lifespan of your solar assets, including monitoring, reporting, and preventive maintenance.', image: 'https://images.pexels.com/photos/14613940/pexels-photo-14613940.jpeg' },
  { title: 'Project Development', desc: 'Leasing, Financing, Micro Grids. We assist in project development, offering innovative financing options, leasing solutions, and microgrid development for diverse energy needs.', image: 'https://images.pexels.com/photos/6158914/pexels-photo-6158914.jpeg' },
  { title: 'OEM Marketplace', desc: 'Vendor & installer connections. Our OEM marketplace connects you with trusted vendors and installers, ensuring you get the best products and services for your solar projects.', image: 'https://esunscope.com/assets/uploads/WhatsApp%20Image%202023-09-28%20at%2012.50.53%20PM.jpeg' },
  { title: 'EV Charging Stations', desc: 'Electric vehicle infrastructure. We design and install reliable EV charging stations, supporting the transition to clean transportation with scalable and efficient solutions.', image: 'https://images.pexels.com/photos/9800028/pexels-photo-9800028.jpeg' },
  { title: 'Wind Energy', desc: 'Clean wind power solutions. Expand your renewable portfolio with our wind energy solutions, from site assessment to installation and maintenance.', image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeIn' } },
};

// Helper function to truncate description
function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalService, setModalService] = useState(null);

  const handleEnquiry = (service) => {
    setModalService(service);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setModalService(null);
  };

  return (
    <div className="pt-20 pb-12 px-4 min-h-screen bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={service.title + idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white rounded-none border border-gray-100 overflow-hidden flex flex-col w-full max-w-[700px] mx-auto h-[380px]"
            >
              {/* Service Image with fixed aspect ratio and object-cover */}
              <div className="w-full aspect-[5/4] bg-gray-100 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  onError={e => { e.target.style.display = 'none'; }}
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-center relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">{service.title}</h3>
                {/* Always truncate description to 60 characters for compact look */}
                <p className="font-sans text-gray-600 text-base">
                  {truncateText(service.desc, 60)}
                </p>
                <button
                  className="mt-4 px-4 py-2 rounded-full bg-orange-500 text-white font-bold border-2 border-orange-500 transition-all duration-300 text-sm text-center hover:bg-black hover:text-white hover:border-black focus:scale-105 active:scale-95 hover:shadow-lg hover:scale-105"
                  onClick={() => handleEnquiry(service)}
                >
                  Enquiry
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        {showModal && (
          <EnquiryFormModal open={showModal} onClose={closeModal} item={modalService} />
        )}
      </div>
    </div>
  );
};

export default Services; 