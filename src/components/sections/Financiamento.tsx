import Image from "next/image";
import { ubuntu } from "@/lib/fonts";

export default function Financiamento() {
  return (
    <section id="financiamento" className="relative overflow-hidden" style={{ backgroundColor: "#008CA3" }}>
      <div className="relative mx-auto" style={{ width: 1920, height: 867 }}>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 509, top: 93, width: 902, height: 110, color: "#000000", fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 96, lineHeight: 1 }}>
          Financie em até 72x
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 352, top: 203, width: 1216, height: 46, color: "#FFFFFF", fontFamily: "var(--font-ubuntu)", fontWeight: 400, fontSize: 40, lineHeight: 1.2 }}>
          e inicie o pagamento apenas após o funcionamento do seu sistema!
        </div>
        <div className="absolute" style={{ left: 336, top: 337, width: 1248, height: 201, background: "#FFFFFF", borderRadius: 8 }} />
        <div className="absolute" style={{ left: 570, top: 341, width: 248, height: 194 }}>
          <Image src="/logo-bank1.png" alt="Logo banco 1" fill sizes="248px" style={{ objectFit: "contain" }} />
        </div>
        <div className="absolute" style={{ left: 1103, top: 341, width: 248, height: 194 }}>
          <Image src="/logo-bank2.png" alt="Logo banco 2" fill sizes="248px" style={{ objectFit: "contain" }} />
        </div>
        <div className={`${ubuntu.variable} absolute`} style={{ left: 427, top: 627, width: 1065, height: 28, color: "#FFFFFF", fontFamily: "var(--font-ubuntu)", fontWeight: 400, fontSize: 24, lineHeight: 1.2 }}>
          *Entre em contato pelo nosso WhatsApp e consulte todos os bancos e financiamentos disponíveis.
        </div>
        <a href="#contato" className="absolute inline-flex items-center justify-center" style={{ left: 814, top: 723, width: 292, height: 52, background: "#FFFFFF", borderRadius: 45 }}>
          <span className={`${ubuntu.variable}`} style={{ color: "#008CA3", fontFamily: "var(--font-ubuntu)", fontWeight: 700, fontSize: 24 }}>Entre em contato</span>
        </a>
      </div>
    </section>
  );
}


