"use client";

import { useState } from "react";
import DeleteAccountForm from "./DeleteAccountForm";
import UpdateProfileForm from "./UpdateProfileForm";
import UpdatePasswordForm from "./UpdatePasswordForm";

const UserActionButtons = ({ user }: { user: Partial<User> }) => {
  const [modalType, setModalType] = useState<string>("");

  return (
    <div>
      {/* Buttons for all the actions */}
      {modalType.length < 1 && (
        <>
          <button
            className="bg-blue-600 p-3 rounded-md"
            onClick={() => setModalType("update-account")}
          >
            Update me
          </button>

          <button
            className="bg-orange-500 p-3 rounded-md"
            onClick={() => setModalType("update-password")}
          >
            Update Password
          </button>

          <button
            className="bg-red-600 p-3 rounded-md"
            onClick={() => setModalType("delete-account")}
          >
            Delete me
          </button>
        </>
      )}

      {/* For Update Account */}
      {modalType === "update-account" && (
        <UpdateProfileForm user={user} setModalType={setModalType} />
      )}

      {/* For Updating Password */}
      {modalType === "update-password" && (
        <UpdatePasswordForm setModalType={setModalType} />
      )}

      {/* For Deleting Account */}
      {modalType === "delete-account" && (
        <DeleteAccountForm setModalType={setModalType} />
      )}
    </div>
  );
};

export default UserActionButtons;
