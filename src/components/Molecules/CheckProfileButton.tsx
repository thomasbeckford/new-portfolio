import Button from "../Atoms/Button";

export default function CheckProfileButton() {
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
        Check my profile
      </Button>
    </div>
  );
}
