import { MouseEventHandler } from "react";

type ButtonType = {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  authButton?: boolean;
  modalActionBtn?: boolean;
  modalCancelBtn?: boolean;
  submit?: boolean;
  cancelBtnBorderColor?: string;
  submitBtnBgColor?: string;
};

const Button = (props: ButtonType) => {
  const {
    children,
    className,
    onClick,
    authButton,
    modalActionBtn,
    submit,
    modalCancelBtn,
    cancelBtnBorderColor,
    submitBtnBgColor,
  } = props;

  let btnClass;
  if (authButton) {
    btnClass =
      "py-3 hover:bg-blue-800 duration-200 rounded-full bg-[#2563eb] mt-2 text-white font-semibold tracking-wide focus:outline-gray-500";
  } else if (modalActionBtn) {
    btnClass = `px-4 text-sm py-0.5 border-2 ${submitBtnBgColor || "bg-[#2563eb] border-blue-500"} rounded-md text-white`;
  } else if (modalCancelBtn) {
    btnClass = `px-4 text-sm py-0.5 text-gray-800 border-2 ${cancelBtnBorderColor || "border-blue-500"} rounded-md`;
  } else {
    btnClass = className;
  }

  return (
    <button
      type={submit ? "submit" : "button"}
      onClick={onClick}
      className={btnClass}
    >
      {children}
    </button>
  );
};

export default Button;