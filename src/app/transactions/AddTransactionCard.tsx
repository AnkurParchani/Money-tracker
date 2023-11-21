"use client";

import AddIcon from "@mui/icons-material/Add";
import AddTransactionForm from "./AddTransactionForm";
import { useState } from "react";

const AddTransactionCard = ({ currentBalance }: { currentBalance: number }) => {
  const [modalType, setModalType] = useState<string>("");
  return (
    <>
      <div
        onClick={() => setModalType("add-transaction")}
        className={`bg-white text-sm grid grid-cols-[1fr_auto_auto] items-center rounded-md px-2 py-1.5 border-l-8 border-r-8 shadow-xl border-gray-600`}
      >
        <h1 className="text-center text-gray-600">
          <AddIcon style={{ fontSize: "30px" }} />
        </h1>
      </div>

      {/* For adding transaction */}
      {modalType === "add-transaction" && (
        <AddTransactionForm
          currentBalance={currentBalance}
          setModalType={setModalType}
        />
      )}
    </>
  );
};

export default AddTransactionCard;
