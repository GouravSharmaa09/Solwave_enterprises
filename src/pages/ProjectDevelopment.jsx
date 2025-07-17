import React from 'react';

const pdImage = 'https://images.pexels.com/photos/6158914/pexels-photo-6158914.jpeg';
const pdBio = `Project Development is the foundation of every successful solar venture, encompassing all activities from initial concept to project commissioning. At Solwave, our Project Development team specializes in site identification, feasibility analysis, permitting, financing, and stakeholder engagement. We navigate complex regulatory landscapes and secure optimal project sites, ensuring each solar installation is positioned for maximum impact and profitability. Our holistic approach integrates technical expertise, financial acumen, and community collaboration, resulting in projects that are both economically viable and environmentally responsible. By leveraging innovative financing models and strategic partnerships, we accelerate project timelines and reduce risks. Our commitment to transparency, quality, and sustainability drives every phase of development, from land acquisition to grid connection. With Solwave as your partner, you gain access to a dedicated team that transforms ideas into operational solar assets, delivering long-term value and supporting the global transition to clean energy.`;
const pdFeatures = [
  'Site identification',
  'Feasibility analysis',
  'Permitting & compliance',
  'Innovative financing',
  'Stakeholder engagement',
  'Risk mitigation',
];

export default function ProjectDevelopment() {
  return (
    <div className="min-h-screen bg-white pt-20 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <img src={pdImage} alt="Project Development" className="w-full h-80 object-cover rounded-lg shadow mb-8" />
        <h1 className="text-4xl font-bold mb-6 text-orange-600">PROJECT DEVELOPMENT</h1>
        <p className="text-lg text-gray-700 mb-8" style={{ textAlign: 'justify' }}>{pdBio}</p>
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Key Features & Benefits of Solar</h2>
        <ul className="list-disc pl-8 text-gray-700 space-y-2">
          {pdFeatures.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 