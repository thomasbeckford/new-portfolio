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
  const openLink = (href: string) => {
    window.open(href, "_blank");
  };

  return (
    <div
      id="projects"
      className="container mx-auto p-16 space-y-10 bg-slate-600 rounded-lg shadow-md"
    >
      <h2 className="text-4xl text-center mb-20">
        Some of projects I&apos;ve worked on
      </h2>

      <div className="grid gap-4 grid-cols-1  justify-items-center md:grid-cols-3">
        {projectItems.map((item) => (
          <div
            key={item.title}
            className="w-full text-center space-y-5 hover:drop-shadow-xl transition-all cursor-pointer md:w-3/5"
            onClick={() => openLink(item.href)}
          >
            <div className="w-40 h-40 bg-gray-200 rounded-full relative mx-auto ">
              <Image
                src={item.image}
                alt="soymenu"
                fill
                unoptimized
                className="object-contain"
              />
            </div>

            <Text size="xl">{item.title}</Text>
            <Text size="md">{item.description}</Text>
          </div>
        ))}
      </div>
    </div>
  );
}
