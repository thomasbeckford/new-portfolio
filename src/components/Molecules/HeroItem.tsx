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
    <div className="w-full text-center  shadow px-0 py-1 rounded-md md:w-auto md:min-h-72 md:p-5">
      <div className="max-w-20 h-20 relative mx-auto">
        <Image
          src={item.image}
          alt={item.title}
          className="object-contain"
          fill
          unoptimized
        />
      </div>

      <Text size="xl" className="text-gray-800 mt-5">
        {item.title}
      </Text>

      <Text size="sm" className="text-gray-300 mt-5">
        {item.description}
      </Text>
    </div>
  );
}
