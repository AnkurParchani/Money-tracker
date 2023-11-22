"use client";

import { Dispatch, SetStateAction, useState } from "react";
import AddUserImg from "@/components/AddUserImg";
import Image from "next/image";

const AddUserImgFn = ({
  userImg,
  setUserImg,
}: {
  userImg: string | undefined;
  setUserImg: Dispatch<SetStateAction<string | undefined>>;
}) => {
  return (
    <>
      <div className="mb-5 w-fit mx-auto cursor-pointer">
        {!userImg && (
          <AddUserImg
            setUserImg={setUserImg}
            iconStyle={{
              color: "#fff",
              fontSize: "70px",
              backgroundColor: "#94a3b8",
              borderRadius: "9999px",
              padding: "12px",
            }}
          />
        )}

        {userImg && (
          <div className="relative">
            <Image
              className="rounded-full h-28 w-auto"
              alt="user-image"
              src={userImg}
              height={500}
              width={500}
            />

            <AddUserImg
              setUserImg={setUserImg}
              iconStyle={{
                color: "white",
                backgroundColor: "#0a66c2",
                borderRadius: "9999px",
                fontSize: "35px",
                padding: "7px",
                position: "absolute",
                right: "0",
                bottom: "-10px",
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default AddUserImgFn;
