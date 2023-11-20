import { MouseEventHandler } from "react";

type ButtonType = {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  authButton?: boolean;
};

const Button = ({ children, className, onClick, authButton }: ButtonType) => {
  let btnClass;
  if (authButton)
    btnClass =
      "py-3 hover:bg-blue-900 duration-200 rounded-full bg-[#0a66c2] mt-2 text-white font-semibold tracking-wide focus:outline-gray-500";
  else btnClass = className;

  return (
    <button onClick={onClick} className={btnClass}>
      {children}
    </button>
  );
};

export default Button;
