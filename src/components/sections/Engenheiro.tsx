"use client";

import Image from "next/image";
import { ubuntu } from "@/lib/fonts";
import CountUp from "./CountUp";
import LazySection from "./LazySection";

export default function Engenheiro() {
  return (
    <LazySection id="engenheiro" className="relative overflow-hidden py-16 lg:py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className={`${ubuntu.variable} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#008CA3] font-ubuntu`}>
            Sobre nosso engenheiro
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
                <Image src="/Imagem1.png" alt="Ícone 1" fill sizes="112px" style={{ objectFit: "contain" }} />
              </div>
            </div>
            <div className={`${ubuntu.variable} text-2xl sm:text-3xl lg:text-4xl font-bold text-[#060606] font-ubuntu mb-2`}>
              +<CountUp to={2000} duration={2} format={(v) => v.toLocaleString("pt-BR")} />
            </div>
            <div className={`${ubuntu.variable} text-sm sm:text-base lg:text-lg text-[#060606] font-ubuntu leading-relaxed`}>
              <p>sistemas fotovoltaicos instalados</p>
              <p>em Minas Gerais</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
                <Image src="/Imagem2.png" alt="Ícone 2" fill sizes="112px" style={{ objectFit: "contain" }} />
              </div>
            </div>
            <div className={`${ubuntu.variable} text-2xl sm:text-3xl lg:text-4xl font-bold text-[#060606] font-ubuntu mb-2`}>
              +<CountUp to={16} duration={2} /> MWp
            </div>
            <div className={`${ubuntu.variable} text-sm sm:text-base lg:text-lg text-[#060606] font-ubuntu`}>
              de capacidade instalada
            </div>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
                <Image src="/Imagem3.png" alt="Ícone 3" fill sizes="112px" style={{ objectFit: "contain" }} />
              </div>
            </div>
            <div className={`${ubuntu.variable} text-2xl sm:text-3xl lg:text-4xl font-bold text-[#060606] font-ubuntu mb-1`}>
              +<CountUp to={1} duration={2} format={(v) => v.toString()} />,<CountUp to={8} duration={2} format={(v) => v.toString()} />
            </div>
            <div className={`${ubuntu.variable} text-sm sm:text-base lg:text-lg font-bold text-[#060606] font-ubuntu mb-2`}>
              milhão
            </div>
            <div className={`${ubuntu.variable} text-sm sm:text-base lg:text-lg text-[#060606] font-ubuntu leading-relaxed`}>
              <p>ao mês de economia</p>
              <p>para nossos clientes</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
                <Image src="/Imagem4.png" alt="Ícone 4" fill sizes="112px" style={{ objectFit: "contain" }} />
              </div>
            </div>
            <div className={`${ubuntu.variable} text-2xl sm:text-3xl lg:text-4xl font-bold text-[#060606] font-ubuntu mb-1`}>
              -<CountUp to={1000} duration={2} format={(v) => v.toLocaleString("pt-BR")} />
            </div>
            <div className={`${ubuntu.variable} text-sm sm:text-base lg:text-lg font-bold text-[#060606] font-ubuntu mb-2`}>
              ton. de CO2
            </div>
            <div className={`${ubuntu.variable} text-sm sm:text-base lg:text-lg text-[#060606] font-ubuntu`}>
              emitidos ao mês na atmosfera
            </div>
          </div>
        </div>
      </div>
    </LazySection>
  );
}


