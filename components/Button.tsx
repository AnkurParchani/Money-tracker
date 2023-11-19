import { MouseEventHandler } from "react";

type ButtonType = {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, className, onClick }: ButtonType) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
