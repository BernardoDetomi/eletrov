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
    <section id="resultado-economia" className="relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="relative mx-auto" style={{ width: 1920, height: 800 }}>
        <div className="absolute" style={{ left: 920, top: 101, width: 79, height: 79 }}>
          <Image src="/dollar1.png" alt="Ícone dólar" fill sizes="79px" style={{ objectFit: "contain" }} />
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 454, top: 196, width: 1012, height: 46, color: "#000000", fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 40, lineHeight: 1 }}>
          Esse é o resultado da economia que você vai alcançar.
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 711, top: 258, width: 498, height: 46, color: "#000000", fontFamily: "var(--font-ubuntu)", fontWeight: 400, fontSize: 20, lineHeight: 1.3 }}>
          <p>Use o simulador abaixo e descubra quanto você poderá</p>
          <p>economizar ao longo dos anos.</p>
        </div>

        {/* Retângulo esquerdo (controle) */}
        <div className="absolute" style={{ left: 322, top: 337, width: 638, height: 291, background: "#D9D9D9", borderRadius: 8 }} />
        <div className={`${ubuntu.variable} absolute`} style={{ left: 393, top: 394, width: 520, height: 18, color: "#000000", fontFamily: "var(--font-ubuntu)", fontWeight: 400, fontSize: 16, lineHeight: 1 }}>
          Valor aproximado da sua conta de luz
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 393, top: 420, width: 300, height: 55, color: "#000000", fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 48, lineHeight: 1 }}>
          {brl(valor)}
        </div>
        {/* Fase (bifásico/trifásico) */}
        <div className={`${ubuntu.variable} absolute`} style={{ left: 393, top: 480, width: 520, height: 28, color: "#000000", fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 16, lineHeight: 1 }}>
          <label style={{ marginRight: 16 }}>
            <input type="radio" name="fase" checked={fase === "bifasico"} onChange={()=>setFase("bifasico")} /> Bifásico (mínimo {brl(80)})
          </label>
          <label>
            <input type="radio" name="fase" checked={fase === "trifasico"} onChange={()=>setFase("trifasico")} /> Trifásico (mínimo {brl(130)})
          </label>
        </div>
        {/* Slider funcional */}
        <div className="absolute" style={{ left: 393, top: 530, width: 520 }}>
          <input type="range" min={0} max={5000} step={10} value={valor} onChange={(e)=>setValor(parseInt(e.target.value || "0", 10))} style={{ width: "100%" }} />
          <div className={`${ubuntu.variable}`} style={{ marginTop: 6, display: "flex", justifyContent: "space-between", color: "#000000", fontFamily: "var(--font-ubuntu)", fontWeight: 400, fontSize: 16 }}>
            <span>R$ 0</span>
            <span>{brl(valor)}</span>
          </div>
        </div>

        {/* Retângulo direito (resultado) */}
        <div className="absolute" style={{ left: 960, top: 337, width: 638, height: 291, background: "#008CA3", borderRadius: 8 }} />
        <div className={`${ubuntu.variable} absolute`} style={{ left: 1018, top: 380, width: 498, height: 64, fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 28, lineHeight: 1.2 }}>
          <span style={{ color: "#FFFFFF" }}>Com o nosso projeto de </span>
          <span style={{ color: "#000000" }}>Energia Solar</span>
          <br />
          <span style={{ color: "#FFFFFF" }}>você </span>
          <span style={{ color: "#000000" }}>economizará...</span>
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 1018, top: 475, width: 320, height: 28, fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 24, lineHeight: 1 }}>
          <span style={{ color: "#FFFFFF" }}>Em 1 ano </span>
          <span style={{ color: "#000000" }}>≈ {brl(anos[0])}</span>
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 1018, top: 517, width: 340, height: 28, fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 24, lineHeight: 1 }}>
          <span style={{ color: "#FFFFFF" }}>Em 2 anos </span>
          <span style={{ color: "#000000" }}>≈ {brl(anos[1])}</span>
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 1018, top: 558, width: 340, height: 28, fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 24, lineHeight: 1 }}>
          <span style={{ color: "#FFFFFF" }}>Em 3 anos </span>
          <span style={{ color: "#000000" }}>≈ {brl(anos[2])}</span>
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 1340, top: 460, width: 250, height: 28, fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 24, lineHeight: 1, overflowWrap: "anywhere" }}>
          <span style={{ color: "#FFFFFF" }}>Em 4 anos </span>
          <span style={{ color: "#000000" }}>≈ {brl(anos[3])}</span>
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 1340, top: 540, width: 250, height: 28, fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 24, lineHeight: 1, overflowWrap: "anywhere" }}>
          <span style={{ color: "#FFFFFF" }}>Em 5 anos </span>
          <span style={{ color: "#000000" }}>≈ {brl(anos[4])}</span>
        </div>
        {/* Legenda */}
        <div className={`${ubuntu.variable} absolute`} style={{ left: 960, top: 650, width: 638, height: 20, textAlign: "center", color: "#FFFFFF", fontFamily: "var(--font-ubuntu)", fontWeight: 400, fontSize: 12, opacity: 0.85 }}>
          (≈ = aproximadamente)
        </div>

        {/* Botão ECONOMIZAR */}
        <div className="absolute" style={{ left: 0, top: 700, width: 1920, display: "flex", justifyContent: "center", marginBottom: 40 }}>
          <button
            onClick={() => {
              const envNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "32999650094";
              const msg = `Olá! Gostaria de saber mais sobre como economizar com Energia Solar. Vi que posso economizar aproximadamente ${brl(anos[4])} em 5 anos!`;
              const url = `https://wa.me/55${envNumber}?text=${encodeURIComponent(msg)}`;
              window.open(url, "_blank");
            }}
            className={`${ubuntu.variable}`}
            style={{
              background: "#22C55E",
              color: "#FFFFFF",
              border: "none",
              borderRadius: 12,
              padding: "16px 100px",
              fontFamily: "var(--font-ubuntu)",
              fontWeight: 700,
              fontSize: 24,
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
              transition: "all 0.2s ease",
              animation: "pulseColors 2s ease-in-out infinite"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(34, 197, 94, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(34, 197, 94, 0.3)";
            }}
          >
            ECONOMIZAR
          </button>
        </div>
      </div>
      <style jsx>{`
        @keyframes pulseColors {
          0% { background-color: #22C55E; }
          50% { background-color: #008CA3; }
          100% { background-color: #22C55E; }
        }
      `}</style>
    </section>
  );
}


