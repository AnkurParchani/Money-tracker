"use client";

import toast from "react-hot-toast";
import { uploadUserImg } from "@/app/actions/imgActions";

import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

type AddUserImgType = {
  iconStyle: object;
  setUserImg: Dispatch<SetStateAction<string | undefined>>;
};

const AddUserImg = ({ iconStyle, setUserImg }: AddUserImgType) => {
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

    const imgPath = await uploadUserImg(formData);

    if (typeof imgPath === "string") setUserImg(imgPath);
    else toast.error("Something went wrong while uploading the image");
  }

  return (
    <>
      <AddAPhotoIcon style={iconStyle} onClick={handleImgClick} />
      <input
        onChange={handleFileInputChange}
        type="file"
        name="img"
        className="hidden"
        ref={imgRef}
      />
    </>
  );
};

export default AddUserImg;
