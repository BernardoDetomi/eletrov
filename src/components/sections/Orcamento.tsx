"use client";

import { useMemo, useState } from "react";
import { ubuntu } from "@/lib/fonts";

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

function formatPhone(input: string) {
  const d = onlyDigits(input).slice(0, 11);
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 7) return `(${d.slice(0,2)}) ${d.slice(2)}`;
  if (d.length <= 11) return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;
  return input;
}

function formatCep(input: string) {
  const d = onlyDigits(input).slice(0, 8);
  if (d.length <= 5) return d;
  return `${d.slice(0,5)}-${d.slice(5)}`;
}

function buildWhatsAppLink(name: string, phone: string, cep: string, consumo: string) {
  const msg = `Olá, meu nome é ${name}. Gostaria de um orçamento.\nWhatsApp: ${phone}\nCEP: ${cep}\nConsumo mensal: ${consumo} kWh`;
  const envNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "32999650094";
  const digits = onlyDigits(envNumber);
  const url = `https://wa.me/55${digits}?text=${encodeURIComponent(msg)}`;
  return url;
}

function buildMailtoLink(name: string, phone: string, cep: string, consumo: string) {
  const subject = `Orçamento - EletroV`;
  const body = `Olá, meu nome é ${name}.\nWhatsApp: ${phone}\nCEP: ${cep}\nConsumo mensal: ${consumo} kWh`;
  return `mailto:victor.eletrov@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Orcamento() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [consumo, setConsumo] = useState("");
  const [canal, setCanal] = useState<"whatsapp" | "email">("whatsapp");

  const link = useMemo(() => {
    return canal === "whatsapp"
      ? buildWhatsAppLink(name, phone, cep, consumo)
      : buildMailtoLink(name, phone, cep, consumo);
  }, [canal, name, phone, cep, consumo]);

  return (
    <section id="contato" className="py-16 lg:py-24" style={{ background: "#F7F7F7" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`${ubuntu.variable} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#008CA3] font-ubuntu mb-4`}>
            Comece a economizar com Energia Solar hoje
          </h2>
          <p className={`${ubuntu.variable} text-base sm:text-lg md:text-xl text-gray-600 font-ubuntu`}>
            Preencha o formulário abaixo e faça um orçamento gratuito
          </p>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(link, "_blank");
            }}
            className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg"
          >
            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div>
                <label className={`${ubuntu.variable} block font-bold text-[#008CA3] font-ubuntu mb-2 text-sm sm:text-base`}>
                  Nome
                </label>
                <input 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                  placeholder="Seu nome" 
                  className="w-full h-10 sm:h-12 rounded-lg border border-gray-300 px-3 sm:px-4 text-gray-900 focus:border-[#008CA3] focus:outline-none focus:ring-2 focus:ring-[#008CA3]/20 transition-colors placeholder:text-gray-600"
                />
              </div>
              <div>
                <label className={`${ubuntu.variable} block font-bold text-[#008CA3] font-ubuntu mb-2 text-sm sm:text-base`}>
                  WhatsApp
                </label>
                <input 
                  value={phone} 
                  onChange={(e) => setPhone(formatPhone(e.target.value))} 
                  required 
                  placeholder="(32) 99999-9999" 
                  inputMode="numeric"
                  className="w-full h-10 sm:h-12 rounded-lg border border-gray-300 px-3 sm:px-4 text-gray-900 focus:border-[#008CA3] focus:outline-none focus:ring-2 focus:ring-[#008CA3]/20 transition-colors placeholder:text-gray-600"
                />
              </div>
              <div>
                <label className={`${ubuntu.variable} block font-bold text-[#008CA3] font-ubuntu mb-2 text-sm sm:text-base`}>
                  CEP
                </label>
                <input 
                  value={cep} 
                  onChange={(e) => setCep(formatCep(e.target.value))} 
                  required 
                  placeholder="36300-000" 
                  inputMode="numeric"
                  className="w-full h-10 sm:h-12 rounded-lg border border-gray-300 px-3 sm:px-4 text-gray-900 focus:border-[#008CA3] focus:outline-none focus:ring-2 focus:ring-[#008CA3]/20 transition-colors placeholder:text-gray-600"
                />
              </div>
              <div>
                <label className={`${ubuntu.variable} block font-bold text-[#008CA3] font-ubuntu mb-2 text-sm sm:text-base`}>
                  Consumo mensal (kWh)
                </label>
                <input 
                  value={consumo} 
                  onChange={(e) => setConsumo(onlyDigits(e.target.value))} 
                  required 
                  placeholder="Ex.: 350" 
                  inputMode="numeric"
                  className="w-full h-10 sm:h-12 rounded-lg border border-gray-300 px-3 sm:px-4 text-gray-900 focus:border-[#008CA3] focus:outline-none focus:ring-2 focus:ring-[#008CA3]/20 transition-colors placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* Channel Selection */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8">
              <label className={`${ubuntu.variable} font-bold text-[#008CA3] font-ubuntu text-sm sm:text-base`}>
                Enviar por:
              </label>
              <div className="flex gap-6">
                <label className={`${ubuntu.variable} flex items-center gap-2 text-black font-ubuntu cursor-pointer`}>
                  <input 
                    type="radio" 
                    checked={canal === "whatsapp"} 
                    onChange={() => setCanal("whatsapp")}
                    className="text-[#008CA3] focus:ring-[#008CA3]"
                  /> 
                  <span className="text-sm sm:text-base">WhatsApp</span>
                </label>
                <label className={`${ubuntu.variable} flex items-center gap-2 text-black font-ubuntu cursor-pointer`}>
                  <input 
                    type="radio" 
                    checked={canal === "email"} 
                    onChange={() => setCanal("email")}
                    className="text-[#008CA3] focus:ring-[#008CA3]"
                  /> 
                  <span className="text-sm sm:text-base">E-mail</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button 
                type="submit" 
                className={`${ubuntu.variable} bg-[#008CA3] hover:bg-[#007a8f] text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-lg transition-colors duration-200 font-ubuntu text-base sm:text-lg`}
              >
                Pedir orçamento
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </section>
  );
}


