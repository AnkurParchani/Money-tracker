"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import DeleteAccountForm from "./DeleteAccountForm";
import UpdateProfileForm from "./UpdateProfileForm";
import UpdatePasswordForm from "./UpdatePasswordForm";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ContrastIcon from '@mui/icons-material/Contrast';
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import UserActionBtn from "@/components/UserActionBtn";
import { signout } from "../actions/authActions";
import { useAppColor } from "@/contexts/AppColorContext";

const UserActionButtons = ({ user }: { user: Partial<User> }) => {
  const [modalType, setModalType] = useState<string>("");
  const router = useRouter();
  const { appColor } = useAppColor();

  // Function to signout
  function handleSignoutClick() {
    const data = signout();
    if (data) {
      router.push("/login");
      toast.success("Signed out successfully");
    } else {
      toast.success(`Sorry, something went wrong while logging out.`);
    }
  }

  return (
    <div>
      {/* Buttons for all the actions */}
      <div className="grid grid-cols-1 gap-2 items-center text-sm">
        <UserActionBtn
            borderColor="border-gray-400"
            btnColor="text-gray-600"
            btnText="Theme Selector"
            onClick={() => router.push("/theme-selector")}
            icon={
              <ContrastIcon style={{ color: "gray", fontSize: "25px" }} />
            }
         />


        <UserActionBtn
          borderColor="border-green-400"
          btnColor="text-green-600"
          btnText="Update Profile"
          modalType="update-account"
          setModalType={setModalType}
          icon={
            <AccountCircleOutlinedIcon
              style={{ color: "#16d223", fontSize: "25px" }}
            />
          }
        />

        <UserActionBtn
          borderColor="border-yellow-400"
          btnColor="text-yellow-600"
          btnText="Change Password"
          modalType="update-password"
          setModalType={setModalType}
          icon={
            <KeyOutlinedIcon style={{ color: "#dcd326", fontSize: "25px" }} />
          }
        />

        <UserActionBtn
          borderColor={`border-${appColor}-400`}
          btnColor={`text-${appColor}-600`}
          btnText="Sign-out"
          modalType="signout"
          onClick={handleSignoutClick}
          setModalType={setModalType}
          icon={<LogoutIcon style={{ color: appColor, fontSize: "25px" }} />}
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
