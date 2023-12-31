"use client";

import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";

import Button from "../../components/Button";
import Input from "../../components/Input";
import notifyBasedOnData from "../../../utils/notifyBasedOnData";

import { deleteMe } from "../actions/userActions";
import ModalContainer, { ModalHeading } from "@/components/ModalTemplate";

const DeleteAccountForm = ({
  setModalType,
}: {
  setModalType: Dispatch<SetStateAction<string>>;
}) => {
  const router = useRouter();

  async function handleSubmit(event: FormData) {
    const data = await deleteMe(event);

    notifyBasedOnData(data, "ACCOUNT DELETED");
    if (data.status === "success") {
      router.push("/login");
      setModalType("");
    }
  }

  return (
    <ModalContainer action={handleSubmit} setModalType={setModalType}>
      <ModalHeading underlineColor="border-red-400">
        Delete Account?
      </ModalHeading>

      <h1 className="text-sm">
        Think twice. This action can&apos;t be undone!
      </h1>

      <Input
        type="password"
        id="password"
        name="password"
        defalutNoLabelInput
        placeholder="Enter your Password"
      />

      <div className="flex gap-2 justify-end mt-3">
        <Button
          cancelBtnBorderColor="border-red-500"
          modalCancelBtn
          onClick={() => setModalType("")}
        >
          Cancel
        </Button>
        <Button
          submit
          modalActionBtn
          submitBtnBgColor="border-red-500 bg-red-500"
        >
          Delete
        </Button>
      </div>
    </ModalContainer>
  );
};

export default DeleteAccountForm;
