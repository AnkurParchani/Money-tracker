"use client";

import { useState } from "react";
import DeleteAccountForm from "./DeleteAccountForm";
import UpdateAccountForm from "./UpdateAccountForm";

const UserActionButtons = ({ user }: { user: Partial<User> }) => {
  const [modalType, setModalType] = useState<string>("");

  return (
    <div>
      {modalType.length < 1 && (
        <>
          <button
            className="bg-blue-600 p-3 rounded-md"
            onClick={() => setModalType("update-account")}
          >
            Update
          </button>

          <button
            className="bg-red-600 p-3 rounded-md"
            onClick={() => setModalType("delete-account")}
          >
            Delete
          </button>
        </>
      )}

      {modalType === "update-account" && (
        <UpdateAccountForm user={user} setModalType={setModalType} />
      )}

      {modalType === "delete-account" && (
        <DeleteAccountForm setModalType={setModalType} />
      )}
    </div>
  );
};

export default UserActionButtons;
