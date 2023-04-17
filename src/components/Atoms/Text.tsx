import classnames from "classnames";

type TextProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "title";
  className?: string;
};

export default function Text(props: TextProps) {
  const { children, className, size = "md" } = props;

  const defaultStyles = {
    text: "text-gray-900 font-light",
  };

  const sizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    title: "text-3xl",
  };

  const classProps: string = classnames(defaultStyles.text, { [sizeStyles[size]]: size }, className);

  return <div className={classProps}>{children}</div>;
}
