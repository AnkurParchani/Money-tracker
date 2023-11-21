import { Dispatch, SetStateAction } from "react";
import Button from "../../components/Button";
import { deleteTransaction } from "../actions/transactionActions";
import ModalContainer, { ModalHeading } from "@/components/ModalTemplate";
import notifyBasedOnData from "../../../utils/notifyBasedOnData";
import TransactionCard from "./TransactionCard";

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

    notifyBasedOnData(data, "Transaction deleted");

    if (data.status === "success") {
      setModalType("");
    }
  }

  return (
    <ModalContainer action={handleDelete} setModalType={setModalType}>
      <ModalHeading underlineColor="border-red-400">
        Delete this Transaction?
      </ModalHeading>

      <TransactionCard transaction={transaction} />

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

export default DeleteTransactionForm;
