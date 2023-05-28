import Image from "next/image";
import CheckProfileButton from "../Molecules/CheckProfileButton";
import BookMeetingButton from "../Molecules/BookAMeetingButton";
import Text from "../../components/Atoms/Text";
import VanilaTilt from "../Molecules/VanilaTilt";
import DownloadResumeButton from "../Molecules/DownloadResumeButton";

export default function Home() {
  const nextSection = () => {
    const ele = document.getElementById("experience");
    if (ele) ele.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home">
      <div className="container mx-auto relative">
        <div className="m-10 md:flex md:justify-center md:items-center md:m-0 md:mt-10 md:pb-56">
          <div className="text-center md:w-5/12 md:mx-auto md:align-center">
            <div className="text-xl mb-10  md:mx-auto md:text-left md:text-5xl ">
              <h3
                className="mb-10 text-white"
                style={{ textShadow: "1px 1px #111" }}
              >
                Helping businesses grow through technology and design doing
                quality code.
              </h3>
              <div className="w-full space-y-2 md:space-y-0 md:flex gap-2">
                <CheckProfileButton />
                <BookMeetingButton />
              </div>
              <div className="mt-3 md:mt-0 ">
                <DownloadResumeButton />
              </div>
            </div>
          </div>

          <VanilaTilt className="relative rounded-full h-64 w-64 mx-auto md:h-96 md:w-96 ">
            <Image
              priority
              src="/profile/thomas.jpg"
              sizes="200"
              fill
              alt="avatar"
              className="rounded-full object-cover object-top shadow-2xl "
            />
          </VanilaTilt>
        </div>
      </div>
      <div className="grid place-items-center h-24 bg-zinc-900">
        <div
          className="flex items-center gap-5  hover:scale-110 transform transition-all duration-500 ease-in-out animate animate-pulse"
          onClick={nextSection}
        >
          <Image
            src="/arrow-down-circle.svg"
            className="mx-auto   pb-5 mt-5 "
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
