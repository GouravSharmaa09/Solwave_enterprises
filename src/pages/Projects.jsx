import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EnquiryFormModal from '../components/EnquiryFormModal';

const projects = [
  { name: 'Utility Solar', size: '120MW', desc: 'Supplying energy to the nation', img: '/1.jpg', slug: 'utility-solar', longDesc: 'This project supplies clean solar energy to the national grid, supporting large-scale energy needs and sustainability.\n\nThe Utility Solar project is a flagship installation, spanning over 200 acres and utilizing state-of-the-art solar panels. The project was completed in just 180 days with a dedicated workforce of over 300 skilled professionals. The main product used is the SunMax Ultra Panel, known for its exceptional quality and efficiency.\n\nKey benefits include significant reduction in carbon emissions, reliable power supply to thousands of homes, and a robust monitoring system for real-time performance tracking. The project has set a benchmark in the renewable energy sector for its scale, speed of execution, and quality assurance.', keyFeatures: ['Grid-scale solar power', 'High efficiency panels', 'Remote monitoring', 'Low maintenance'], revenue: '₹12 Cr/year', area: '200 acres', rating: 4.8, estimatedDays: 180, manPower: 300, productName: 'SunMax Ultra Panel', productQuality: 'Premium' },
  { name: 'Nainath Commercial', size: '14kW', desc: 'Top-notch commercial solar', img: '/2.jpg', slug: 'nainath-commercial', longDesc: 'The Nainath Commercial project delivers reliable solar energy to business operations, ensuring cost savings and sustainability.\n\nCompleted in 45 days with a team of 40, this project features the SolarPro Commercial Series panels, which are renowned for their durability and high output. The installation covers 1200 sq.m. and supports advanced net metering for optimal energy management.\n\nClients benefit from quick ROI, remote diagnostics, and seamless integration with existing infrastructure, making it a preferred choice for commercial establishments.', keyFeatures: ['Commercial grade', 'Quick ROI', 'Net metering', 'Remote diagnostics'], revenue: '₹15 L/year', area: '1200 sq.m.', rating: 4.5, estimatedDays: 45, manPower: 40, productName: 'SolarPro Commercial Series', productQuality: 'High' },
  { name: 'Residential Solar', size: '10kW', desc: 'Efficient residential solution', img: '/3.jpg', slug: 'residential-solar', longDesc: 'A residential solar project providing homeowners with cost-effective, clean energy and reduced electricity bills.\n\nInstalled in just 20 days by a team of 10, this project uses the HomeBright Solar Kit, which is known for its smart inverter and battery-ready features. Covering 300 sq.m., it offers app-based monitoring and easy maintenance.\n\nResidents enjoy lower energy costs, increased property value, and a sustainable lifestyle.', keyFeatures: ['Home integration', 'Smart inverter', 'Battery ready', 'App monitoring'], revenue: '₹1.2 L/year', area: '300 sq.m.', rating: 4.7, estimatedDays: 20, manPower: 10, productName: 'HomeBright Solar Kit', productQuality: 'Standard+' },
  { name: 'School Rooftop', size: '25kW', desc: 'Solar for education sector', img: '/4.jpg', slug: 'school-rooftop', longDesc: 'A rooftop solar installation for schools, promoting green energy and educational awareness among students.\n\nThe project was executed in 30 days with a workforce of 25, using the EduSolar Safe Panel, which is designed for safety and longevity. The system powers classrooms, labs, and administrative offices, and includes awareness programs for students.\n\nThe project not only reduces operational costs but also serves as a live educational tool for students.', keyFeatures: ['Educational impact', 'Safe installation', 'Awareness programs', 'Low maintenance'], revenue: '₹2.5 L/year', area: '800 sq.m.', rating: 4.6, estimatedDays: 30, manPower: 25, productName: 'EduSolar Safe Panel', productQuality: 'High' },
  { name: 'Hospital Solar', size: '30kW', desc: 'Reliable power for healthcare', img: '/5.jpg', slug: 'hospital-solar', longDesc: 'Ensuring uninterrupted power supply for hospitals, this project supports critical healthcare infrastructure with solar energy.\n\nCompleted in 35 days by 35 skilled workers, the MedPower Solar Panel was chosen for its reliability and 24x7 backup capability. The system supports critical loads, remote alerts, and high reliability, making it ideal for healthcare.\n\nThe project has improved patient care and reduced the hospital’s carbon footprint.', keyFeatures: ['24x7 backup', 'Critical load support', 'Remote alerts', 'High reliability'], revenue: '₹3 L/year', area: '1000 sq.m.', rating: 4.9, estimatedDays: 35, manPower: 35, productName: 'MedPower Solar Panel', productQuality: 'Premium' },
  { name: 'Industrial Plant', size: '50kW', desc: 'Industrial solar integration', img: '/6.jpg', slug: 'industrial-plant', longDesc: 'A robust solar solution for industrial plants, reducing operational costs and carbon footprint.\n\nThe project was delivered in 60 days with a team of 60, using the InduMax Heavy Panel, which is built for peak load shaving and long lifespan. Covering 1500 sq.m., it integrates with industrial IoT systems for smart monitoring.\n\nThe project has set new standards for energy efficiency in the industrial sector.', keyFeatures: ['Heavy-duty', 'Peak load shaving', 'Industrial IoT', 'Long lifespan'], revenue: '₹5 L/year', area: '1500 sq.m.', rating: 4.4, estimatedDays: 60, manPower: 60, productName: 'InduMax Heavy Panel', productQuality: 'Industrial Grade' },
  { name: 'Mall Solar', size: '40kW', desc: 'Clean energy for malls', img: '/7.jpg', slug: 'mall-solar', longDesc: 'Solar energy project for shopping malls, supporting sustainable business practices and energy savings.\n\nCompleted in 50 days with 50 workers, the MallBright Solar Panel was used for its retail integration and low noise. The project covers 1300 sq.m. and features an energy dashboard for real-time tracking.\n\nThe project has enhanced the mall’s brand value and reduced operational costs.', keyFeatures: ['Retail integration', 'Brand value', 'Energy dashboard', 'Low noise'], revenue: '₹4 L/year', area: '1300 sq.m.', rating: 4.3, estimatedDays: 50, manPower: 50, productName: 'MallBright Solar Panel', productQuality: 'High' },
  { name: 'Warehouse Solar', size: '20kW', desc: 'Solar for logistics', img: '/8.jpg', slug: 'warehouse-solar', longDesc: 'A solar installation for warehouses, ensuring efficient logistics operations with renewable energy.\n\nThe project was finished in 25 days by 20 workers, using the WarePro Solar Kit, which is designed for remote sites and easy expansion. The system minimizes downtime and supports logistics operations.\n\nThe project has improved supply chain efficiency and reduced energy costs.', keyFeatures: ['Logistics ready', 'Remote site', 'Minimal downtime', 'Easy expansion'], revenue: '₹2 L/year', area: '900 sq.m.', rating: 4.2, estimatedDays: 25, manPower: 20, productName: 'WarePro Solar Kit', productQuality: 'Standard+' },
  { name: 'Apartment Solar', size: '15kW', desc: 'Powering residential complexes', img: '/9.jpg', slug: 'apartment-solar', longDesc: 'Solar project for apartment complexes, providing shared clean energy and reducing community energy costs.\n\nCompleted in 28 days with 18 workers, the AptiGreen Solar Panel was used for its shared metering and billing integration. The project covers 600 sq.m. and features a community dashboard for residents.\n\nThe project has fostered a sense of community and environmental responsibility.', keyFeatures: ['Shared metering', 'Community dashboard', 'Billing integration', 'Low maintenance'], revenue: '₹1.5 L/year', area: '600 sq.m.', rating: 4.5, estimatedDays: 28, manPower: 18, productName: 'AptiGreen Solar Panel', productQuality: 'High' },
];

const Projects = () => {
  // Remove modal state/logic for project cards
  const navigate = useNavigate();

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-gray-800 mb-16 text-center">Our Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {projects.map((proj, idx) => (
            <Link to={`/projects/${proj.slug}`} key={proj.name + idx} style={{ textDecoration: 'none' }}>
              <div
                className="group bg-white rounded-none border border-gray-100 overflow-hidden flex flex-col w-full max-w-[700px] mx-auto h-[440px] relative shadow-md transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                {/* Project Image */}
                <div
                  className="w-full h-72 bg-gray-100"
                  style={{
                    backgroundImage: `url(${proj.img})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}
                />
                {/* Project Content */}
                <div className="p-8 flex-1 flex flex-col justify-between relative z-10">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2 font-serif">{proj.name}</h3>
                    <p className="font-sans text-darkred text-lg mb-2">{proj.desc}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm">{proj.size}</span>
                    <button
                      className="ml-2 px-3 py-1 rounded-full bg-darkred text-white font-bold border-2 border-darkred text-xs hover:bg-black hover:text-white hover:border-black transition-all duration-300 focus:scale-105 active:scale-95 hover:shadow-lg"
                      onClick={e => { e.preventDefault(); e.stopPropagation(); navigate(`/enquiry?item=${encodeURIComponent(proj.name)}`); }}
                    >
                      Enquiry
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Modal for Enquiry Now */}
      {/* The EnquiryFormModal component is no longer used for project cards */}
    </div>
  );
};

export { projects };
export default Projects; 