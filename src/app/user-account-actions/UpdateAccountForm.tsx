import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { updateMe } from "../actions/userActions";

const UpdateAccountForm = ({
  setModalType,
  user,
}: {
  setModalType: Dispatch<SetStateAction<string>>;
  user: Partial<User>;
}) => {
  async function handleSubmit(event: FormData) {
    const data = await updateMe(event);
    console.log(data);
  }

  return (
    <form
      autoComplete="off"
      action={handleSubmit}
      className="flex flex-col gap-3 max-w-md mx-auto"
    >
      <Image src="/.jpeg" alt="for later" height={100} width={100} />

      <Input
        type="name"
        id="name"
        name="name"
        label="Enter Name"
        defaultValue={user.name}
        inputClassname="text-black"
      />

      <Input
        type="email"
        id="email"
        name="email"
        label="Enter Email"
        defaultValue={user.email}
        inputClassname="text-black"
      />

      <Button className="bg-gray-600 text-center">Update</Button>

      <Button className="bg-green-500" onClick={() => setModalType("")}>
        Cancel
      </Button>
    </form>
  );
};

export default UpdateAccountForm;
