import Image from "next/image";

export default function Home() {
  const nextSection = () => {
    const ele = document.getElementById("experience");
    if (ele) ele.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="home"
      className={`border border-b-red-50 bg-gradient-to-r from-sky-500 to-indigo-500`}
    >
      <div className="h-[30rem] mx-auto flex justify-center text-center items-center">
        <div>
          <h2 className="text-white drop-shadow-md text-6xl">
            Hi, I&apos;m Thomas Beckford
          </h2>
          <h3 className="text-white drop-shadow-md text-3xl">
            Software Engineer
          </h3>
        </div>
      </div>
      <div className="w-full">
        <Image
          src="/arrow-down-circle.svg"
          className="mx-auto pb-10 animate-bounce cursor-pointer hover:animate-none"
          onClick={nextSection}
          width={50}
          height={50}
          alt="arrow"
        />
      </div>
    </div>
  );
}
