import Image from "next/image";
import NavButtons from "../Molecules/NavButtons";

export default function Home() {
  const nextSection = () => {
    const ele = document.getElementById("experience");
    if (ele) ele.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home" className="container mx-auto">
      <div className="m-10 md:flex md:justify-center md:items-center md:m-0 md:mt-10 md:py-20">
        <div className="text-center md:w-5/12 md:mx-auto md:align-center">
          <div className="text-xl mb-10  md:mx-auto md:text-left md:text-5xl ">
            <h3 className="mb-10">
              Helping businesses grow through technology and design doing
              quality code.
            </h3>
            <NavButtons />
          </div>
        </div>

        <div className="relative h-36 w-36 mx-auto md:h-96 md:w-96">
          <Image
            src="/profile/thomas.jpg"
            fill
            alt="avatar"
            className="rounded-full object-cover object-top"
          />
        </div>
      </div>

      <div className="w-full">
        <Image
          src="/arrow-down-circle.svg"
          className="mx-auto  cursor-pointer pb-5 mt-5"
          onClick={nextSection}
          width={50}
          height={50}
          alt="arrow"
        />
      </div>
    </div>
  );
}
