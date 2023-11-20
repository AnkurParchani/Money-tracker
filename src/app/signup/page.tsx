import AuthContainer, {
  AuthHeading,
  AuthSubHeading,
} from "@/components/AuthTemplate";
import Form from "./Form";
import Link from "next/link";

const page = () => {
  return (
    <>
      <AuthContainer>
        <AuthHeading>Sign up</AuthHeading>
        <AuthSubHeading>Track your money and spend wisely</AuthSubHeading>
        <Form />
      </AuthContainer>

      <p className="text-center mt-5 text-sm  text-gray-800">
        Already registered?{" "}
        <Link
          href="/login"
          className="font-semibold text-blue-700 hover:underline"
        >
          Login
        </Link>
      </p>
    </>
  );
};

export default page;
