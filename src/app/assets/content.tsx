import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Waves from "../../Backgrounds/Waves/Waves";

const StaticContent = () => {
  // All investment items
  const investments = [
    {
      number: "01",
      title: "Commercial Enterprises & Management",
      description:
        "We specialize in identifying and investing in high-potential commercial enterprises, offering strategic management support to drive growth, enhance operational efficiency, and maximize profitability.",
    },
    {
      number: "02",
      title: "Industrial Enterprises & Management",
      description:
        "Our firm actively seeks investment opportunities in industrial enterprises, leveraging our industry insight and operational expertise to support these businesses in achieving sustainable growth and competitiveness.",
    },
    {
      number: "03",
      title: "Agricultural Enterprises & Management",
      description:
        "We recognize the critical role agriculture plays in global economies. We invest in agricultural enterprises, providing management solutions to enhance productivity, promote sustainable practices, and capitalize on emerging market trends.",
    },
    {
      number: "04",
      title: "Oil & Natural Gas Projects",
      description:
        "Navigating the complex landscape of the energy sector, we specialize in investing in oil and natural gas projects. Our team is adept at identifying lucrative opportunities, managing risk, and ensuring our investments align with evolving industry dynamics.",
    },
    {
      number: "05",
      title: "Educational Enterprises & Management",
      description:
        "Education is a cornerstone of societal progress. We invest in educational enterprises, supporting innovation and excellence in education, and providing strategic management to foster the development of future leaders.",
    },
    {
      number: "06",
      title: "Tourist Enterprises & Management",
      description:
        "With a keen understanding of the tourism industry, we invest in tourist enterprises, promoting sustainable and memorable experiences. Our management approach is designed to enhance customer satisfaction and drive long-term value for stakeholders.",
    },
    {
      number: "07",
      title: "Retail Trade Enterprises & Management",
      description:
        "In the dynamic world of retail, we invest in trade enterprises, bringing a strategic approach to management that focuses on customer engagement, supply chain optimization, and steady market growth.",
    },
    {
      number: "08",
      title: "Energy Enhancement Programs",
      description:
        "As the global demand for energy grows, we invest in energy enhancement programs that prioritize sustainability and innovation. These programs focus on optimizing energy efficiency and adopting renewable technologies.",
    },
    {
      number: "09",
      title: "Specialization in Bank Notes and Financial Instruments",
      description:
        "As specialists in bank notes like bank guarantees, LC (Letter of Credit), and SBLC (Standby Letter of Credit), we operate directly with large lending institutions, affiliated corporate consortiums, and providers of bank financial instruments.",
    },
    {
      number: "10",
      title: "Money Enhancement Programs and Forex Trade Modules",
      description:
        "In addition to traditional investments, we offer money enhancement programs encompassing low to high-value funds for humanity projects on non-recourse terms. Our commitment to fostering positive societal impact is reflected in our support for projects that contribute to the betterment of communities.",
    },
  ];

  // Split items into 3 slides: 3, 4, 3 (adjusted to match your code snippet)
  const chunk1 = investments.slice(0, 3);
  const chunk2 = investments.slice(3, 7);
  const chunk3 = investments.slice(7, 10);

  return (
    <>
      {/* SLIDE 1: Hero */}
      <section className="relative w-screen h-screen flex-shrink-0 overflow-hidden bg-black">
        {/* Waves: fill entire section */}
        <Waves
          lineColor="#372b19"
          backgroundColor="none"
          waveSpeedX={0.01}
          waveSpeedY={0.008}
          waveAmpX={32}
          waveAmpY={16}
          style={{ zIndex: 0 }}
        />

        {/* Content container with padding */}
        <div className="relative z-10 flex flex-col justify-center h-full px-8 lg:px-48">
          <h1 className="text-4xl lg:text-6xl font-luloClean">
            Diverse <span className="text-gold">Portfolio Investment</span> Firm
          </h1>
          <p className="text-lg lg:text-xl mt-2 text-neutral-500 font-futura">
            Investing your capital for your future
          </p>
        </div>
      </section>


      {/* SLIDE 2: Our Story */}
      <section className="w-screen h-screen flex-shrink-0 grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-black text-white flex flex-col justify-center px-8 lg:px-16">
          <h2 className="text-3xl lg:text-7xl lg:mx-8 font-bold font-luloClean">
            Our <br /> Story
          </h2>
        </div>
        <div className="bg-white text-black flex flex-col justify-center px-8 lg:px-16 font-futura">
          <p className="text-base lg:text-lg leading-relaxed">
            Royal Eagle is a dynamic and forward-thinking investment firm
            dedicated to creating lasting value in diverse sectors. With a
            commitment to excellence and a strategic vision, we have positioned
            ourselves as a trusted partner for investors seeking growth and
            stability.
          </p>
          <p className="text-base lg:text-lg leading-relaxed mt-4">
            At Royal Eagle, we recognize the unique opportunities that different
            sectors present. Our comprehensive approach to investment spans a
            wide range of industries, allowing us to diversify portfolios and
            optimize returns for our clients. As a client-centric firm, we
            prioritize transparency, integrity, and a results-driven mindset to
            ensure our clients' financial objectives are not only met but
            exceeded.
          </p>
        </div>
      </section>

      {/* SLIDE 3: Investments (chunk1) */}
      <section className="w-screen h-screen flex-shrink-0 overflow-y-auto pt-28 px-8 lg:px-16">
        <div className="container mx-auto">
          {/* "Our Investments" heading only appears here */}
          <h2 className="text-xl lg:text-5xl font-bold mb-8 font-luloClean text-center">
            Our Investments
          </h2>

          <div className="grid grid-cols-1 gap-8 lg:py-10 lg:px-32">
            {chunk1.map(({ number, title, description }, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-2 text-right">
                  <h3 className="text-4xl lg:text-8xl text-gold font-oswaldmd">
                    {number}
                  </h3>
                </div>
                <div className="col-span-10 text-left lg:ml-4">
                  <h4 className="text-xs lg:text-xl font-luloClean">{title}</h4>
                  <p className="text-xs lg:text-sm mt-1 font-futura text-gray-500">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 4: Investments (chunk2) */}
      <section className="w-screen h-screen flex-shrink-0 overflow-y-auto pt-28 px-6 lg:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:py-10 lg:px-32">
            {chunk2.map(({ number, title, description }, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-2 text-right">
                  <h3 className="text-4xl lg:text-8xl text-gold font-oswaldmd">
                    {number}
                  </h3>
                </div>
                <div className="col-span-10 text-left lg:ml-4">
                  <h4 className="text-xs lg:text-xl font-luloClean">{title}</h4>
                  <p className="text-xs lg:text-sm mt-1 font-futura text-gray-500">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 5: Investments (chunk3) */}
      <section className="w-screen h-screen flex-shrink-0 overflow-y-auto pt-28 px-6 lg:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:py-10 lg:px-32">
            {chunk3.map(({ number, title, description }, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-2 text-right">
                  <h3 className="text-4xl lg:text-8xl text-gold font-oswaldmd">
                    {number}
                  </h3>
                </div>
                <div className="col-span-10 text-left lg:ml-4">
                  <h4 className="text-xs lg:text-xl font-luloClean">{title}</h4>
                  <p className="text-xs lg:text-sm mt-1 font-futura text-gray-500">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 6: Contact / Footer Section */}
      <section className="relative w-screen h-screen flex-shrink-0 bg-black text-gray-200 flex items-center justify-center">

        {/* Waves Background (Top Half) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <Waves
            lineColor="#372b19"
            backgroundColor="black"
            waveSpeedX={0.01}
            waveSpeedY={0.008}
            waveAmpX={32}
            waveAmpY={16}
            style={{ zIndex: 0 }}
          />
        </div>

        {/* Contact Content Centered */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-6 p-8">

          {/* Title */}
          <h2 className="text-3xl lg:text-5xl font-luloClean text-gold">
            Reach Out to Us
          </h2>

          {/* Address */}
          <div className="flex flex-col items-center">
            <p className="text-sm lg:text-base font-futura text-gray-400 uppercase tracking-wide">
              Address:
            </p>
            <p className="text-sm lg:text-base font-futura text-gray-300 max-w-xs">
              Office No. 104A6, Deira – Al Garhoud, Dubai, UAE
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <p className="text-sm lg:text-base font-futura text-gray-400 uppercase tracking-wide">
              Phone Number:
            </p>
            <p className="text-sm lg:text-base font-futura text-gray-300">
              +971 58 6081986
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <p className="text-sm lg:text-base font-futura text-gray-400 uppercase tracking-wide">
              Email:
            </p>
            <p className="text-sm lg:text-base font-futura text-gray-300">
              info@royaleagleinvestment.com
            </p>
          </div>

          {/* CTA Button */}
          <div>
            <a
              href="mailto:info@royaleagleinvestment.com"
              className="inline-block bg-gold text-black font-luloClean px-6 py-3 rounded shadow-md hover:bg-yellow-300 transition duration-200"
            >
              Email Us
            </a>
          </div>

          {/* Footer Small Print */}
          <div className="text-xs lg:text-sm text-gray-500 text-center mt-4">
            &copy; {new Date().getFullYear()} Royal Eagle Investments L.L.C <br />
            Registered under Dubai, United Arab Emirates
          </div>
        </div>
      </section>
    </>
  );
};

export default StaticContent;
