"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ubuntu } from "@/lib/fonts";

function brl(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function ResultadoEconomia() {
  const [valor, setValor] = useState<number>(0);
  const [fase, setFase] = useState<"bifasico" | "trifasico">("bifasico");

  const yMin = fase === "bifasico" ? 80 : 130;

  const anos = useMemo(() => {
    const baseAnual = Math.max(0, valor * 12 - yMin * 12);
    return [1, 2, 3, 4, 5].map((n) => baseAnual * n);
  }, [valor, yMin]);

  return (
    <section id="resultado-economia" className="relative overflow-hidden py-16 lg:py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              <Image src="/dollar1.png" alt="Ícone dólar" fill sizes="80px" style={{ objectFit: "contain" }} />
            </div>
          </div>
          <h2 className={`${ubuntu.variable} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black font-ubuntu mb-4`}>
            Esse é o resultado da economia que você vai alcançar.
          </h2>
          <p className={`${ubuntu.variable} text-base sm:text-lg md:text-xl text-black font-ubuntu`}>
            Use o simulador abaixo e descubra quanto você poderá<br className="hidden sm:block" />
            economizar ao longo dos anos.
          </p>
        </div>

        {/* Calculator Container */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Panel - Controls */}
            <div className="bg-gray-200 rounded-lg p-6 sm:p-8">
              <h3 className={`${ubuntu.variable} text-lg sm:text-xl font-normal text-black font-ubuntu mb-4`}>
                Valor aproximado da sua conta de luz
              </h3>
              <div className={`${ubuntu.variable} text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-ubuntu mb-6`}>
                {brl(valor)}
              </div>
              
              {/* Phase Selection */}
              <div className={`${ubuntu.variable} mb-6 font-bold text-base sm:text-lg text-black font-ubuntu`}>
                <label className="block mb-2">
                  <input 
                    type="radio" 
                    name="fase" 
                    checked={fase === "bifasico"} 
                    onChange={() => setFase("bifasico")}
                    className="mr-2"
                  /> 
                  Bifásico (mínimo {brl(80)})
                </label>
                <label className="block">
                  <input 
                    type="radio" 
                    name="fase" 
                    checked={fase === "trifasico"} 
                    onChange={() => setFase("trifasico")}
                    className="mr-2"
                  /> 
                  Trifásico (mínimo {brl(130)})
                </label>
              </div>
              
              {/* Slider */}
              <div>
                <input 
                  type="range" 
                  min={0} 
                  max={5000} 
                  step={10} 
                  value={valor} 
                  onChange={(e) => setValor(parseInt(e.target.value || "0", 10))}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className={`${ubuntu.variable} mt-2 flex justify-between text-sm sm:text-base text-black font-ubuntu`}>
                  <span>R$ 0</span>
                  <span>{brl(valor)}</span>
                </div>
              </div>
            </div>

            {/* Right Panel - Results */}
            <div className="bg-[#008CA3] rounded-lg p-6 sm:p-8">
              <div className={`${ubuntu.variable} text-lg sm:text-xl lg:text-2xl font-bold font-ubuntu mb-8`}>
                <span className="text-white">Com o nosso projeto de </span>
                <span className="text-black">Energia Solar</span>
                <br />
                <span className="text-white">você </span>
                <span className="text-black">economizará...</span>
              </div>
              
              {/* Results Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={`${ubuntu.variable} text-lg sm:text-xl font-bold font-ubuntu`}>
                  <span className="text-white">Em 1 ano </span>
                  <span className="text-black">≈ {brl(anos[0])}</span>
                </div>
                <div className={`${ubuntu.variable} text-lg sm:text-xl font-bold font-ubuntu`}>
                  <span className="text-white">Em 2 anos </span>
                  <span className="text-black">≈ {brl(anos[1])}</span>
                </div>
                <div className={`${ubuntu.variable} text-lg sm:text-xl font-bold font-ubuntu`}>
                  <span className="text-white">Em 3 anos </span>
                  <span className="text-black">≈ {brl(anos[2])}</span>
                </div>
                <div className={`${ubuntu.variable} text-lg sm:text-xl font-bold font-ubuntu`}>
                  <span className="text-white">Em 4 anos </span>
                  <span className="text-black">≈ {brl(anos[3])}</span>
                </div>
                <div className={`${ubuntu.variable} text-lg sm:text-xl font-bold font-ubuntu sm:col-span-2`}>
                  <span className="text-white">Em 5 anos </span>
                  <span className="text-black">≈ {brl(anos[4])}</span>
                </div>
              </div>
              
              {/* Legend */}
              <div className={`${ubuntu.variable} text-center mt-6 text-white text-xs sm:text-sm font-ubuntu opacity-85`}>
                (≈ = aproximadamente)
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={() => {
                const envNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "32999650094";
                const msg = `Olá! Gostaria de saber mais sobre como economizar com Energia Solar. Vi que posso economizar aproximadamente ${brl(anos[4])} em 5 anos!`;
                const url = `https://wa.me/55${envNumber}?text=${encodeURIComponent(msg)}`;
                window.open(url, "_blank");
              }}
              className={`${ubuntu.variable} bg-green-500 hover:bg-green-600 text-white border-none rounded-xl px-8 sm:px-12 lg:px-16 py-4 sm:py-5 font-bold text-lg sm:text-xl lg:text-2xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 font-ubuntu`}
              style={{
                animation: "pulseColors 2s ease-in-out infinite"
              }}
            >
              ECONOMIZAR
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulseColors {
          0% { background-color: #22C55E; }
          50% { background-color: #008CA3; }
          100% { background-color: #22C55E; }
        }
        
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #008CA3;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #008CA3;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </section>
  );
}


