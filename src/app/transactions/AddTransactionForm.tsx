import { Dispatch, SetStateAction } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";

import { addTransaction } from "../actions/transactionActions";

const AddTransactionForm = ({
  setModalType,
}: {
  setModalType: Dispatch<SetStateAction<string>>;
}) => {
  async function handleSubmit(e: FormData) {
    const data = await addTransaction(e);
    console.log(data);
  }

  return (
    <form
      autoComplete="off"
      action={handleSubmit}
      className="flex flex-col gap-3 max-w-md mx-auto"
    >
      {/* Add an image */}

      <Input
        type="text"
        id="description"
        name="description"
        label="Enter Description"
        inputClassname="text-black"
      />

      <Input
        type="number"
        id="amount"
        name="amount"
        label="Enter Amount"
        inputClassname="text-black"
      />

      <Select
        options={["withdraw", "deposit"]}
        name="transactionType"
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

export default AddTransactionForm;
