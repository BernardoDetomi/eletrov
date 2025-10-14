import Image from "next/image";
import { ubuntu } from "@/lib/fonts";

export default function Financiamento() {
  return (
    <section id="financiamento" className="relative overflow-hidden py-16 lg:py-24" style={{ backgroundColor: "#008CA3" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className={`${ubuntu.variable} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black font-ubuntu mb-6`}>
            Financie em até 72x
          </h2>
          <p className={`${ubuntu.variable} text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-ubuntu max-w-4xl mx-auto`}>
            e inicie o pagamento apenas após o funcionamento do seu sistema!
          </p>
        </div>

        {/* Bank Logos Section */}
        <div className="bg-white rounded-lg p-8 sm:p-12 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-items-center">
            <div className="relative w-48 sm:w-56 md:w-64 lg:w-72 aspect-[248/194]">
              <Image 
                src="/logo-bank1.png" 
                alt="Logo banco 1" 
                fill 
                sizes="(max-width: 768px) 200px, (max-width: 1200px) 250px, 300px" 
                style={{ objectFit: "contain" }} 
              />
            </div>
            <div className="relative w-48 sm:w-56 md:w-64 lg:w-72 aspect-[248/194]">
              <Image 
                src="/logo-bank2.png" 
                alt="Logo banco 2" 
                fill 
                sizes="(max-width: 768px) 200px, (max-width: 1200px) 250px, 300px" 
                style={{ objectFit: "contain" }} 
              />
            </div>
          </div>
        </div>

        {/* Footer Text and CTA */}
        <div className="text-center">
          <p className={`${ubuntu.variable} text-base sm:text-lg md:text-xl text-white font-ubuntu mb-8 max-w-4xl mx-auto`}>
            *Entre em contato pelo nosso WhatsApp e consulte todos os bancos e financiamentos disponíveis.
          </p>
          <a 
            href="#contato" 
            className={`${ubuntu.variable} inline-flex items-center justify-center bg-white text-[#008CA3] font-bold text-lg sm:text-xl lg:text-2xl px-8 sm:px-12 lg:px-16 py-3 sm:py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-ubuntu`}
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
}


