import HeroItems from "../Organisms/HeroItems";
import Image from "next/image";

export default function Experience() {
  return (
    <div id="experience" className="container mx-auto p-5 md:p-16 space-y-10">
      <div className="md:flex md:justify-evenly mb-20 ">
        <div className="md:flex gap-4 w-full">
          <figure>
            <Image
              src="/profile/with_chris.jpeg"
              alt="avatar"
              width={400}
              height={200}
              className="rounded-md object-cover max-h-36 w-auto mx-auto md:max-h-64"
            />

            <figcaption className="text-center text-sm">
              With Christopher Chedeau (React Co-Creator)
            </figcaption>
          </figure>

          <figure>
            <Image
              src="/profile/with_kent.jpg"
              alt="avatar"
              className="rounded-md object-cover max-h-36 w-auto object-y-4 mx-auto md:max-h-64"
              width={400}
              height={200}
            />
            <figcaption className="text-center text-sm">
              With Kent C. Dodds (React Testing Library Creator)
            </figcaption>
          </figure>
        </div>

        <div className="  mx-auto mt-10 md:w-7/12">
          <h2 className="text-xl text-center mb-5 md:text-4xl md:text-right">
            Hi, I&apos;m Thomas E. Beckford.
            <br />I am a software engineer.
          </h2>

          <p className="text-lg text-center md:text-right">
            With over 5 years of experience. I enjoy meeting new people and
            learning new things. I am a self-taught developer who is always
            looking for ways to improve my skills.
          </p>
        </div>
      </div>
      <HeroItems />
    </div>
  );
}
