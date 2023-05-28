import Button from "../Atoms/Button";

export default function BookAMeetingButton() {
  return (
    <Button
      onClick={() => {
        window.open("https://calendly.com/tebeckford/15min", "_blank");
      }}
      className="bg-indigo-500 hover:bg-indigo-600 rounded-lg border-none text-white drop-shadow-lg transition-all"
    >
      Schedule a 30-min call
    </Button>
  );
}
