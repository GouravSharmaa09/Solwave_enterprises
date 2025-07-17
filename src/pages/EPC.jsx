import React from 'react';

const epcImage = 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg';
const epcBio = `EPC (Engineering, Procurement, and Construction) services are the backbone of successful solar projects, ensuring seamless execution from concept to commissioning. At Solwave, our EPC division brings together a team of seasoned engineers, project managers, and skilled technicians who meticulously plan, design, and deliver solar power plants tailored to client needs. Our approach integrates advanced technology, rigorous quality standards, and a commitment to sustainability, resulting in high-performance solar installations that stand the test of time. From site assessment and feasibility studies to procurement of top-tier components and precision construction, we manage every aspect with transparency and efficiency. Our track record includes utility-scale solar farms, commercial rooftops, and innovative microgrid solutions. By choosing Solwave's EPC services, clients benefit from reduced project risks, optimized costs, and accelerated timelines. We prioritize safety, environmental stewardship, and long-term value, making us a trusted partner in the renewable energy sector. Our dedication to excellence ensures that every project not only meets but exceeds expectations, contributing to a cleaner, greener future for all.`;
const epcFeatures = [
  'Turnkey project management',
  'Cutting-edge engineering',
  'Quality procurement',
  'On-time delivery',
  'Sustainable solutions',
  'Comprehensive support',
];

export default function EPC() {
  return (
    <div className="min-h-screen bg-white pt-20 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <img src={epcImage} alt="EPC Service" className="w-full h-80 object-cover rounded-lg shadow mb-8" />
        <h1 className="text-4xl font-bold mb-6 text-orange-600">EPC (Engineering, Procurement & Construction)</h1>
        <p className="text-lg text-gray-700 mb-8" style={{ textAlign: 'justify' }}>{epcBio}</p>
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Key Features & Benefits of Solar</h2>
        <ul className="list-disc pl-8 text-gray-700 space-y-2">
          {epcFeatures.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 