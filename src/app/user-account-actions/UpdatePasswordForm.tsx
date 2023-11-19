import { Dispatch, SetStateAction } from "react";

import Input from "../../../components/Input";
import Image from "next/image";
import Button from "../../../components/Button";
import { updateMyPassword } from "../actions/userActions";

const UpdatePasswordForm = ({
  setModalType,
}: {
  setModalType: Dispatch<SetStateAction<string>>;
}) => {
  async function handleSubmit(event: FormData) {
    const data = await updateMyPassword(event);
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
        type="password"
        id="oldPassword"
        name="oldPassword"
        label="Enter old Password"
        inputClassname="text-black"
      />

      <Input
        type="password"
        id="newPassword"
        name="newPassword"
        label="Enter new Password"
        inputClassname="text-black"
      />

      <Input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm your Password"
        inputClassname="text-black"
      />

      <Button className="bg-gray-600 text-center">Update Password</Button>

      <Button className="bg-green-500" onClick={() => setModalType("")}>
        Cancel
      </Button>
    </form>
  );
};

export default UpdatePasswordForm;
