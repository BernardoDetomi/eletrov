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
  const envNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "32999650094"; // defina em .env.local
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
    <section id="contato" style={{ background: "#F7F7F7" }}>
      <div className="mx-auto" style={{ width: 1920, padding: "80px 160px" }}>
        <h2 className={`${ubuntu.variable}`} style={{ textAlign: "center", fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 48, marginBottom: 8, color: "#008CA3" }}>
          Comece a economizar com Energia Solar hoje
        </h2>
        <p className={`${ubuntu.variable}`} style={{ textAlign: "center", color: "#444", fontFamily: "var(--font-ubuntu)", fontWeight: 400, fontSize: 20, marginBottom: 32 }}>
          Preencha o formulário abaixo e faça um orçamento gratuito
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open(link, "_blank");
          }}
          style={{ maxWidth: 860, margin: "0 auto", background: "#FFFFFF", padding: 32, borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div>
              <label className={`${ubuntu.variable}`} style={{ display: "block", fontFamily: "var(--font-ubuntu)", fontWeight: 700, marginBottom: 6, color: "#008CA3" }}>Nome</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} required placeholder="Seu nome" style={{ width: "100%", height: 44, borderRadius: 8, border: "1px solid #DDD", padding: "0 12px", color: "#111" }} />
            </div>
            <div>
              <label className={`${ubuntu.variable}`} style={{ display: "block", fontFamily: "var(--font-ubuntu)", fontWeight: 700, marginBottom: 6, color: "#008CA3" }}>WhatsApp</label>
              <input value={phone} onChange={(e)=>setPhone(formatPhone(e.target.value))} required placeholder="(32) 99999-9999" inputMode="numeric" style={{ width: "100%", height: 44, borderRadius: 8, border: "1px solid #DDD", padding: "0 12px", color: "#111" }} />
            </div>
            <div>
              <label className={`${ubuntu.variable}`} style={{ display: "block", fontFamily: "var(--font-ubuntu)", fontWeight: 700, marginBottom: 6, color: "#008CA3" }}>CEP</label>
              <input value={cep} onChange={(e)=>setCep(formatCep(e.target.value))} required placeholder="36300-000" inputMode="numeric" style={{ width: "100%", height: 44, borderRadius: 8, border: "1px solid #DDD", padding: "0 12px", color: "#111" }} />
            </div>
            <div>
              <label className={`${ubuntu.variable}`} style={{ display: "block", fontFamily: "var(--font-ubuntu)", fontWeight: 700, marginBottom: 6, color: "#008CA3" }}>Consumo mensal (kWh)</label>
              <input value={consumo} onChange={(e)=>setConsumo(onlyDigits(e.target.value))} required placeholder="Ex.: 350" inputMode="numeric" style={{ width: "100%", height: 44, borderRadius: 8, border: "1px solid #DDD", padding: "0 12px", color: "#111" }} />
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 16 }}>
            <label className={`${ubuntu.variable}`} style={{ fontFamily: "var(--font-ubuntu)", fontWeight: 700, color: "#008CA3" }}>Enviar por:</label>
            <label className={`${ubuntu.variable}`} style={{ fontFamily: "var(--font-ubuntu)", display: "flex", alignItems: "center", gap: 6, color: "#000000" }}>
              <input type="radio" checked={canal === "whatsapp"} onChange={()=>setCanal("whatsapp")} /> WhatsApp
            </label>
            <label className={`${ubuntu.variable}`} style={{ fontFamily: "var(--font-ubuntu)", display: "flex", alignItems: "center", gap: 6, color: "#000000" }}>
              <input type="radio" checked={canal === "email"} onChange={()=>setCanal("email")} /> E-mail
            </label>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
            <button type="submit" className={`${ubuntu.variable}`} style={{ height: 48, padding: "0 28px", background: "#008CA3", color: "#FFFFFF", border: 0, borderRadius: 8, cursor: "pointer", fontFamily: "var(--font-ubuntu)", fontWeight: 700 }}>
              Pedir orçamento
            </button>
          </div>
        </form>
        <style jsx>{`
          input::placeholder { color: #222; opacity: 1; }
        `}</style>
      </div>
    </section>
  );
}


