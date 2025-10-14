"use client";

import { ubuntu } from "@/lib/fonts";

export default function Diretrizes() {
  return (
    <section id="diretrizes" className="relative overflow-hidden py-16 lg:py-24" style={{ backgroundColor: "#008CA3" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className={`${ubuntu.variable} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white font-ubuntu mb-4`}>
            MVV
          </h2>
          <div className="w-32 sm:w-40 md:w-48 lg:w-56 h-1 bg-white mx-auto mb-4"></div>
          <p className={`${ubuntu.variable} text-lg sm:text-xl md:text-2xl text-white font-ubuntu`}>
            Confira nosso MVV
          </p>
        </div>

        {/* MVV Cards */}
        <div className="space-y-8 lg:space-y-12">
          {/* Missão e Visão Row */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Missão */}
            <div className="border-3 border-white rounded-3xl p-6 sm:p-8 lg:p-10">
              <h3 className={`${ubuntu.variable} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-ubuntu mb-4`}>
                Missão
              </h3>
              <p className={`${ubuntu.variable} text-base sm:text-lg md:text-xl lg:text-2xl text-white font-ubuntu leading-relaxed opacity-95`}>
                Levar soluções em energia elétrica e solar fotovoltaica com qualidade, eficiência e atendimento humanizado, gerando economia e sustentabilidade para cada cliente.
              </p>
            </div>

            {/* Visão */}
            <div className="border-3 border-white rounded-3xl p-6 sm:p-8 lg:p-10">
              <h3 className={`${ubuntu.variable} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-ubuntu mb-4`}>
                Visão
              </h3>
              <p className={`${ubuntu.variable} text-base sm:text-lg md:text-xl lg:text-2xl text-white font-ubuntu leading-relaxed opacity-95`}>
                Ser reconhecida como a empresa que transforma energia em confiança e resultados, sendo referência regional em projetos e instalações elétricas e solares.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="border-3 border-white rounded-3xl p-6 sm:p-8 lg:p-10">
            <h3 className={`${ubuntu.variable} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-ubuntu mb-6 text-center`}>
              Valores
            </h3>
            <div className={`${ubuntu.variable} text-base sm:text-lg md:text-xl lg:text-2xl text-white font-ubuntu leading-relaxed opacity-95 text-center space-y-2`}>
              <p><span className="font-bold">Compromisso:</span> estar sempre ao lado do cliente, do início ao pós-venda.</p>
              <p><span className="font-bold">Qualidade:</span> entregar serviços seguros e duradouros.</p>
              <p><span className="font-bold">Inovação:</span> buscar constantemente novas tecnologias.</p>
              <p><span className="font-bold">Sustentabilidade:</span> cuidar do futuro com energia limpa.</p>
              <p><span className="font-bold">Ética e respeito:</span> relações transparentes e confiáveis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


