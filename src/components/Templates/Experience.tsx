import HeroItems from "../Organisms/HeroItems";
import Image from "next/image";

export default function Experience() {
  return (
    <div id="experience" className="container mx-auto py-10">
      <div className="md:flex md:justify-evenly mb-20 ">
        <div className="gap-4 w-full space-y-10 lg:space-y-0 lg:flex ">
          <figure>
            <Image
              src="/profile/with_chris.jpeg"
              alt="avatar"
              width={400}
              height={200}
              className="rounded-md object-cover max-h-36 w-auto mx-auto md:max-h-64"
            />

            <figcaption className="text-center text-sm w-56 mx-auto mt-2">
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
            <figcaption className="text-center text-sm w-56 mx-auto mt-2">
              With Kent C. Dodds (React Testing Library Creator)
            </figcaption>
          </figure>

          <figure>
            <Image
              src="/profile/guitar.jpeg"
              alt="avatar"
              className="rounded-md object-cover max-h-36 w-auto object-y-4 mx-auto md:max-h-64"
              width={400}
              height={200}
            />
            <figcaption className="text-center text-sm w-56 mx-auto mt-2">
              One of my hobbies is playing the guitar.
            </figcaption>
          </figure>
        </div>

        <div className="  mx-auto mt-10 md:w-7/12">
          <h2 className="text-xl text-center mb-5 md:text-4xl md:text-right">
            Hi, I&apos;m Thomas E. Beckford.
            <br />I am a software engineer.
          </h2>

          <p className="text-lg text-center md:text-right">
            As a self-taught developer with over 5 years of experience, I am
            passionate about meeting new people, playing musical instruments,
            and continuously learning new things. I am always looking for ways
            to improve my skills and stay up-to-date with the latest trends in
            the industry.
          </p>
        </div>
      </div>
      <HeroItems />
    </div>
  );
}
