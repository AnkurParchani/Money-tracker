import { Dispatch, SetStateAction } from "react";
import Button from "../../../components/Button";
import { deleteTransaction } from "../actions/transactionActions";

const DeleteTransactionForm = ({
  setModalType,
  transaction,
}: {
  setModalType: Dispatch<SetStateAction<string>>;
  transaction: Transaction;
}) => {
  const { particulars, amount, type, _id: transactionId } = transaction;

  async function handleDelete() {
    const data = await deleteTransaction(transactionId);
    console.log(data);
  }

  return (
    <form
      autoComplete="off"
      action={handleDelete}
      className="flex flex-col gap-3 max-w-md mx-auto"
    >
      {/* Change it with the transaction card later */}
      <div className="bg-yellow-700 px-4">
        <h1>{particulars}</h1>
        <h1>{amount}</h1>
        <h1>{type}</h1>
      </div>

      <Button className="bg-gray-600 text-center">Delete</Button>
      <Button className="bg-green-500" onClick={() => setModalType("")}>
        Cancel
      </Button>
    </form>
  );
};

export default DeleteTransactionForm;
