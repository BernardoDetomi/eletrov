import Image from "next/image";
import { ubuntu } from "@/lib/fonts";

export default function SobreNos() {
  return (
    <section id="sobre-nos" className="relative overflow-hidden py-16 lg:py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className={`${ubuntu.variable} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#008CA3] font-ubuntu`}>
            Sobre nós
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className={`${ubuntu.variable} text-[#008CA3] font-light text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-ubuntu space-y-6`}>
            <p>
              A EletroV nasceu com o propósito de oferecer muito mais do que projetos de energia: nosso diferencial é o cuidado em cada detalhe, do primeiro contato ao acompanhamento após a instalação.
            </p>
            <p>
              Com experiência consolidada no setor elétrico e fotovoltaico, já participamos da implantação de milhares de usinas na região, sempre com foco na qualidade e no atendimento próximo. Sabemos que investir em energia é uma decisão importante, por isso trabalhamos para que cada cliente se sinta seguro, bem atendido e confiante de que fez a melhor escolha.
            </p>
            <p>
              Na EletroV, acreditamos que o pós-venda é parte essencial da experiência. Por isso, estamos sempre disponíveis para acompanhar, orientar e garantir que cada projeto entregue continue gerando resultados por muitos anos.
            </p>
          </div>

          {/* Logos */}
          <div className="flex flex-col items-center lg:items-end space-y-8">
            <div className="relative w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 aspect-[312/300]">
              <Image 
                src="/logo1.png" 
                alt="Logo 1" 
                fill 
                sizes="(max-width: 768px) 200px, (max-width: 1200px) 250px, 320px" 
                style={{ objectFit: "contain" }} 
              />
            </div>
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[550px] aspect-[550/146]">
              <Image 
                src="/logo2.png" 
                alt="Logo 2" 
                fill 
                sizes="(max-width: 768px) 300px, (max-width: 1200px) 400px, 550px" 
                style={{ objectFit: "contain" }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


