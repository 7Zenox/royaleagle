"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const HomePage = () => {
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'EN' ? 'AR' : 'EN'));
  };

  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black bg-opacity-50 backdrop-blur-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Royal Eagle Logo" width={40} height={40} />
          <span className="text-xl font-bold">Royal Eagle Investment</span>
        </div>
        <button
          className="text-sm font-semibold bg-gold text-black px-4 py-2 rounded"
          onClick={toggleLanguage}
        >
          {language === 'EN' ? 'Switch to Arabic' : 'Switch to English'}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold mt-4">
          Diverse <span className="text-gold">Portfolio Investment</span> Firm
        </h1>
        <p className="text-lg mt-2">Investing your capital for your future</p>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed">
            Royal Eagle is a dynamic and forward-thinking investment firm dedicated to creating lasting value in diverse
            sectors. With a commitment to excellence and a strategic vision, we have positioned ourselves as a trusted
            partner for investors seeking growth and stability.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            At Royal Eagle, we recognize the unique opportunities that different sectors present. Our comprehensive
            approach to investment spans a wide range of industries, allowing us to diversify portfolios and optimize
            returns for our clients. As a client-centric firm, we prioritize transparency, integrity, and a results-driven
            mindset to ensure our clients' financial objectives are not only met but exceeded.
          </p>
        </div>
      </section>

      {/* Our Investments Section */}
      <section className="py-20 px-6 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Our Investments</h2>
          <div className="grid gap-6">
            <div className="flex items-start">
              <h3 className="text-4xl font-bold text-gold mr-4">01</h3>
              <div>
                <h4 className="text-xl font-semibold">Commercial Enterprises & Management</h4>
                <p className="text-sm mt-1">
                  We specialize in identifying and investing in high-potential commercial enterprises, offering strategic
                  management support to drive growth, enhance operational efficiency, and maximize profitability.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <h3 className="text-4xl font-bold text-gold mr-4">02</h3>
              <div>
                <h4 className="text-xl font-semibold">Industrial Enterprises & Management</h4>
                <p className="text-sm mt-1">
                  Our firm actively seeks investment opportunities in industrial enterprises, leveraging our industry insight
                  and operational expertise to support these businesses in achieving sustainable growth and competitiveness.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <h3 className="text-4xl font-bold text-gold mr-4">03</h3>
              <div>
                <h4 className="text-xl font-semibold">Agricultural Enterprises & Management</h4>
                <p className="text-sm mt-1">
                  We recognize the critical role agriculture plays in global economies. We invest in agricultural enterprises,
                  providing management solutions to enhance productivity, promote sustainable practices, and capitalize on
                  emerging market trends.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <h3 className="text-4xl font-bold text-gold mr-4">04</h3>
              <div>
                <h4 className="text-xl font-semibold">Oil & Natural Gas Projects</h4>
                <p className="text-sm mt-1">
                  Navigating the complex landscape of the energy sector, we specialize in investing in oil and natural gas
                  projects. Our team is adept at identifying lucrative opportunities, managing risk, and ensuring our
                  investments align with evolving industry dynamics.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <h3 className="text-4xl font-bold text-gold mr-4">05</h3>
              <div>
                <h4 className="text-xl font-semibold">Educational Enterprises & Management</h4>
                <p className="text-sm mt-1">
                  Education is a cornerstone of societal progress. We invest in educational enterprises, supporting innovation
                  and excellence in education, and providing strategic management to foster the development of future leaders.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <h3 className="text-4xl font-bold text-gold mr-4">06</h3>
              <div>
                <h4 className="text-xl font-semibold">Tourist Enterprises & Management</h4>
                <p className="text-sm mt-1">
                  With a keen understanding of the tourism industry, we invest in tourist enterprises, promoting sustainable
                  and memorable experiences. Our management approach is designed to enhance customer satisfaction and drive
                  long-term value for stakeholders.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <h3 className="text-4xl font-bold text-gold mr-4">07</h3>
              <div>
                <h4 className="text-xl font-semibold">Retail Trade Enterprises & Management</h4>
                <p className="text-sm mt-1">
                  In the dynamic world of retail, we invest in trade enterprises, bringing a strategic approach to management
                  that focuses on customer engagement, supply chain optimization, and steady market growth.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <h3 className="text-4xl font-bold text-gold mr-4">08</h3>
              <div>
                <h4 className="text-xl font-semibold">Energy Enhancement Programs</h4>
                <p className="text-sm mt-1">
                  As the global demand for energy grows, we invest in energy enhancement programs that prioritize
                  sustainability and innovation. These programs focus on optimizing energy efficiency and adopting renewable
                  technologies.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <h3 className="text-4xl font-bold text-gold mr-4">09</h3>
              <div>
                <h4 className="text-xl font-semibold">Specialization in Bank Notes and Financial Instruments</h4>
                <p className="text-sm mt-1">
                  As specialists in bank notes like bank guarantees, LC (Letter of Credit), and SBLC (Standby Letter of
                  Credit), we operate directly with large lending institutions, affiliated corporate consortiums, and
                  providers of bank financial instruments.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <h3 className="text-4xl font-bold text-gold mr-4">10</h3>
              <div>
                <h4 className="text-xl font-semibold">Money Enhancement Programs and Forex Trade Modules</h4>
                <p className="text-sm mt-1">
                  In addition to traditional investments, we offer money enhancement programs encompassing low to
                  high-value funds for humanity projects on non-recourse terms. Our commitment to fostering positive
                  societal impact is reflected in our support for projects that contribute to the betterment of communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-6 px-6 lg:px-16">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="mb-4">
            <h5 className="font-semibold">Address</h5>
            <p>Office No. 104A6, Deira – Al Garhoud, Dubai, UAE</p>
          </div>
          <div className="mb-4">
            <h5 className="font-semibold">Phone</h5>
            <p>+971 58 6081986</p>
          </div>
          <div className="mb-4">
            <h5 className="font-semibold">Email</h5>
            <p>info@royaleagleinvestment.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
