import classnames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  rounded?: boolean;
  className?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export default function Button(props: ButtonProps) {
  const {
    children,
    rounded,
    disabled,
    className,
    size = "md",
    type = "button",
    onClick,
  } = props;

  const defaultStyles = {
    button:
      "bg-white text-slate-900 font-bold border-2 border-gray-200 py-4 px-8",
    disabled: "opacity-50 cursor-not-allowed",
    rounded: "rounded-full",
  };

  const sizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const classProps: string = classnames(
    defaultStyles.button,
    { [sizeStyles[size]]: size },
    { [defaultStyles.rounded]: rounded },
    { [defaultStyles.disabled]: disabled },
    className
  );

  return (
    <button type={type} className={classProps} onClick={onClick}>
      {children}
    </button>
  );
}
