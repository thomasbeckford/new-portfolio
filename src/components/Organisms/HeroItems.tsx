import HeroItem from "../Molecules/HeroItem";

export default function HeroItems() {
  const heroItems = [
    {
      title: "TypeScript",
      description:
        "JavaScript superset to build my projects in a type-safe way.",
      href: "/",
      image: "/typescript.svg",
    },
    {
      title: "ReactJS & NextJS",
      description:
        "Using these tools to build performant and scalable web applications.",
      href: "/",
      image: "/react.png",
    },
    {
      title: "Tailwind CSS",
      description:
        "I use this utility-first CSS framework to build my projects.",
      href: "/",
      image: "/tailwind.png",
    },

    {
      title: "GraphQL & REST",
      description:
        "I have experience with both. I prefer GraphQL for its flexibility and performance. But depends on the project.",
      href: "/",
      image: "/graphql.png",
    },
    {
      title: "Node JS",
      description:
        "Backend services for my projects. I have experience with ExpressJS, NestJS, and Fastify.",
      href: "/",
      image: "/node.png",
    },
    {
      title: "Cypress & Jest",
      description:
        "Testing is a must for every project. I use these tools to test my projects.",
      href: "/",
      image: "/cypress.png",
    },
  ];

  return (
    <div className="grid gap-2 md:grid-cols-3">
      {heroItems.map((item, index) => (
        <HeroItem key={index} item={item} />
      ))}
    </div>
  );
}
