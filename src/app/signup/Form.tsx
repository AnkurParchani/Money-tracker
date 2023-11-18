"use client";

import { signup } from "../actions/auth";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import notifyBasedOnData from "../../../utils/notifyBasedOnData";

const Form = () => {
  async function handleSubmit(event: FormData) {
    const data = await signup(event);

    return notifyBasedOnData(data, "Successfully registered");
  }

  return (
    <>
      <form
        autoComplete="off"
        action={handleSubmit}
        className="flex flex-col gap-3 max-w-md mx-auto"
      >
        <Input
          type="text"
          id="name"
          name="name"
          label="Enter name"
          inputClassname="text-black"
        />

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

        <Input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          label="Enter password"
          inputClassname="text-black"
        />

        <Button className="bg-gray-600 text-center">Signup</Button>
      </form>
    </>
  );
};

export default Form;