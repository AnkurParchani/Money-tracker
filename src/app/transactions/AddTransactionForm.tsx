import { Dispatch, SetStateAction } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";

import { addTransaction } from "../actions/transactionActions";
import ModalContainer, { ModalHeading } from "@/components/ModalTemplate";
import notifyBasedOnData from "../../../utils/notifyBasedOnData";
import ShowBalance from "./ShowBalance";
import DateSelector from "@/components/DateSelector";
import formatDate from "../../../utils/formatDate";

const AddTransactionForm = ({
  setModalType,
  currentBalance,
}: {
  setModalType: Dispatch<SetStateAction<string>>;
  currentBalance: number;
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

      <ModalHeading underlineColor="border-blue-400">
        Add a Transaction
      </ModalHeading>

      {!(currentBalance === 0) && (
        <div className="absolute right-4">
          <ShowBalance currentBalance={currentBalance} />
        </div>
      )}

      <Input
        type="text"
        id="description"
        name="description"
        defalutNoLabelInput
        placeholder="Description"
      />

      <Input
        defalutNoLabelInput
        type="number"
        id="amount"
        name="amount"
        placeholder="Amount"
      />

      <DateSelector />

      <Select
        label="Type:"
        options={["withdraw", "deposit"]}
        name="transactionType"
        selectClassname="capitalize text-black focus:outline-none outline-none flex-grow"
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
          submit
          submitBtnBgColor="border-blue-500 bg-blue-500"
          modalActionBtn
        >
          Add
        </Button>
      </div>
    </ModalContainer>
  );
};

export default AddTransactionForm;
