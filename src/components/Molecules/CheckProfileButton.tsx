import Button from "../Atoms/Button";

export default function CheckProfileButton() {
  return (
    <div className="gap-2  md:flex">
      <Button
        className="bg-violet-800 hover:bg-violet-600 rounded-lg border-none text-white drop-shadow-lg transition-all"
        rounded
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/thomas-beckford-07520775/",
            "_blank"
          );
        }}
      >
        Check my profile
      </Button>
    </div>
  );
}
