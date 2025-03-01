"use client";

import Link from "next/link";
import { useAppColor } from "@/contexts/AppColorContext";
import AuthContainer, {
  AuthHeading,
  AuthSubHeading,
} from "../../components/AuthTemplate";
import Form from "./Form";

const Page = () => {
  const { appColor } = useAppColor(); // Get theme color

  return (
    <>
      <AuthContainer>
        <AuthHeading>Sign in</AuthHeading>
        <AuthSubHeading>Welcome back!</AuthSubHeading>
        <Form />
      </AuthContainer>
      <p className="text-center mt-5 text-sm text-gray-800">
        New to app?{" "}
        <Link
          href="/signup"
          style={{ color: appColor }} // Apply theme color
          className="font-semibold hover:underline"
        >
          Join now
        </Link>
      </p>
    </>
  );
};

export default Page;