"use client";

import AuthContainer, {
  AuthHeading,
  AuthSubHeading,
} from "@/components/AuthTemplate";
import Form from "./Form";
import Link from "next/link";
import { useAppColor } from "@/contexts/AppColorContext";

const Page = () => {
  const { appColor } = useAppColor(); // Get theme color

  return (
    <>
      <AuthContainer>
        <AuthHeading>Sign up</AuthHeading>
        <AuthSubHeading>Track your money and spend wisely</AuthSubHeading>
        <Form />
      </AuthContainer>

      <p className="text-center mt-3 mb-5 text-sm text-gray-800">
        Already registered?{" "}
        <Link
          href="/login"
          style={{ color: appColor }} // Apply dynamic theme color
          className="font-semibold hover:underline"
        >
          Login
        </Link>
      </p>
    </>
  );
};

export default Page;