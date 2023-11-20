"use client";

import { useState } from "react";
import DeleteAccountForm from "./DeleteAccountForm";
import UpdateProfileForm from "./UpdateProfileForm";
import UpdatePasswordForm from "./UpdatePasswordForm";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import UserActionBtn from "@/components/UserActionBtn";

const UserActionButtons = ({ user }: { user: Partial<User> }) => {
  const [modalType, setModalType] = useState<string>("");

  return (
    <div>
      {/* Buttons for all the actions */}
      {modalType.length < 1 && (
        <div className="grid grid-cols-1 gap-2 items-center text-sm">
          <UserActionBtn
            borderColor="border-green-400"
            btnColor="text-green-600"
            btnText="Update Profile"
            modalType="update-account"
            setModalType={setModalType}
            icon={
              <AccountCircleOutlinedIcon
                style={{ color: "#16a34a", fontSize: "25px" }}
              />
            }
          />

          <UserActionBtn
            borderColor="border-blue-400"
            btnColor="text-blue-600"
            btnText="Change Password"
            modalType="update-password"
            setModalType={setModalType}
            icon={
              <KeyOutlinedIcon style={{ color: "#2563eb", fontSize: "25px" }} />
            }
          />

          <UserActionBtn
            borderColor="border-red-400"
            btnColor="text-red-600"
            btnText="Delete Account"
            modalType="delete-account"
            setModalType={setModalType}
            icon={
              <DeleteOutlineOutlinedIcon
                style={{ color: "#dc2626", fontSize: "25px" }}
              />
            }
          />
        </div>
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
