"use client";
import { Dispatch, SetStateAction, useState } from "react";

import Button from "../../components/Button";
import Input from "../../components/Input";
import notifyBasedOnData from "../../../utils/notifyBasedOnData";
import AddUserImgFn from "./AddUserImgFn";

import { updateMe } from "../actions/userActions";
import ModalContainer, { ModalHeading } from "@/components/ModalTemplate";

const UpdateProfileForm = ({
  setModalType,
  user,
}: {
  setModalType: Dispatch<SetStateAction<string>>;
  user: Partial<User>;
}) => {
  const [userImg, setUserImg] = useState<string | undefined>(user.img);

  async function handleSubmit(event: FormData) {
    const data = await updateMe(event, userImg);

    notifyBasedOnData(data, "Profile Updated");
    if (data.status === "success") {
      setModalType("");
    }
  }

  return (
    <ModalContainer action={handleSubmit} setModalType={setModalType}>
      {/* Add an image */}
      <AddUserImgFn userImg={userImg} setUserImg={setUserImg} />

      <ModalHeading underlineColor="border-green-400">
        Update Profile:-
      </ModalHeading>

      <Input
        type="text"
        id="name"
        name="name"
        defaultValue={user.name}
        defalutNoLabelInput
        placeholder="Name"
      />

      <Input
        defalutNoLabelInput
        type="email"
        defaultValue={user.email}
        id="email"
        name="email"
        placeholder="Email"
      />

      <div className="flex gap-2 justify-end mt-3">
        <Button
          cancelBtnBorderColor="border-green-500"
          modalCancelBtn
          onClick={() => setModalType("")}
        >
          Cancel
        </Button>
        <Button
          submitBtnBgColor="border-green-500 bg-green-500"
          submit
          modalActionBtn
        >
          Update
        </Button>
      </div>
    </ModalContainer>
  );
};

export default UpdateProfileForm;
