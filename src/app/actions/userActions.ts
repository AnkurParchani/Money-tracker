"use server";

import handleClientSideError from "../../../utils/errors/handleClientSideError";
import { getToken } from "../../../utils/getToken";

// Request for updating the account
export const updateMe = async (e: FormData) => {
  try {
    const name = e.get("name");
    const email = e.get("email");

    if (!name || !email) throw new Error("please provide all the details");

    // Getting the token
    const token = getToken();

    // Doing the request
    const res = await fetch(`${process.env.SERVER_URL}/api/update-me`, {
      method: "PATCH",
      body: JSON.stringify({ name, email }),
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

    return data;
  } catch (err) {
    return handleClientSideError(err);
  }
};

// Request for updating the password
export const updateMyPassword = async (e: FormData) => {
  try {
    const oldPassword = e.get("oldPassword");
    const newPassword = e.get("newPassword");
    const confirmPassword = e.get("confirmPassword");

    if (!oldPassword || !newPassword || !confirmPassword)
      throw new Error("Please provide all the details");

    // Getting the token
    const token = getToken();

    // Doing the request
    const res = await fetch(`${process.env.SERVER_URL}/api/update-password`, {
      method: "PATCH",
      body: JSON.stringify({ oldPassword, newPassword, confirmPassword }),
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

    return data;
  } catch (err) {
    return handleClientSideError(err);
  }
};

// Request for deleting the account
export const deleteMe = async (e: FormData) => {
  try {
    // Getting the password
    const password = e.get("password");
    if (!password) throw new Error("Please provide password");

    // Getting the token
    const token = getToken();

    // Doing the request
    const res = await fetch(`${process.env.SERVER_URL}/api/delete-me`, {
      method: "DELETE",
      body: JSON.stringify({ password }),
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

    return data;
  } catch (err) {
    return handleClientSideError(err);
  }
};
