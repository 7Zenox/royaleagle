"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import StaticContent from "./assets/content"; // Your existing content component
import SVGComponent from "./assets/SVGComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  // Track totalScrollHeight so the page is tall enough for vertical scrolling
  const [totalScrollHeight, setTotalScrollHeight] = useState(0);

  // References
  const pathRef = useRef<SVGPathElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = sectionsRef.current;
    const pinWrapper = pinWrapperRef.current;

    if (!sections || !pinWrapper) return;

    // 1) Calculate total width -> set that as our vertical scrollable height
    const updateMeasurements = () => {
      const totalWidth = sections.scrollWidth; // total horizontal width
      setTotalScrollHeight(totalWidth);
    };
    updateMeasurements();
    window.addEventListener("resize", updateMeasurements);

    // 2) GSAP scroll trigger: pin the container & move horizontally on vertical scroll
    const ctx = gsap.context(() => {
      const totalWidth = sections.scrollWidth;
      const maxHorizontalMovement = totalWidth - window.innerWidth;

      gsap.to(sections, {
        x: -maxHorizontalMovement,
        ease: "none",
        scrollTrigger: {
          trigger: pinWrapper,
          start: "top top",
          // Scroll until we've traversed totalWidth
          end: totalWidth,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, pinWrapper);

    // 3) Navbar show/hide + SVG path animation
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      // Navbar visibility logic
      setShowNavbar(window.scrollY <= lastScrollY || window.scrollY < 100);
      lastScrollY = window.scrollY;

      // SVG path stroke dash offset
      const path = pathRef.current;
      if (path) {
        // The vertical distance we can scroll
        const totalScrollDistance = totalScrollHeight - window.innerWidth;
        const scrollPosition = window.scrollY;
        const scrollPercentage = scrollPosition / totalScrollDistance;
        const pathLength = path.getTotalLength();

        path.style.strokeDashoffset = String(
          pathLength - pathLength * Math.min(scrollPercentage, 1)
        );
      }
    };

    // Initialize the path stroke
    const path = pathRef.current;
    if (path) {
      const pathLength = path.getTotalLength();
      path.style.strokeDasharray = String(pathLength);
      path.style.strokeDashoffset = String(pathLength);
    }

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMeasurements);
      ctx.revert();
    };
  }, [totalScrollHeight]);

  return (
    // This outer wrapper uses dynamic minHeight = totalScrollHeight
    // so we can scroll that full distance vertically.
    <div
      className="bg-black text-gray-300 w-full overflow-x-hidden relative"
      style={{ minHeight: totalScrollHeight }}
    >
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-md flex justify-between items-center px-8 lg:px-16 py-6 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Royal Eagle Logo" width={60} height={60} />
          <span className="text-xs lg:text-sm font-luloClean text-gold">
            Royal Eagle <br /> Investment L.L.C
          </span>
        </div>
      </nav>

      {/* SVG Scroll Effect */}
      <div className="fixed w-full h-56 bottom-10 -z-5 items-start justify-center lg:flex overflow-hidden">
        <SVGComponent ref={pathRef} />
      </div>

      {/* PINNED WRAPPER: pinned with GSAP, full viewport height */}
      <div
        ref={pinWrapperRef}
        className="sticky top-0 left-0 w-full h-screen overflow-hidden"
      >
        {/* 
          The horizontally stacked sections.
          If <StaticContent /> has multiple 100vw sections,
          they must be rendered inside a single .flex container.
        */}
        <div ref={sectionsRef} className="flex h-full">
          <StaticContent />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
