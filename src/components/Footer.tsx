import Image from "next/image";
import { ubuntu } from "@/lib/fonts";

export default function Footer() {
  return (
    <footer>
      {/* Faixa superior escura */}
      <div style={{ background: "#3f3f3f" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <Image 
                src="/marca.png" 
                alt="Marca" 
                width={180} 
                height={130} 
                className="w-44 sm:w-52 lg:w-56 h-auto"
              />
            </div>
            
            {/* Contatos */}
            <div className="text-center lg:text-left">
              <div className={`${ubuntu.variable} text-white font-bold text-sm sm:text-base lg:text-lg font-ubuntu mb-2`}>
                CONTATOS
              </div>
              <div className={`${ubuntu.variable} text-white text-sm sm:text-base font-ubuntu`}>
                victor.eletrov@gmail.com<br/>
                (32) 99965-0094
              </div>
            </div>
            
            {/* CNPJ e Endereço */}
            <div className="text-center lg:text-left">
              <div className={`${ubuntu.variable} text-white font-bold text-sm sm:text-base lg:text-lg font-ubuntu mb-2`}>
                CNPJ
              </div>
              <div className={`${ubuntu.variable} text-white text-sm sm:text-base font-ubuntu mb-4`}>
                62.280.411/0001-35
              </div>
              <div className={`${ubuntu.variable} text-white font-bold text-sm sm:text-base lg:text-lg font-ubuntu mb-2`}>
                ENDEREÇO
              </div>
              <div className={`${ubuntu.variable} text-white text-sm sm:text-base font-ubuntu`}>
                Rua Coronel Gabriel M Ferreira, 95,<br className="hidden sm:block" />
                Colônia do Marçal, São João del-Rei - Minas Gerais
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa inferior turquesa com crédito */}
      <div style={{ background: "#008CA3" }} className="text-center py-6">
        <div className={`${ubuntu.variable} text-white font-bold text-sm sm:text-base font-ubuntu mb-4`}>
          DESENVOLVIDO POR
        </div>
        <div className="flex justify-center mb-2">
          <a 
            href="https://github.com/bernardodetomi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-opacity duration-200 hover:opacity-80"
          >
            <Image 
              src="/bmd-logo.png" 
              alt="BMD" 
              width={110} 
              height={80} 
              className="w-24 sm:w-32 lg:w-36 h-auto"
            />
          </a>
        </div>
        <div className={`${ubuntu.variable} text-white text-xs sm:text-sm font-ubuntu`}>
          © Copyright. All rights reserved
        </div>
      </div>
    </footer>
  );
}


