import React from 'react';

const omImage = 'https://images.pexels.com/photos/14613940/pexels-photo-14613940.jpeg';
const omBio = `Operation and Maintenance (O&M) services are essential for maximizing the performance and longevity of solar power systems. At Solwave, our O&M division is dedicated to ensuring that every solar installation operates at peak efficiency throughout its lifecycle. Our comprehensive O&M solutions include real-time monitoring, preventive maintenance, rapid troubleshooting, and performance optimization. With a team of experienced technicians and advanced diagnostic tools, we proactively address potential issues before they impact energy production. Our services extend to cleaning, repairs, system upgrades, and detailed reporting, providing clients with peace of mind and reliable returns on investment. We understand that each project is unique, so we tailor our O&M strategies to meet specific site conditions and client goals. By entrusting Solwave with your solar asset management, you benefit from reduced downtime, enhanced safety, and sustained energy output. Our commitment to quality and customer satisfaction makes us a preferred partner for solar O&M, driving long-term value and supporting the transition to a sustainable energy future.`;
const omFeatures = [
  '24/7 system monitoring',
  'Preventive maintenance',
  'Rapid troubleshooting',
  'Performance optimization',
  'Detailed reporting',
  'System upgrades',
];

export default function OMService() {
  return (
    <div className="min-h-screen bg-white pt-20 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <img src={omImage} alt="O&M Service" className="w-full h-80 object-cover rounded-lg shadow mb-8" />
        <h1 className="text-4xl font-bold mb-6 text-orange-600">O&M SERVICE (Operation & Maintenance)</h1>
        <p className="text-lg text-gray-700 mb-8" style={{ textAlign: 'justify' }}>{omBio}</p>
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Key Features & Benefits of Solar</h2>
        <ul className="list-disc pl-8 text-gray-700 space-y-2">
          {omFeatures.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 