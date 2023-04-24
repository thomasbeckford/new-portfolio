import Text from "../Atoms/Text";
import Image from "next/image";

const projectItems = [
  {
    title: "Soy Menu",
    description: `Provides a service to create digital menus for restaurants, with an easy and straightforward process for restaurant owners to use.`,
    href: "https://soymenu.com",
    image: "/soymenu.svg",
  },
  {
    title: "SpiritSwap v2",
    description: `
      Decentralized exchange that offers trading, staking, farming, and now lending services to incentivize participants on the network.
      `,
    href: "https://spiritswap.finance/",
    image: "/spiritswap.png",
  },
  {
    title: "FitGMR App",
    description: `A complete esports performance and player development system that provides game coaching, health and wellness services to gamers`,
    href: "https://www.fitgmr.gg/",
    image: "/fitgmr.jpeg",
  },
  {
    title: "LevyGorvy App",
    description: `Custom CRM for the art gallery to manage their clients and their art pieces.`,
    href: "https://www.levygorvy.com/",
    image: "/levygorvy.png",
  },
  {
    title: "SwiftDoc App",
    description: `Platform that connects patients with doctors and medical professionals in real-time.`,
    href: "https://swiftdoc.com/",
    image: "/swiftdoc.jpeg",
  },
  {
    title: "First On Site",
    description: `First On Site Restoration is a full-service restoration company that provides emergency services.`,
    href: "https://firstonsite.com/",
    image: "/first-on-site.jpeg",
  },
];

export default function Projects() {
  const copyUrl = (href: string) => {
    // tODO: Copy url on click
  };

  return (
    <div
      id="projects"
      className="container mx-auto  space-y-10 bg-slate-600 rounded-lg shadow-md p-0 md:p-16"
    >
      <h2 className="text-4xl text-center mb-20">
        Some of projects I&apos;ve worked on
      </h2>

      <div className="grid gap-2 justify-items-center md:grid-cols-3">
        {projectItems.map((item) => (
          <div key={item.title} className="relative" id={`card-${item.title}`}>
            <div className=" p-5 rounded-lg transition-all hover:bg-slate-500  ">
              <div
                className="gap-5 mx-auto w-full text-center space-y-5  transition-all cursor-pointer  md:flex "
                onClick={() => copyUrl(item.href)}
              >
                <div className="w-20 h-20 relative mx-auto md:w-40 md:h-40 ">
                  <Image
                    src={item.image}
                    alt="soymenu"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>

                <div className="md:w-5/6">
                  <Text size="xl">{item.title}</Text>
                  <Text size="md">{item.description}</Text>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
