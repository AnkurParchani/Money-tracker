import { Dispatch, SetStateAction } from "react";
import Button from "../../components/Button";
import { deleteTransaction } from "../actions/transactionActions";
import ModalContainer, { ModalHeading } from "@/components/ModalTemplate";
import notifyBasedOnData from "../../../utils/notifyBasedOnData";

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
    // <form
    //   autoComplete="off"
    //   action={handleDelete}
    //   className="flex flex-col gap-3 max-w-md mx-auto"
    // >
    //   {/* Change it with the transaction card later */}
    //   <div className="bg-yellow-700 px-4">
    //     <h1>{particulars}</h1>
    //     <h1>{amount}</h1>
    //     <h1>{type}</h1>
    //   </div>

    //   <Button className="bg-gray-600 text-center">Delete</Button>
    //   <Button className="bg-green-500" onClick={() => setModalType("")}>
    //     Cancel
    //   </Button>
    // </form>
    <ModalContainer action={handleDelete} setModalType={setModalType}>
      <ModalHeading underlineColor="border-red-400">
        Delete this Transaction?
      </ModalHeading>

      <h1>Make the entry here</h1>

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
