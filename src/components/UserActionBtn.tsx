import React, { Dispatch, SetStateAction } from "react";

type UserActionBtnType = {
  borderColor: string;
  btnColor: string;
  btnText: string;
  setModalType: Dispatch<SetStateAction<string>>;
  modalType: string;
  icon: React.ReactNode;
};

const UserActionBtn = ({
  borderColor,
  btnColor,
  btnText,
  setModalType,
  modalType,
  icon,
}: UserActionBtnType) => {
  return (
    <div
      className={`bg-gray-100 grid grid-cols-[auto_1fr] shadow-md border-2 ${borderColor} p-3 rounded-md`}
    >
      {icon}
      <button className={btnColor} onClick={() => setModalType(modalType)}>
        {btnText}
      </button>
    </div>
  );
};

export default UserActionBtn;
