import { Dispatch, SetStateAction } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";

import { addTransaction } from "../actions/transactionActions";
import ModalContainer, { ModalHeading } from "@/components/ModalTemplate";
import notifyBasedOnData from "../../../utils/notifyBasedOnData";

const AddTransactionForm = ({
  setModalType,
}: {
  setModalType: Dispatch<SetStateAction<string>>;
}) => {
  async function handleSubmit(e: FormData) {
    const data = await addTransaction(e);
    notifyBasedOnData(data, "Transaction added");

    if (data.status === "success") {
      setModalType("");
    }
  }

  return (
    <ModalContainer action={handleSubmit} setModalType={setModalType}>
      {/* Add an image */}

      <ModalHeading>Add a Transaction</ModalHeading>

      <Input
        type="text"
        id="description"
        name="description"
        defalutNoLabelInput
        placeholder="Description"
        inputClassname="text-black"
      />

      <Input
        defalutNoLabelInput
        type="number"
        id="amount"
        name="amount"
        placeholder="Amount"
        inputClassname="text-black"
      />

      <Select
        label="Type:"
        options={["withdraw", "deposit"]}
        name="transactionType"
        selectClassname="capitalize text-black outline-none flex-grow"
      />

      <div className="flex gap-2 justify-end mt-3">
        <Button modalCancelBtn onClick={() => setModalType("")}>
          Cancel
        </Button>
        <Button modalActionBtn>Add</Button>
      </div>
    </ModalContainer>
  );
};

export default AddTransactionForm;
