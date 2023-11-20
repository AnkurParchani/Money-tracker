import { Dispatch, SetStateAction } from "react";

import Button from "../../components/Button";
import Input from "../../components/Input";

import { deleteMe } from "../actions/userActions";

const DeleteAccountForm = ({
  setModalType,
}: {
  setModalType: Dispatch<SetStateAction<string>>;
}) => {
  async function handleSubmit(event: FormData) {
    const data = await deleteMe(event);
    console.log(data);
  }

  return (
    <form
      autoComplete="off"
      action={handleSubmit}
      className="flex flex-col gap-3 max-w-md mx-auto"
    >
      <Input
        type="password"
        id="password"
        name="password"
        label="Enter password"
        inputClassname="text-black"
      />

      <Button className="bg-gray-600 text-center">Delete</Button>
      <Button className="bg-green-500" onClick={() => setModalType("")}>
        Cancel
      </Button>
    </form>
  );
};

export default DeleteAccountForm;
