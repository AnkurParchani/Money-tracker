import { Dispatch, SetStateAction } from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import { updateTransaction } from "../actions/transactionActions";
import ModalContainer, { ModalHeading } from "@/components/ModalTemplate";
import notifyBasedOnData from "../../../utils/notifyBasedOnData";
import DateSelector from "@/components/DateSelector";

const UpdateTransactionForm = ({
  setModalType,
  transaction,
}: {
  setModalType: Dispatch<SetStateAction<string>>;
  transaction: Transaction;
}) => {
  const {
    amount,
    _id: TransactionId,
    date,
    particulars,
    type,
    img,
  } = transaction;

  async function handleSubmit(e: FormData) {
    const data = await updateTransaction(e, TransactionId);

    notifyBasedOnData(data, "Profile Updated");
    if (data.status === "success") {
      setModalType("");
    }
  }

  return (
    <ModalContainer action={handleSubmit} setModalType={setModalType}>
      {/* Add an image */}

      <ModalHeading underlineColor="border-blue-400">
        Update Profile:-
      </ModalHeading>

      <Input
        type="text"
        id="description"
        name="description"
        defaultValue={particulars}
        defalutNoLabelInput
        placeholder="Enter Description"
      />

      <Input
        defalutNoLabelInput
        type="text"
        defaultValue={amount}
        id="amount"
        name="amount"
        placeholder="Enter Amount"
      />

      <DateSelector defaultDate={date as string} />

      <Select
        options={["withdraw", "deposit"]}
        name="transactionType"
        defaultValue={type}
        label="Type: "
        selectClassname="capitalize text-black flex-grow ouline-none focus:outline-none"
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

export default UpdateTransactionForm;
