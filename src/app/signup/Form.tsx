"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Image from "next/image";
import Input from "../../components/Input";
import Button from "../../components/Button";
import notifyBasedOnData from "../../../utils/notifyBasedOnData";

import { signup } from "../actions/authActions";
import AddUserImg from "@/components/AddUserImg";

const Form = () => {
  const router = useRouter();
  const [userImg, setUserImg] = useState<undefined | string>(undefined);

  // Submitting the form for signup
  async function handleSubmit(event: FormData) {
    try {
      const data = await signup(event, userImg);

      notifyBasedOnData(data, "Successfully registered");

      console.log("data from signup function", data);
      if (data.status === "success") {
        // return router.push("/");
        console.log("success block");
      }
    } catch (err) {
      console.log("Error from signup function", err);
    }
  }

  return (
    <form
      autoComplete="off"
      action={handleSubmit}
      className="flex flex-col gap-3 mt-5"
    >
      <div className="mb-5 w-fit mx-auto cursor-pointer">
        {!userImg && (
          <AddUserImg
            setUserImg={setUserImg}
            iconStyle={{
              color: "#fff",
              fontSize: "70px",
              backgroundColor: "#94a3b8",
              borderRadius: "9999px",
              padding: "12px",
            }}
          />
        )}

        {userImg && (
          <div className="relative">
            <Image
              className="rounded-full"
              alt="user-image"
              src={userImg}
              height={100}
              width={100}
            />

            <AddUserImg
              setUserImg={setUserImg}
              iconStyle={{
                color: "white",
                backgroundColor: "#0a66c2",
                borderRadius: "9999px",
                fontSize: "35px",
                padding: "7px",
                position: "absolute",
                right: "0",
                bottom: "-10px",
              }}
            />
          </div>
        )}
      </div>

      <Input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        defalutNoLabelInput
      />

      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        defalutNoLabelInput
      />

      <Input
        type="password"
        placeholder="Password"
        id="password"
        name="password"
        defalutNoLabelInput
      />

      <Input
        type="password"
        id="passwordConfirm"
        name="passwordConfirm"
        placeholder="Confirm Password"
        defalutNoLabelInput
      />

      <Button submit authButton>
        Signup
      </Button>
    </form>
  );
};

export default Form;
