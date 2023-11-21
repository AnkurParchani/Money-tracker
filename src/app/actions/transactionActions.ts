"use server";

import { revalidateTag } from "next/cache";
import handleClientSideError from "../../../utils/errors/handleClientSideError";
import { getToken } from "../../../utils/getToken";
import formatDate from "../../../utils/formatDate";

// Adding a new Transaction
export const addTransaction = async (e: FormData) => {
  try {
    // Getting all the details
    const particulars = e.get("description");
    const amount = e.get("amount");
    const type = e.get("transactionType");
    const [day, month, year] = (e.get("date") as string).split("/");

    const formattedDate = formatDate(`${month}/${day}/${year}`);

    if (!particulars || !amount || !type || !formattedDate)
      throw new Error("please provide all the details");

    // Getting the token
    const token = getToken();

    // Doing the request
    const res = await fetch(`${process.env.SERVER_URL}/api/transactions`, {
      method: "POST",
      body: JSON.stringify({
        particulars,
        amount,
        type,
        date: `${formattedDate.day}-${formattedDate.month}-${formattedDate.year}`,
      }),
      headers: {
        "Content-Type": "application/json",
        Cookie: `token=${token}`,
      },
    });

    if (!res.ok)
      throw new Error("Something went wrong, please try again later");

    const data = await res.json();

    // If any error found (operational)
    if (data.isOperational || data.status === "fail")
      throw new Error(data.message);

    revalidateTag("transactions");

    return data;
  } catch (err) {
    return handleClientSideError(err);
  }
};

// Updating a transaction
export const updateTransaction = async (e: FormData, transactionId: string) => {
  try {
    // Getting all the details
    const particulars = e.get("description");
    const amount = e.get("amount");
    const type = e.get("transactionType");
    const [day, month, year] = (e.get("date") as string).split("/");

    const formattedDate = formatDate(`${month}/${day}/${year}`);

    // Getting the token
    const token = getToken();

    // Doing the request
    const res = await fetch(`${process.env.SERVER_URL}/api/transactions`, {
      method: "PATCH",
      body: JSON.stringify({
        transactionId,
        particulars,
        amount,
        type,
        date: `${formattedDate.day}-${formattedDate.month}-${formattedDate.year}`,
      }),
      headers: {
        Cookie: `token=${token}`,
      },
    });

    if (!res.ok)
      throw new Error("Something went wrong, please try again later");

    const data = await res.json();

    // If any error found (operational)
    if (data.isOperational || data.status === "fail")
      throw new Error(data.message);

    revalidateTag("transactions");

    return data;
  } catch (err) {
    return handleClientSideError(err);
  }
};

// Deleting a Transaction
export const deleteTransaction = async (transactionId: string) => {
  try {
    // Getting the token
    const token = getToken();

    // Doing the request
    const res = await fetch(`${process.env.SERVER_URL}/api/transactions`, {
      method: "DELETE",
      body: JSON.stringify({ transactionId }),
      headers: {
        Cookie: `token=${token}`,
      },
    });

    if (!res.ok)
      throw new Error("Something went wrong, please try again later");

    const data = await res.json();

    // If any error found (operational)
    if (data.isOperational || data.status === "fail")
      throw new Error(data.message);

    revalidateTag("transactions");

    return data;
  } catch (err) {
    return handleClientSideError(err);
  }
};
