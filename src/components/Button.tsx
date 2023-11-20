import { MouseEventHandler } from "react";

type ButtonType = {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  authButton?: boolean;
  modalActionBtn?: boolean;
  modalCancelBtn?: boolean;
};

const Button = ({
  children,
  className,
  onClick,
  authButton,
  modalActionBtn,
  modalCancelBtn,
}: ButtonType) => {
  let btnClass;
  if (authButton) {
    btnClass =
      "py-3 hover:bg-blue-900 duration-200 rounded-full bg-[#0a66c2] mt-2 text-white font-semibold tracking-wide focus:outline-gray-500";
  } else if (modalActionBtn) {
    btnClass =
      "px-4 text-sm py-0.5 border-2 border-blue-500 bg-blue-500 rounded-md text-white";
  } else if (modalCancelBtn) {
    btnClass =
      "px-4 text-sm py-0.5 text-gray-800 border-2 border-blue-400 rounded-md";
  } else {
    btnClass = className;
  }

  return (
    <button onClick={onClick} className={btnClass}>
      {children}
    </button>
  );
};

export default Button;
