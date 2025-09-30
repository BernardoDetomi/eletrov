import Image from "next/image";
import Header from "@/components/header";
import { ubuntu } from "@/lib/fonts";

export default function HomeHero() {
  return (
    <section id="home" className="relative overflow-hidden" style={{ backgroundColor: "#008CA3" }}>
      <div className="relative mx-auto" style={{ width: 1920, height: 1080 }}>
        <Image src="/home-bg.png" alt="Fundo Home" fill priority sizes="1920px" style={{ objectFit: "cover", opacity: 0.13 }} />
        <div className="absolute z-30" style={{ left: "50%", top: 144, transform: "translateX(-50%)" }}>
          <Header />
        </div>
        <div className={`absolute text-white ${ubuntu.variable}`} style={{ left: 294, top: 429, width: 742, height: 222 }}>
          <h1 style={{ fontSize: 64, lineHeight: 1.15, fontFamily: "var(--font-ubuntu)" }}>
            <span style={{ fontWeight: 400 }}>Boas-vindas à </span>
            <span style={{ fontWeight: 700 }}>EletroV</span>
            <br />
            <span style={{ fontWeight: 700 }}>Precisão</span>
            <span style={{ fontWeight: 400 }}> que transforma,</span>
            <br />
            <span style={{ fontWeight: 700 }}>energia</span>
            <span style={{ fontWeight: 400 }}> que conecta!</span>
          </h1>
        </div>
        <div className="absolute" style={{ left: 850, top: 226, width: 1067, height: 854 }}>
          <Image src="/piggy.png" alt="Cofrinho" fill sizes="1067px" style={{ objectFit: "contain" }} priority />
        </div>
      </div>
    </section>
  );
}


