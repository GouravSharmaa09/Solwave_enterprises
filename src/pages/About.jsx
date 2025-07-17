import React from 'react';

const aboutImage = "https://static.vecteezy.com/system/resources/thumbnails/007/449/150/small_2x/hand-holding-tree-growing-on-globe-with-solar-cell-and-turbine-concept-clean-energy-for-save-world-elements-of-this-image-furnished-nasa-free-photo.jpg";

const aboutText1 = `Solwave is a fully integrated solar solutions provider having wide range of solar energy products with cutting edge technology and industry expertise to fulfill renewable energy need of India. Headquartered at Bareilly, Solwave is a leading manufacturer of Solar Energy Systems. We supply Solar Power and Heating Systems for Households, Private users, Commercial Enterprises, Institutions, Public Facilities and Investors.`;
const aboutText2 = `Solwave offers standard Designs, Construction, Monitoring, Operation, Maintenance and After Sale Service practices that align with customers Unique needs. Solwave offers standard Designs, Construction, Monitoring, Operation, Maintenance and After Sale Service practices that align with customers Unique needs. We have the technical know-how and experience in the field of commercial and utility-scale power systems. Built from the highest quality components and designed with the experience and expertise of leading solar industry experts, our systems are known for extremely high reliability and efficiency, providing years of worry-free service and an excellent return on investment.`;

const About = () => (
  <div className="min-h-screen bg-white">
    {/* Top Full-Width Image */}
    <div className="w-full h-72 md:h-96 lg:h-[420px] overflow-hidden flex items-center justify-center">
      <img
        src={aboutImage}
        alt="About Solwave - Clean Energy"
        className="w-full h-full object-cover object-center"
      />
    </div>
    {/* Heading and Paragraphs */}
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">Welcome To Solwave</h2>
      <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed font-medium font-sans">
        {aboutText1}
      </p>
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium font-sans">
        {aboutText2}
      </p>
    </div>

    {/* Mission, Vision, Values Section */}
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-gray-50 rounded-xl p-8 shadow-md flex flex-col items-center border-t-4 border-orange-400 hover:shadow-xl transition-all duration-300">
          <span className="text-4xl mb-4">🎯</span>
          <h3 className="text-2xl font-bold mb-2 text-gray-800 font-serif">Our Mission</h3>
          <p className="text-gray-600 font-sans">To empower communities with clean, reliable, and scalable solar energy solutions, making renewable energy accessible for all.</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-8 shadow-md flex flex-col items-center border-t-4 border-orange-400 hover:shadow-xl transition-all duration-300">
          <span className="text-4xl mb-4">🌅</span>
          <h3 className="text-2xl font-bold mb-2 text-gray-800 font-serif">Our Vision</h3>
          <p className="text-gray-600 font-sans">To be a global leader in solar innovation, driving the transition to a sustainable future through technology and expertise.</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-8 shadow-md flex flex-col items-center border-t-4 border-orange-400 hover:shadow-xl transition-all duration-300">
          <span className="text-4xl mb-4">💡</span>
          <h3 className="text-2xl font-bold mb-2 text-gray-800 font-serif">Our Values</h3>
          <p className="text-gray-600 font-sans">Integrity, customer focus, innovation, and environmental stewardship guide everything we do at Solwave.</p>
        </div>
      </div>
    </div>

    {/* Why Solar Section */}
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-orange-600 font-serif tracking-tight drop-shadow-lg">Why Solar?</h2>
      <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-8 bg-gradient-to-r from-yellow-100 via-orange-50 to-orange-100 rounded-3xl p-8 shadow-2xl">
        <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border-2 border-orange-200 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
          <span className="text-4xl mb-3">☀️</span>
          <h4 className="font-bold text-lg mb-2 text-orange-700 font-serif">Unlimited Free Energy</h4>
          <p className="text-gray-700 text-sm font-sans">The sun provides an endless supply of clean, renewable energy—no fuel, no bills, just pure power.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border-2 border-orange-200 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
          <span className="text-4xl mb-3">💸</span>
          <h4 className="font-bold text-lg mb-2 text-orange-700 font-serif">Massive Cost Savings</h4>
          <p className="text-gray-700 text-sm font-sans">Slash your electricity bills by up to 90% and enjoy long-term savings for decades.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border-2 border-orange-200 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
          <span className="text-4xl mb-3">🌱</span>
          <h4 className="font-bold text-lg mb-2 text-orange-700 font-serif">Eco-Friendly</h4>
          <p className="text-gray-700 text-sm font-sans">Reduce your carbon footprint and help fight climate change with zero-emission energy.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border-2 border-orange-200 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
          <span className="text-4xl mb-3">🔋</span>
          <h4 className="font-bold text-lg mb-2 text-orange-700 font-serif">Energy Independence</h4>
          <p className="text-gray-700 text-sm font-sans">Take control of your power—no more worries about rising rates or power cuts.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border-2 border-orange-200 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
          <span className="text-4xl mb-3">🏡</span>
          <h4 className="font-bold text-lg mb-2 text-orange-700 font-serif">Adds Value to Property</h4>
          <p className="text-gray-700 text-sm font-sans">Solar panels increase your home’s value and make it more attractive to buyers.</p>
        </div>
      </div>
    </div>
  </div>
);

export default About; 