"use client";

import { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import AddTransactionForm from "./AddTransactionForm";

const AddTransactionBtn = ({ currentBalance }: { currentBalance: number }) => {
  const [modalType, setModalType] = useState<string>("");

  return (
    <div>
      {modalType.length < 1 && (
        <button
          className="bg-[#1df044] hover:bg-[#44f441] z-30 duration-100 rounded-full p-2.5 fixed right-3 bottom-7 text-white"
          onClick={() => setModalType("add-transaction")}
        >
          <AddRoundedIcon style={{ fontSize: "25px" }} />
        </button>
      )}

      {/* For adding transaction */}
      {modalType === "add-transaction" && (
        <AddTransactionForm
          currentBalance={currentBalance}
          setModalType={setModalType}
        />
      )}
    </div>
  );
};

export default AddTransactionBtn;
