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
    button: "px-4 py-2 text-white bg-indigo-600",
    disabled: "opacity-50 cursor-not-allowed",
    rounded: "rounded-md",
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
