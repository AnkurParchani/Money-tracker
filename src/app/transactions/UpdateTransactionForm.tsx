"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { useAppColor } from "@/contexts/AppColorContext";

import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import { updateTransaction } from "../actions/transactionActions";
import ModalContainer, { ModalHeading } from "@/components/ModalTemplate";
import notifyBasedOnData from "../../../utils/notifyBasedOnData";
import DateSelector from "@/components/DateSelector";
import AddTransactionImg from "./AddTransactionImg";

const UpdateTransactionForm = ({
  setModalType,
  transaction,
}: {
  setModalType: Dispatch<SetStateAction<string>>;
  transaction: Transaction;
}) => {
  const { appColor } = useAppColor(); // Get theme color dynamically
  const {
    amount,
    _id: TransactionId,
    date,
    particulars,
    type,
    img,
  } = transaction;
  const [transactionImg, setTransactionImg] = useState<string | undefined>(img);

  async function handleSubmit(e: FormData) {
    const data = await updateTransaction(e, TransactionId, transactionImg);

    notifyBasedOnData(data, "Transaction Updated");
    if (data.status === "success") {
      setModalType("");
    }
  }

  return (
    <ModalContainer action={handleSubmit} setModalType={setModalType}>
      <ModalHeading underlineColor={`border-${appColor}-400`}>
        Update Transaction:-
      </ModalHeading>

      {/* If there is no transaction img then show option to choose */}
      {!transactionImg && (
        <AddTransactionImg
          containerClass="bg-gray-300 py-6 flex justify-center cursor-pointer"
          setTransactionImg={setTransactionImg}
          iconStyle={{
            fontSize: "50px",
            color: "#5f5e5e",
          }}
        />
      )}

      {/* If there is transaction img then show img and update option */}
      {transactionImg && (
        <div className="relative">
          <AddTransactionImg
            transactionImg={transactionImg}
            iconStyle={{
              backgroundColor: `#0a66c2`,
              borderRadius: "9999px",
              fontSize: "35px",
              padding: "7px",
              position: "absolute",
              right: "0",
              color: "white",
              top: "0",
            }}
            setTransactionImg={setTransactionImg}
          />
        </div>
      )}

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
        selectClassname="capitalize text-black flex-grow outline-none focus:outline-none"
      />

      <div className="flex gap-2 justify-end mt-3">
        <Button
          cancelBtnBorderColor={`border-${appColor}-500`}
          modalCancelBtn
          onClick={() => setModalType("")}
        >
          Cancel
        </Button>
        <Button
          submitBtnBgColor={`border-${appColor}-500 bg-${appColor}-500`}
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