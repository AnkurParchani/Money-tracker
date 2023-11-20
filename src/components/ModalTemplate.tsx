import React, { Dispatch, SetStateAction } from "react";

// The template
const ModalContainer = ({
  children,
  action,
  setModalType,
}: {
  children: React.ReactNode;
  setModalType: Dispatch<SetStateAction<string>>;
  action: (formData: FormData) => void;
}) => {
  return (
    <div className="relative">
      <div
        className="fixed z-40 inset-x-0 inset-y-0 w-full bg-black opacity-80"
        onClick={() => setModalType("")}
      />
      <form
        autoComplete="off"
        action={action}
        className="flex flex-col z-50 gap-3 max-w-md mx-auto bg-white px-3 py-6 rounded-md fixed bottom-0 inset-x-0 modalAnimation"
      >
        {children}
      </form>
    </div>
  );
};

// For modal heading
export const ModalHeading = ({
  children,
  underlineColor,
}: {
  children: React.ReactNode;
  underlineColor?: string;
}) => {
  return (
    <h1
      className={`mb-3 border-b-2 text-gray-700 font-medium ${underlineColor} w-fit`}
    >
      {children}
    </h1>
  );
};

export default ModalContainer;
