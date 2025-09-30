import Image from "next/image";
import { ubuntu } from "@/lib/fonts";

export default function SobreNos() {
  return (
    <section id="sobre-nos" className="relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="relative mx-auto" style={{ width: 1920, height: 1080 }}>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 712, top: 112, width: 453, height: 110, color: "#008CA3", fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 96, lineHeight: 1 }}>
          Sobre nós
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 160, top: 321, width: 876, height: 662, color: "#008CA3", fontFamily: "var(--font-ubuntu)", fontWeight: 300, fontSize: 32, lineHeight: 1.5 }}>
          <p style={{ marginBottom: 24 }}>
            A EletroV nasceu com o propósito de oferecer muito mais do que projetos de energia: nosso diferencial é o cuidado em cada detalhe, do primeiro contato ao acompanhamento após a instalação.
          </p>
          <p style={{ marginBottom: 24 }}>
            Com experiência consolidada no setor elétrico e fotovoltaico, já participamos da implantação de milhares de usinas na região, sempre com foco na qualidade e no atendimento próximo. Sabemos que investir em energia é uma decisão importante, por isso trabalhamos para que cada cliente se sinta seguro, bem atendido e confiante de que fez a melhor escolha.
          </p>
          <p>
            Na EletroV, acreditamos que o pós-venda é parte essencial da experiência. Por isso, estamos sempre disponíveis para acompanhar, orientar e garantir que cada projeto entregue continue gerando resultados por muitos anos.
          </p>
        </div>
        <div className="absolute" style={{ left: 1323, top: 411, width: 312, height: 300 }}>
          <Image src="/logo1.png" alt="Logo 1" fill sizes="312px" style={{ objectFit: "contain" }} />
        </div>
        <div className="absolute" style={{ left: 1209, top: 746, width: 550, height: 146 }}>
          <Image src="/logo2.png" alt="Logo 2" fill sizes="550px" style={{ objectFit: "contain" }} />
        </div>
      </div>
    </section>
  );
}


