import React from 'react';

const hrImage = 'https://images.pexels.com/photos/4254166/pexels-photo-4254166.jpeg';
const hrBio = `The Human Resources (HR) division at Solwave is dedicated to nurturing talent, fostering a culture of innovation, and supporting the growth of the renewable energy sector. Our HR team plays a pivotal role in recruiting, training, and retaining skilled professionals who drive our mission forward. We believe that people are the heart of every successful solar project, and our commitment to employee development ensures a motivated and high-performing workforce. From onboarding and continuous learning to performance management and employee well-being, our HR practices are designed to create an inclusive and empowering environment. We champion diversity, equity, and collaboration, recognizing that a strong team is essential for delivering exceptional results. By investing in our people, we not only enhance organizational performance but also contribute to the broader adoption of solar energy. At Solwave, HR is more than a department—it's a strategic partner in building a sustainable future for all.`;
const hrFeatures = [
  'Talent acquisition',
  'Employee development',
  'Inclusive culture',
  'Performance management',
  'Well-being programs',
  'Team collaboration',
];

export default function HR() {
  return (
    <div className="min-h-screen bg-white pt-20 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <img src={hrImage} alt="HR" className="w-full h-80 object-cover rounded-lg shadow mb-8" />
        <h1 className="text-4xl font-bold mb-6 text-orange-600">HR (Human Resources)</h1>
        <p className="text-lg text-gray-700 mb-8" style={{ textAlign: 'justify' }}>{hrBio}</p>
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Key Features & Benefits of Solar</h2>
        <ul className="list-disc pl-8 text-gray-700 space-y-2">
          {hrFeatures.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 