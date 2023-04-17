import Image from "next/image";

export default function FloatingWhatsapp() {
  return (
    <div
      onClick={() => {
        window.open(
          'https://api.whatsapp.com/send?phone=5491134908167&text=Hola!%20Quisiera%20mas%20informacion%20sobre%20el%20plan%20de%20SoyMenu"',
          "_blank"
        );
      }}
      className="fixed w-12 h-12 z-50 bg-white rounded-full bottom-0 right-0 cursor-pointer m-5 md:m-10 md:hover:w-24 md:hover:h-24 transition-all duration-300 md:w-20 md:h-20
"
    >
      <Image sizes="200px" src="/whatsapp_logo.png" alt="Whatsapp Logo" fill />
    </div>
  );
}
