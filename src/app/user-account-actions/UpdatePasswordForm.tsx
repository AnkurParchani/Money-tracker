import { Dispatch, SetStateAction } from "react";

import Input from "../../components/Input";
import Image from "next/image";
import Button from "../../components/Button";
import { updateMyPassword } from "../actions/userActions";
import ModalContainer, { ModalHeading } from "@/components/ModalTemplate";
import notifyBasedOnData from "../../../utils/notifyBasedOnData";

const UpdatePasswordForm = ({
  setModalType,
}: {
  setModalType: Dispatch<SetStateAction<string>>;
}) => {
  async function handleSubmit(event: FormData) {
    const data = await updateMyPassword(event);

    notifyBasedOnData(data, "Profile Updated");
    if (data.status === "success") {
      setModalType("");
    }
  }

  return (
    <ModalContainer action={handleSubmit} setModalType={setModalType}>
      <ModalHeading underlineColor="border-blue-400">
        Update your Password:-
      </ModalHeading>

      <Input
        type="password"
        id="oldPassword"
        name="oldPassword"
        defalutNoLabelInput
        placeholder="Old Password"
      />

      <Input
        type="password"
        id="newPassword"
        name="newPassword"
        defalutNoLabelInput
        placeholder="New Password"
      />

      <Input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        defalutNoLabelInput
        placeholder="Confirm  new Password"
      />

      <div className="flex gap-2 justify-end mt-3">
        <Button
          cancelBtnBorderColor="border-blue-500"
          modalCancelBtn
          onClick={() => setModalType("")}
        >
          Cancel
        </Button>
        <Button
          submitBtnBgColor="border-blue-500 bg-blue-500"
          submit
          modalActionBtn
        >
          Update
        </Button>
      </div>
    </ModalContainer>
  );
};

export default UpdatePasswordForm;
