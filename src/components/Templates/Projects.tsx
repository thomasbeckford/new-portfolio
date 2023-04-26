import Text from "../Atoms/Text";
import Image from "next/image";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

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
  const [copyText, setCopyText] = useState("Click to copy url");

  const copyUrl = (e: Event, href: string) => {
    navigator.clipboard.writeText(href);
    e.stopPropagation();
    setCopyText("Copied!");
  };

  const openUrl = (href: string) => {
    window.open(href, "_blank");
  };

  return (
    <div
      id="projects"
      className="container mx-auto  space-y-10 bg-slate-600 rounded-lg shadow-md p-0 md:p-16"
    >
      <h2 className="text-4xl text-center mb-20 pt-10 md:pt-0">
        Some of the software development projects I&apos;ve contributed to.
      </h2>

      <div className="grid gap-2 justify-items-center 2xl:grid-cols-3 xl:grid-cols-2">
        {projectItems.map((item) => (
          <div
            key={item.title}
            className="relative border-hover bg-gray-700 "
            id={`card-${item.title}`}
            onClick={() => openUrl(item.href)}
            onMouseEnter={() => setCopyText("Click to copy url")}
          >
            <div className="p-5 h-40 rounded-lg hover:bg-slate-500 hover-img">
              <div className="gap-5 mx-auto w-full text-center cursor-pointer  flex ">
                <Toaster />

                <figure className="w-20 h-24 relative mx-auto md:w-40 md:h-24 ">
                  <Image
                    src={item.image}
                    alt="soymenu"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </figure>
                <figcaption
                  className="m-2"
                  onClick={(e: any) => copyUrl(e, item.href)}
                >
                  <h3 className="px-3 py-2 border-4 border-transparent hover:border-red-500 bg-white rounded-lg text-black ">
                    {copyText}
                  </h3>
                </figcaption>

                <div className="w-5/6">
                  <Text size="xl" className="mb-2">
                    {item.title}
                  </Text>
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
