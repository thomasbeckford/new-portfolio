import Button from "../Atoms/Button";

export default function NavButtons() {
  return (
    <div className="gap-2 hidden md:flex">
      <Button
        className="bg-blue-500"
        rounded
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/thomas-beckford-07520775/",
            "_blank"
          );
        }}
      >
        LinkedIn
      </Button>
      <Button
        rounded
        onClick={() => {
          window.open(
            'https://api.whatsapp.com/send?phone=5491134908167&text=Hola!%20Quisiera%20mas%20informacion%20sobre%20el%20plan%20de%20SoyMenu"',
            "_blank"
          );
        }}
      >
        Hire me!
      </Button>
    </div>
  );
}
