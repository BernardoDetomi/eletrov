import Image from "next/image";
import Header from "@/components/header";
import { ubuntu } from "@/lib/fonts";

export default function HomeHero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen" style={{ backgroundColor: "#008CA3" }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/home-bg.png" 
          alt="Fundo Home" 
          fill 
          priority 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px" 
          style={{ objectFit: "cover", opacity: 0.13 }} 
        />
      </div>

      {/* Header */}
      <div className="relative z-30 pt-8 px-4 sm:px-6 lg:px-8">
        <Header />
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Text Content */}
          <div className="text-white order-2 lg:order-1">
            <h1 className={`${ubuntu.variable} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-ubuntu`}>
              <span className="font-normal">Boas-vindas à </span>
              <span className="font-bold">EletroV</span>
              <br />
              <span className="font-bold">Precisão</span>
              <span className="font-normal"> que transforma,</span>
              <br />
              <span className="font-bold">energia</span>
              <span className="font-normal"> que conecta!</span>
            </h1>
          </div>

          {/* Piggy Bank Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end h-full">
            <div className="relative w-full h-full max-h-[calc(100vh-200px)] scale-130 lg:scale-155">
              <Image 
                src="/piggy.png" 
                alt="Cofrinho" 
                fill 
                priority 
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 1000px" 
                style={{ objectFit: "contain" }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


