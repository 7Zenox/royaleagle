// HomePage.jsx

"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import StaticContent from "./assets/content";
import SVGComponent from "./assets/SVGComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [totalScrollHeight, setTotalScrollHeight] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = sectionsRef.current;
    const pinWrapper = pinWrapperRef.current;
    if (!sections || !pinWrapper) return;

    const updateMeasurements = () => {
      setTotalScrollHeight(sections.scrollWidth);
    };
    updateMeasurements();
    window.addEventListener("resize", updateMeasurements);

    const ctx = gsap.context(() => {
      const totalWidth = sections.scrollWidth;
      const maxHorizontal = totalWidth - window.innerWidth;

      gsap.to(sections, {
        x: -maxHorizontal,
        ease: "none",
        scrollTrigger: {
          trigger: pinWrapper,
          start: "top top",
          end: totalWidth,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, pinWrapper);

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setShowNavbar(window.scrollY <= lastScrollY || window.scrollY < 100);
      lastScrollY = window.scrollY;

      const path = pathRef.current;
      if (path) {
        const scrollDist = totalScrollHeight - window.innerWidth;
        const scrolled = window.scrollY;
        const pct = scrolled / scrollDist;
        const length = path.getTotalLength();
        path.style.strokeDashoffset = String(length - length * Math.min(pct, 1));
      }
    };

    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = String(length);
      path.style.strokeDashoffset = String(length);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMeasurements);
      ctx.revert();
    };
  }, [totalScrollHeight]);

  return (
    <div
      className="bg-black text-gray-300 w-full overflow-x-hidden relative"
      style={{ minHeight: totalScrollHeight }}
    >
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

      <div className="fixed w-full h-56 bottom-10 -z-5 items-start justify-center lg:flex overflow-hidden">
        <SVGComponent ref={pathRef} />
      </div>

      <div
        ref={pinWrapperRef}
        className="sticky top-0 left-0 w-full h-screen overflow-hidden"
      >
        <div ref={sectionsRef} className="flex h-full">
          <StaticContent />
        </div>
      </div>
    </div>
  );
}
