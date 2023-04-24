import Image from "next/image";
import CheckProfileButton from "../Molecules/CheckProfileButton";
import Text from "../../components/Atoms/Text";

export default function Home() {
  const nextSection = () => {
    const ele = document.getElementById("experience");
    if (ele) ele.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home">
      <div className="container mx-auto">
        <div className="m-10 md:flex md:justify-center md:items-center md:m-0 md:mt-10 md:py-20">
          <div className="text-center md:w-5/12 md:mx-auto md:align-center">
            <div className="text-xl mb-10  md:mx-auto md:text-left md:text-5xl ">
              <h3 className="mb-10">
                Helping businesses grow through technology and design doing
                quality code.
              </h3>
              <CheckProfileButton />
            </div>
          </div>

          <div className="relative h-64 w-64 mx-auto md:h-96 md:w-96">
            <Image
              priority
              src="/profile/thomas.jpg"
              sizes="200"
              fill
              alt="avatar"
              className="rounded-full object-cover object-top shadow-2xl "
            />
          </div>
        </div>
      </div>
      <div className="grid place-items-center h-24 bg-slate-500 ">
        <div
          className="flex items-center gap-5 cursor-pointer hover:scale-110 transform transition-all duration-500 ease-in-out animate animate-pulse"
          onClick={nextSection}
        >
          <Image
            src="/arrow-down-circle.svg"
            className="mx-auto  cursor-pointer pb-5 mt-5 "
            width={50}
            height={50}
            alt="arrow"
          />
          <Text className="font-bold text-xl">Learn more about Thomas</Text>
        </div>
      </div>
    </div>
  );
}
