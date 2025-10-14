import Image from "next/image";
import { ubuntu } from "@/lib/fonts";

type CaseItem = {
  src: string;
  city: string;
};

const items: CaseItem[] = [
  { src: "/cases/obra1.jpg", city: "São João del Rei" },
  { src: "/cases/obra2.jpg", city: "Tiradentes" },
  { src: "/cases/obra3.jpg", city: "Lavras" },
  { src: "/cases/obra4.jpg", city: "Resende Costa" },
  { src: "/cases/obra5.jpg", city: "Barroso" },
  { src: "/cases/obra6.jpg", city: "Prados" },
];

export default function Cases() {
  return (
    <section id="cases" className="relative py-16 lg:py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className={`${ubuntu.variable} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#008CA3] font-ubuntu`}>
            Cases de sucesso
          </h2>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {items.map((item, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden bg-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full aspect-[16/10]">
                <Image 
                  src={item.src} 
                  alt={item.city} 
                  fill 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                  style={{ objectFit: "cover" }} 
                />
              </div>
              <div className="bg-[#008CA3] p-4 sm:p-5">
                <div className={`${ubuntu.variable} text-white font-bold text-lg sm:text-xl font-ubuntu mb-1`}>
                  {item.city}
                </div>
                <div className={`${ubuntu.variable} text-white font-normal text-sm sm:text-base opacity-95 font-ubuntu`}>
                  Projetos Comerciais e Industriais
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ver mais Button */}
        <div className="text-center">
          <a 
            href="#contato" 
            className={`${ubuntu.variable} inline-flex items-center justify-center bg-[#008CA3] text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-3 sm:py-4 rounded-lg hover:bg-[#007a8f] transition-colors duration-200 font-ubuntu`}
          >
            Ver mais
          </a>
        </div>
      </div>
    </section>
  );
}


