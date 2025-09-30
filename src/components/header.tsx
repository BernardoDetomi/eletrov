"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setIsAtTop(window.scrollY < 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="z-20"
      style={{
        width: 1301,
        height: 82,
        borderRadius: 45,
        backgroundColor: "#FFFFFF",
        boxShadow: isAtTop ? "0 6px 24px rgba(0,0,0,0.08)" : "0 3px 16px rgba(0,0,0,0.12)",
      }}
    >
      <div className="h-full w-full flex items-center justify-between px-8">
        {/* Logos */}
        <div className="flex items-center gap-3">
          <Image src="/logo1.png" alt="Logo 1" width={45} height={42} />
          <Image src="/logo2.png" alt="Logo 2" width={124} height={33} />
        </div>

        {/* Navegação */}
        <nav className="flex items-center gap-12 text-[#008CA3]" style={{ fontFamily: "Ubuntu, var(--font-geist-sans)", fontSize: 20 }}>
          <Link href="#home" className="hover:opacity-80">Home</Link>
          <Link href="#sobre-nos" className="hover:opacity-80">Sobre nós</Link>
          <Link href="#diretrizes" className="hover:opacity-80">Diretrizes organizacionais</Link>
          <Link href="#cases" className="hover:opacity-80">Cases de sucesso</Link>
          <Link href="#contato" className="hover:opacity-80">Contato</Link>
        </nav>

        {/* CTA */}
        <Link
          href="#resultado-economia"
          className="inline-flex items-center justify-center text-white"
          style={{
            backgroundColor: "#008CA3",
            width: 183,
            height: 69,
            borderRadius: 45,
            fontSize: 20,
            fontFamily: "Ubuntu, var(--font-geist-sans)",
            padding: "0 24px"
          }}
        >
          Economizar
        </Link>
      </div>
    </header>
  );
}


