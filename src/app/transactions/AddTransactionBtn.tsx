"use client";

import { useState } from "react";
import AddTransactionForm from "./AddTransactionForm";

const AddTransactionBtn = () => {
  const [modalType, setModalType] = useState<string>("");

  return (
    <div>
      {/* Buttons for all the actions */}
      {modalType.length < 1 && (
        <>
          <button
            className="bg-pink-600 p-3 rounded-md"
            onClick={() => setModalType("add-transaction")}
          >
            Add Transaction
          </button>
        </>
      )}

      {/* For Update Account */}
      {modalType === "add-transaction" && (
        <AddTransactionForm setModalType={setModalType} />
      )}
    </div>
  );
};

export default AddTransactionBtn;
