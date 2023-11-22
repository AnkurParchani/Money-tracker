import { Dispatch, SetStateAction } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import notifyBasedOnData from "../../../utils/notifyBasedOnData";

import { updateMyPassword } from "../actions/userActions";
import ModalContainer, { ModalHeading } from "@/components/ModalTemplate";

const UpdatePasswordForm = ({
  setModalType,
}: {
  setModalType: Dispatch<SetStateAction<string>>;
}) => {
  async function handleSubmit(event: FormData) {
    const data = await updateMyPassword(event);

    notifyBasedOnData(data, "Password Updated");
    if (data.status === "success") {
      setModalType("");
    }
  }

  return (
    <ModalContainer action={handleSubmit} setModalType={setModalType}>
      <ModalHeading underlineColor="border-yellow-400">
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
          cancelBtnBorderColor="border-yellow-500"
          modalCancelBtn
          onClick={() => setModalType("")}
        >
          Cancel
        </Button>
        <Button
          submitBtnBgColor="border-yellow-400 bg-yellow-400"
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
