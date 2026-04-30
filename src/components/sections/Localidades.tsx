import { ubuntu } from "@/lib/fonts";

const leftCities = [
  "São João del Rei",
  "Tiradentes",
  "Resende Costa",
  "Lagoa Dourada",
  "Coronel Xavier Chaves",
  "Carrancas",
  "Conceição da Barra de Minas",
  "Madre de Deus de Minas",
  "São Vicente de Minas",
  "Nazareno",
  "Ritápolis",
  "Prados",
  "Dores de Campo",
  "Barroso",
  "Ibertioga",
];

const rightCities = [
  "Lavras",
  "São Tiago",
  "Entre Rios de Minas",
  "São Brás do Suaçuí",
  "Jeceaba",
  "Alfredo Vasconcelos",
  "Antônio Carlos",
  "Itutinga",
  "Itumirim",
  "Ijaci",
  "Capela Nova",
  "Casa Grande",
  "Carandaí",
  "Caranaíba",
  "Desterro do Melo",
];

export default function Localidades() {
  return (
    <section id="localidades" className="py-16 lg:py-24" style={{ background: "#FFFFFF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid 2 colunas: texto/listas à esquerda, mapa à direita */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Coluna esquerda */}
          <div className="order-2 lg:order-1">
            <h3 className={`${ubuntu.variable} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-ubuntu mb-4`}>
              <span className="text-black">Energia Solar </span>
              <span className="text-[#008CA3]">ao seu alcance!</span>
            </h3>
            <p className={`${ubuntu.variable} text-base sm:text-lg md:text-xl text-black font-ubuntu leading-relaxed mb-8`}>
              Atendemos a 30 cidades do campo das vertentes.<br className="hidden sm:block" />
              Se você também está por perto, conte conosco para reduzir<br className="hidden sm:block" />
              a sua conta de energia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
              <ul className={`${ubuntu.variable} list-none p-0 m-0 text-black font-ubuntu text-sm sm:text-base lg:text-lg leading-relaxed space-y-1`}>
                {leftCities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <ul className={`${ubuntu.variable} list-none p-0 m-0 text-black font-ubuntu text-sm sm:text-base lg:text-lg leading-relaxed space-y-1`}>
                {rightCities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center lg:justify-start">
              <a 
                href="#contato" 
                className={`${ubuntu.variable} inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-[#008CA3] rounded-lg text-white font-bold text-base sm:text-lg hover:bg-[#007a8f] transition-colors duration-200 font-ubuntu`}
              >
                Fazer orçamento
              </a>
            </div>
          </div>

          {/* Coluna direita: mapa */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476449.04199093557!2d-44.562224554772726!3d-21.102272241687132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x224622d3c6fff3c5%3A0x2c5d01a9603829b7!2sEletroV!5e0!3m2!1spt-BR!2sbr!4v1777553540915!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


