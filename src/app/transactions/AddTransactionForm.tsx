"use client";
import { Dispatch, SetStateAction, useState } from "react";

import ShowBalance from "./ShowBalance";
import AddTransactionImg from "./AddTransactionImg";
import DateSelector from "@/components/DateSelector";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";
import notifyBasedOnData from "../../../utils/notifyBasedOnData";

import { addTransaction } from "../actions/transactionActions";
import ModalContainer, { ModalHeading } from "@/components/ModalTemplate";

const AddTransactionForm = ({
  setModalType,
  currentBalance,
}: {
  setModalType: Dispatch<SetStateAction<string>>;
  currentBalance: number;
}) => {
  const [transactionImg, setTransactionImg] = useState<string | undefined>(
    undefined
  );

  async function handleSubmit(e: FormData) {
    const data = await addTransaction(e, transactionImg);
    notifyBasedOnData(data, "Transaction added");

    if (data.status === "success") {
      setModalType("");
    }
  }

  return (
    <ModalContainer action={handleSubmit} setModalType={setModalType}>
      {/* Add an image */}

      <ModalHeading underlineColor="border-blue-400">
        Add a Transaction
      </ModalHeading>

      {!(currentBalance === 0) && (
        <div className="absolute right-4">
          <ShowBalance currentBalance={currentBalance} />
        </div>
      )}

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

      {transactionImg && (
        <div className="relative">
          <AddTransactionImg
            transactionImg={transactionImg}
            iconStyle={{
              backgroundColor: "#0a66c2",
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
        defalutNoLabelInput
        placeholder="Description"
      />

      <Input
        defalutNoLabelInput
        type="number"
        id="amount"
        name="amount"
        placeholder="Amount"
      />

      <DateSelector />

      <Select
        label="Type:"
        options={["withdraw", "deposit"]}
        name="transactionType"
        selectClassname="capitalize text-black focus:outline-none outline-none flex-grow"
      />

      <div className="flex gap-2 justify-end mt-3">
        <Button
          cancelBtnBorderColor="border-blue-500"
          modalCancelBtn
          onClick={() => setModalType("")}
        >
          Cancel
        </Button>
        <Button
          submit
          submitBtnBgColor="border-blue-500 bg-blue-500"
          modalActionBtn
        >
          Add
        </Button>
      </div>
    </ModalContainer>
  );
};

export default AddTransactionForm;
