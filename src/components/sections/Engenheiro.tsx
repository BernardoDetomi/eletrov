"use client";

import Image from "next/image";
import { ubuntu } from "@/lib/fonts";
import CountUp from "./CountUp";
import LazySection from "./LazySection";

export default function Engenheiro() {
  return (
    <LazySection id="engenheiro" className="relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="relative mx-auto" style={{ width: 1920, height: 714 }}>
        {/* Título (w1101 x h110) em x409 y3877 => top=119 */}
        <div className={`${ubuntu.variable} absolute`} style={{ left: 409, top: 119, width: 1101, height: 110, color: "#008CA3", fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 96, lineHeight: 1 }}>
          Sobre nosso engenheiro
        </div>

        {/* Bloco 1 */}
        <div className="absolute" style={{ left: 407, top: 330, width: 103, height: 103 }}>
          <Image src="/Imagem1.png" alt="Ícone 1" fill sizes="103px" style={{ objectFit: "contain" }} />
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 407, top: 453, width: 103, height: 41, textAlign: "center", color: "#060606", fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 36, lineHeight: 1 }}>
          +<CountUp to={2000} duration={2} format={(v)=>v.toLocaleString("pt-BR")} />
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 309, top: 510, width: 300, height: 46, textAlign: "center", color: "#060606", fontFamily: "var(--font-ubuntu)", fontWeight: 400, fontSize: 20, lineHeight: 1.2 }}>
          <p>sistemas fotovoltaicos instalados</p>
          <p>em Minas Gerais</p>
        </div>

        {/* Bloco 2 */}
        <div className="absolute" style={{ left: 741, top: 330, width: 103, height: 103 }}>
          <Image src="/Imagem2.png" alt="Ícone 2" fill sizes="103px" style={{ objectFit: "contain" }} />
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 713, top: 453, width: 158, height: 41, textAlign: "center", color: "#060606", fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 36, lineHeight: 1 }}>
          +<CountUp to={16} duration={2} /> MWp
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 685, top: 510, width: 216, height: 23, textAlign: "center", color: "#060606", fontFamily: "var(--font-ubuntu)", fontWeight: 400, fontSize: 20, lineHeight: 1 }}>
          de capacidade instalada
        </div>

        {/* Bloco 3 */}
        <div className="absolute" style={{ left: 1082, top: 330, width: 103, height: 103 }}>
          <Image src="/Imagem3.png" alt="Ícone 3" fill sizes="103px" style={{ objectFit: "contain" }} />
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 1098, top: 453, width: 71, height: 41, textAlign: "center", color: "#060606", fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 36, lineHeight: 1 }}>
          +<CountUp to={1} duration={2} format={(v)=>v.toString()} />,<CountUp to={8} duration={2} format={(v)=>v.toString()} />
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 1102, top: 506, width: 65, height: 23, textAlign: "center", color: "#060606", fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 20, lineHeight: 1 }}>
          milhão
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 1042, top: 549, width: 185, height: 46, textAlign: "center", color: "#060606", fontFamily: "var(--font-ubuntu)", fontWeight: 400, fontSize: 20, lineHeight: 1.2 }}>
          <p>ao mês de economia</p>
          <p>para nossos clientes</p>
        </div>

        {/* Bloco 4 */}
        <div className="absolute" style={{ left: 1416, top: 330, width: 103, height: 103 }}>
          <Image src="/Imagem4.png" alt="Ícone 4" fill sizes="103px" style={{ objectFit: "contain" }} />
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 1419, top: 453, width: 95, height: 41, textAlign: "center", color: "#060606", fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 36, lineHeight: 1 }}>
          -<CountUp to={1000} duration={2} format={(v)=>v.toLocaleString("pt-BR")} />
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 1412, top: 506, width: 111, height: 23, textAlign: "center", color: "#060606", fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 20, lineHeight: 1 }}>
          ton. de CO2
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 1331, top: 549, width: 273, height: 23, textAlign: "center", color: "#060606", fontFamily: "var(--font-ubuntu)", fontWeight: 400, fontSize: 20, lineHeight: 1 }}>
          emitidos ao mês na atmosfera
        </div>
      </div>
    </LazySection>
  );
}


