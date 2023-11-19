"use server";

import { revalidateTag } from "next/cache";
import handleClientSideError from "../../../utils/errors/handleClientSideError";
import { getToken } from "../../../utils/getToken";

// Adding a new Transaction
export const addTransaction = async (e: FormData) => {
  try {
    // Getting all the details
    const particulars = e.get("description");
    const amount = e.get("amount");
    const type = e.get("transactionType");

    if (!particulars || !amount || !type)
      throw new Error("please provide all the details");

    // Getting the token
    const token = getToken();

    // Doing the request
    const res = await fetch(`${process.env.SERVER_URL}/api/transactions`, {
      method: "POST",
      body: JSON.stringify({ particulars, amount, type }),
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

    // Getting the token
    const token = getToken();

    // Doing the request
    const res = await fetch(`${process.env.SERVER_URL}/api/transactions`, {
      method: "PATCH",
      body: JSON.stringify({ transactionId, particulars, amount, type }),
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
