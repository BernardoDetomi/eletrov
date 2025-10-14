"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsAtTop(window.scrollY < 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className="z-20 w-full max-w-[1301px] mx-auto"
        style={{
          height: 82,
          borderRadius: 45,
          backgroundColor: "#FFFFFF",
          boxShadow: isAtTop ? "0 6px 24px rgba(0,0,0,0.08)" : "0 3px 16px rgba(0,0,0,0.12)",
        }}
      >
        <div className="h-full w-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logos */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Image src="/logo1.png" alt="Logo 1" width={35} height={32} className="sm:w-[45px] sm:h-[42px]" />
            <Image src="/logo2.png" alt="Logo 2" width={100} height={26} className="sm:w-[124px] sm:h-[33px]" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12 text-[#008CA3]" style={{ fontFamily: "Ubuntu, var(--font-geist-sans)", fontSize: 18 }}>
            <Link href="#home" className="hover:opacity-80 transition-opacity">Home</Link>
            <Link href="#sobre-nos" className="hover:opacity-80 transition-opacity">Sobre nós</Link>
            <Link href="#diretrizes" className="hover:opacity-80 transition-opacity">Diretrizes</Link>
            <Link href="#cases" className="hover:opacity-80 transition-opacity">Cases</Link>
            <Link href="#contato" className="hover:opacity-80 transition-opacity">Contato</Link>
          </nav>

          {/* Desktop CTA */}
          <Link
            href="#resultado-economia"
            className="hidden lg:inline-flex items-center justify-center text-white"
            style={{
              backgroundColor: "#008CA3",
              width: 160,
              height: 60,
              borderRadius: 45,
              fontSize: 18,
              fontFamily: "Ubuntu, var(--font-geist-sans)",
              padding: "0 20px"
            }}
          >
            Economizar
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
            aria-label="Toggle mobile menu"
          >
            <span className={`w-6 h-0.5 bg-[#008CA3] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#008CA3] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#008CA3] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30" onClick={closeMobileMenu}>
          <div 
            className="absolute top-0 right-0 w-80 h-full bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Close Button */}
              <button
                onClick={closeMobileMenu}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center"
                aria-label="Close mobile menu"
              >
                <span className="w-6 h-0.5 bg-[#008CA3] rotate-45"></span>
                <span className="w-6 h-0.5 bg-[#008CA3] -rotate-45 absolute"></span>
              </button>

              {/* Mobile Navigation */}
              <nav className="mt-16 space-y-6">
                <Link 
                  href="#home" 
                  className="block text-[#008CA3] text-xl font-medium hover:opacity-80 transition-opacity"
                  onClick={closeMobileMenu}
                  style={{ fontFamily: "Ubuntu, var(--font-geist-sans)" }}
                >
                  Home
                </Link>
                <Link 
                  href="#sobre-nos" 
                  className="block text-[#008CA3] text-xl font-medium hover:opacity-80 transition-opacity"
                  onClick={closeMobileMenu}
                  style={{ fontFamily: "Ubuntu, var(--font-geist-sans)" }}
                >
                  Sobre nós
                </Link>
                <Link 
                  href="#diretrizes" 
                  className="block text-[#008CA3] text-xl font-medium hover:opacity-80 transition-opacity"
                  onClick={closeMobileMenu}
                  style={{ fontFamily: "Ubuntu, var(--font-geist-sans)" }}
                >
                  Diretrizes organizacionais
                </Link>
                <Link 
                  href="#cases" 
                  className="block text-[#008CA3] text-xl font-medium hover:opacity-80 transition-opacity"
                  onClick={closeMobileMenu}
                  style={{ fontFamily: "Ubuntu, var(--font-geist-sans)" }}
                >
                  Cases de sucesso
                </Link>
                <Link 
                  href="#contato" 
                  className="block text-[#008CA3] text-xl font-medium hover:opacity-80 transition-opacity"
                  onClick={closeMobileMenu}
                  style={{ fontFamily: "Ubuntu, var(--font-geist-sans)" }}
                >
                  Contato
                </Link>
              </nav>

              {/* Mobile CTA */}
              <div className="mt-8">
                <Link
                  href="#resultado-economia"
                  className="inline-flex items-center justify-center text-white w-full"
                  style={{
                    backgroundColor: "#008CA3",
                    height: 60,
                    borderRadius: 45,
                    fontSize: 18,
                    fontFamily: "Ubuntu, var(--font-geist-sans)",
                  }}
                  onClick={closeMobileMenu}
                >
                  Economizar
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


