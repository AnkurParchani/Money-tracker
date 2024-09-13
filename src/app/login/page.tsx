import Link from "next/link";
import AuthContainer, {
  AuthHeading,
  AuthSubHeading,
} from "../../components/AuthTemplate";
import Form from "./Form";

const page = () => {
  return (
    <>
      <AuthContainer>
        <AuthHeading>Sign in</AuthHeading>
        <AuthSubHeading>Welcome back!</AuthSubHeading>
        <Form />
      </AuthContainer>
      <p className="text-center mt-5 text-sm  text-gray-800">
        New to app?{" "}
        <Link
          href="/signup"
          className="font-semibold text-green-700 hover:underline"
        >
          Join now
        </Link>
      </p>
    </>
  );
};

export default page;
