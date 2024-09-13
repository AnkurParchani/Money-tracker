"use client";

import { useState } from "react";
import DeleteTransactionForm from "./DeleteTransactionForm";
import UpdateTransactionForm from "./UpdateTransactionForm";

const TransactionCardButtons = ({
  transaction,
}: {
  transaction: Transaction;
}) => {
  const [modalType, setModalType] = useState<string>("");

  return (
    <div>
      {/* Buttons for all the actions */}
      {modalType.length < 1 && (
        <>
          <button
            className="bg-green-800 py-1 px-3 rounded-md"
            onClick={() => setModalType("update-transaction")}
          >
            Update Transaction
          </button>

          <button
            className="bg-red-800 py-1 px-3 rounded-md"
            onClick={() => setModalType("delete-transaction")}
          >
            Delete Transaction
          </button>
        </>
      )}

      {/* For Update Account */}
      {modalType === "update-transaction" && (
        <UpdateTransactionForm
          transaction={transaction}
          setModalType={setModalType}
        />
      )}

      {/* For Updating Password */}
      {modalType === "delete-transaction" && (
        <DeleteTransactionForm
          transaction={transaction}
          setModalType={setModalType}
        />
      )}
    </div>
  );
};

export default TransactionCardButtons;
