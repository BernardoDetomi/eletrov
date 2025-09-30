"use client";

import { ubuntu } from "@/lib/fonts";

export default function Diretrizes() {
  return (
    <section id="diretrizes" className="relative overflow-hidden" style={{ backgroundColor: "#008CA3" }}>
      <div className="relative mx-auto" style={{ width: 1920, height: 1227 }}>
        {/* Título (MVV) em x846 y4553 => top=80 */}
        <div className={`${ubuntu.variable} absolute`} style={{ left: 846, top: 80, width: 228, height: 94, color: "#FFFFFF", fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 96, lineHeight: 1 }}>
          MVV
        </div>

        {/* Linha (w463) em x728 y4666 => top=193 */}
        <div className="absolute" style={{ left: 728, top: 193, width: 463, height: 0, borderTop: "3px solid #FFFFFF" }} />

        {/* Subtítulo em x846 y4685 => top=212 */}
        <div className={`${ubuntu.variable} absolute`} style={{ left: 846, top: 212, width: 228, height: 27, color: "#FFFFFF", fontFamily: "var(--font-ubuntu)", fontWeight: 400, fontSize: 24, lineHeight: 1 }}>
          Confira nosso MVV
        </div>

        {/* Retângulos - medidas proporcionais por não haver dimensões exatas no TXT */}
        {/* Missão (esquerda) */}
        <div className="absolute" style={{ left: 160, top: 320, width: 775, height: 340, border: "3px solid #FFFFFF", borderRadius: 30, background: "transparent", padding: 32 }}>
          <div className={`${ubuntu.variable}`} style={{ color: "#FFFFFF", fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 60, marginBottom: 12 }}>Missão</div>
          <p className={`${ubuntu.variable}`} style={{ color: "#FFFFFF", fontFamily: "var(--font-ubuntu)", fontWeight: 400, fontSize: 28, lineHeight: 1.5, opacity: 0.95 }}>
            Levar soluções em energia elétrica e solar fotovoltaica com qualidade, eficiência e atendimento humanizado, gerando economia e sustentabilidade para cada cliente.
          </p>
        </div>

        {/* Visão (direita) */}
        <div className="absolute" style={{ left: 985, top: 320, width: 775, height: 340, border: "3px solid #FFFFFF", borderRadius: 30, background: "transparent", padding: 32 }}>
          <div className={`${ubuntu.variable}`} style={{ color: "#FFFFFF", fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 60, marginBottom: 12 }}>Visão</div>
          <p className={`${ubuntu.variable}`} style={{ color: "#FFFFFF", fontFamily: "var(--font-ubuntu)", fontWeight: 400, fontSize: 28, lineHeight: 1.5, opacity: 0.95 }}>
            Ser reconhecida como a empresa que transforma energia em confiança e resultados, sendo referência regional em projetos e instalações elétricas e solares.
          </p>
        </div>

        {/* Valores (em baixo, ocupando as duas colunas) */}
        <div className="absolute" style={{ left: 160, top: 700, width: 1600, height: 420, border: "3px solid #FFFFFF", borderRadius: 30, background: "transparent", padding: 32 }}>
          <div className={`${ubuntu.variable}`} style={{ textAlign: "center", color: "#FFFFFF", fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 60, marginBottom: 12 }}>Valores</div>
          <div className={`${ubuntu.variable}`} style={{ textAlign: "center", color: "#FFFFFF", fontFamily: "var(--font-ubuntu)", fontWeight: 400, fontSize: 28, lineHeight: 1.6, opacity: 0.95, whiteSpace: "pre-line" }}>
            {`Compromisso: estar sempre ao lado do cliente, do início ao pós-venda.
Qualidade: entregar serviços seguros e duradouros.
Inovação: buscar constantemente novas tecnologias.
Sustentabilidade: cuidar do futuro com energia limpa.
Ética e respeito: relações transparentes e confiáveis.`}
          </div>
        </div>
      </div>
    </section>
  );
}


