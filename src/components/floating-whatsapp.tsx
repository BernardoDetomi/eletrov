'use client';

const CONTACT_NUMBER = '5532999650094';

function WhatsAppLogo() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M16 0C7.164 0 0 7.164 0 16c0 2.825.738 5.477 2.031 7.781L.703 30.703l7.227-1.895A15.908 15.908 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.512 0-4.875-.688-6.887-1.891l-.492-.297-5.098 1.336 1.363-4.957-.324-.508A13.238 13.238 0 012.667 16C2.667 8.644 8.644 2.667 16 2.667S29.333 8.644 29.333 16 23.356 29.333 16 29.333z"
        fill="currentColor"
      />
      <path
        d="M12.004 9.805c-.297-.66-.61-.672-.895-.684-.23-.008-.496-.008-.758-.008-.262 0-.688.098-1.047.492-.36.394-1.371 1.34-1.371 3.266s1.403 3.789 1.598 4.051c.195.262 2.75 4.195 6.656 5.883.93.399 1.656.637 2.223.816.934.297 1.785.254 2.457.153.75-.113 2.309-.945 2.633-1.859.324-.914.324-1.699.227-1.863-.098-.164-.36-.262-.754-.457-.395-.195-2.333-1.153-2.696-1.285-.363-.133-.628-.196-.89.195-.263.39-1.02 1.285-1.25 1.547-.23.262-.46.297-.856.102-.394-.195-1.664-.613-3.168-1.957-1.172-1.047-1.965-2.34-2.195-2.734-.23-.394-.024-.606.172-.801.176-.176.394-.457.59-.684.196-.226.262-.39.394-.652.132-.262.066-.492-.032-.687-.098-.196-.89-2.145-1.219-2.938z"
        fill="white"
      />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${CONTACT_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-20 inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#25D366] px-4 py-4 text-white shadow-lg shadow-black/20 transition-all duration-300 hover:scale-110 hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366]"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppLogo />
      <span className="max-w-0 overflow-hidden whitespace-nowrap font-medium pr-0 transition-all duration-300 group-hover:max-w-xs group-hover:pr-2">
        Falar agora
      </span>
    </a>
  );
}