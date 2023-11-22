"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";

import { uploadTransactionImg } from "../actions/imgActions";

type AddTransactionImgType = {
  iconStyle: object;
  setTransactionImg: Dispatch<SetStateAction<string | undefined>>;
  containerClass?: string;
  transactionImg?: string | undefined;
};

const AddTransactionImg = ({
  iconStyle,
  setTransactionImg,
  containerClass,
  transactionImg,
}: AddTransactionImgType) => {
  const imgRef = useRef<HTMLInputElement | null>(null);

  function handleImgClick() {
    if (imgRef.current) {
      imgRef.current.click();
    }
  }

  // Functions related to img uploading
  async function handleFileInputChange(e: ChangeEvent<HTMLInputElement>) {
    const formData = new FormData();

    if (e.target.files) {
      formData.append("img", e.target.files[0]);
    }

    const imgPath = await uploadTransactionImg(formData);

    if (typeof imgPath === "string") setTransactionImg(imgPath);
    else toast.error("Something went wrong while uploading the image");
  }

  return (
    <>
      <div className={containerClass} onClick={handleImgClick}>
        <AddPhotoAlternateIcon style={iconStyle} />
        <input
          onChange={handleFileInputChange}
          type="file"
          name="img"
          className="hidden"
          ref={imgRef}
        />
      </div>

      {transactionImg && (
        <Image
          src={transactionImg}
          alt="transaction-img"
          height={1000}
          width={1000}
          className="rounded-md w-2/5 h-auto mx-auto text-center"
        />
      )}
    </>
  );
};

export default AddTransactionImg;
