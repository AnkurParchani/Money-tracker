import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";

type UserActionBtnType = {
  borderColor: string;
  btnColor: string;
  btnText: string;
  setModalType?: Dispatch<SetStateAction<string>>;
  modalType?: string;
  icon: React.ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const UserActionBtn = ({
  borderColor,
  btnColor,
  btnText,
  setModalType,
  modalType,
  icon,
  onClick,
}: UserActionBtnType) => {
  return (
    <div
      className={`bg-gray-100 grid grid-cols-[auto_1fr] shadow-md border-2 ${borderColor} p-3 rounded-md`}
      onClick={onClick}
    >
      {icon}
      <button
        className={btnColor}
        onClick={() => {
          if (setModalType && modalType) {
            setModalType(modalType);
          }
        }}
      >
        {btnText}
      </button>
    </div>
  );
};

export default UserActionBtn;