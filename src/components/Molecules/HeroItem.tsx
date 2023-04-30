import Image from "next/image";
import Text from "../Atoms/Text";

type HeroItemProps = {
  item: {
    title: string;
    description: string;
    href: string;
    image: string;
  };
};

export default function HeroItem(props: HeroItemProps) {
  const { item } = props;

  return (
    <div className="text-center bg-zinc-700 shadow-lg px-4 py-8 rounded-md md:p-5">
      <div className="max-w-20 h-20 relative mx-auto">
        <Image
          src={item.image}
          alt={item.title}
          className="object-contain"
          fill
          unoptimized
        />
      </div>

      <Text size="xl" className=" mt-5 font-semibold">
        {item.title}
      </Text>

      <Text size="md" className="mt-5 font-semibold">
        {item.description}
      </Text>
    </div>
  );
}
