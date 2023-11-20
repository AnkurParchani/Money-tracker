"use client";

import { useRouter } from "next/navigation";

import Button from "../../components/Button";
import Input from "../../components/Input";
import notifyBasedOnData from "../../../utils/notifyBasedOnData";

import { login } from "../actions/authActions";
import { useState } from "react";

const Form = () => {
  const router = useRouter();

  async function handleSubmit(event: FormData) {
    const data = await login(event);

    notifyBasedOnData(data, "Logged in successfully");
    if (data.status === "success") {
      router.push("/");
    }
  }

  return (
    <form
      autoComplete="off"
      action={handleSubmit}
      className="flex flex-col gap-3 mt-5"
    >
      <Input
        type="email"
        placeholder="Email"
        id="email"
        name="email"
        authInput
      />
      <Input
        type="password"
        id="password"
        placeholder="Password"
        name="password"
        authInput
      />

      <Button authButton>Login</Button>
    </form>
  );
};

export default Form;
