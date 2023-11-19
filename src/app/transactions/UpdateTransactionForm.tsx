import { Dispatch, SetStateAction } from "react";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "../../../components/Button";

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

  async function handleSubmit() {}

  return (
    <form
      autoComplete="off"
      action={handleSubmit}
      className="flex flex-col gap-3 max-w-md mx-auto"
    >
      {/* Add an image (if it has) */}

      <Input
        type="text"
        id="description"
        name="description"
        defaultValue={particulars}
        label="Enter Description"
        inputClassname="text-black"
      />

      <Input
        type="number"
        id="amount"
        defaultValue={amount}
        name="amount"
        label="Enter Amount"
        inputClassname="text-black"
      />

      <Select
        options={["withdraw", "deposit"]}
        name="transactionType"
        defaultValue={type}
        label="Enter the type of transaction"
        selectClassname="capitalize text-black"
      />

      <Button className="bg-gray-600 text-center">Add</Button>
      <Button
        className="bg-green-600 text-center"
        onClick={() => setModalType("")}
      >
        Cancel
      </Button>
    </form>
  );
};

export default UpdateTransactionForm;
