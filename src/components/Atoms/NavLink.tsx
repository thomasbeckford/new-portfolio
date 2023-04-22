import Link from "next/link";
import classnames from "classnames";

type LinkProps = {
  name: string;
  href: string;
  className?: string;
};

export default function NavLink(props: LinkProps) {
  const { name, href, className } = props;

  const defaultStyles = {
    link: "block px-3 py-2 rounded-md text-base font-light ",
  };

  const classProps: string = classnames(defaultStyles.link, className);

  return (
    <Link className={classProps} href={href} scroll={false}>
      {name}
    </Link>
  );
}
