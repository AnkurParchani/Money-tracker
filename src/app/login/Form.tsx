"use client";

import { login } from "../actions/auth";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import notifyBasedOnData from "../../../utils/notifyBasedOnData";

const Form = () => {
  async function handleSubmit(event: FormData) {
    const data = await login(event);

    return notifyBasedOnData(data, "Logged in successfully");
  }

  return (
    <>
      <form
        autoComplete="off"
        action={handleSubmit}
        className="flex flex-col gap-3 max-w-md mx-auto"
      >
        <Input
          type="email"
          id="email"
          name="email"
          label="Enter email"
          inputClassname="text-black"
        />
        <Input
          type="password"
          id="password"
          name="password"
          label="Enter password"
          inputClassname="text-black"
        />

        <Button className="bg-gray-600 text-center">Signup</Button>
      </form>
    </>
  );
};

export default Form;
