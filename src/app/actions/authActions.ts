"use server";

import { cookies } from "next/headers";
import handleClientSideError from "../../../utils/errors/handleClientSideError";
import connectDB from "../../../lib/dbConnect";

// Function for signup
export const signup = async (e: FormData, imgPath?: string) => {
  try {
    await connectDB();
    let userDetails;

    // Getting details
    const name = e.get("name");
    const email = e.get("email");
    const password = e.get("password");
    const passwordConfirm = e.get("passwordConfirm");

    if (!email || !password || !name || !passwordConfirm)
      throw new Error("Please provide all the details");

    // If image is present OR not
    if (imgPath)
      userDetails = { email, password, name, passwordConfirm, img: imgPath };
    else userDetails = { email, password, name, passwordConfirm };

    // Sending the request
    const res = await fetch(`${process.env.SERVER_URL}/api/signup`, {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    const data = await res.json();

    // If any error found (operational)
    if (data.isOperational || data.status === "fail")
      throw new Error(data.message);

    // Setting the cookie
    cookies().set("token", data.token);

    // Returning back to the preious page
    console.log("Got the data and resturning it", data);
    return data;
  } catch (err) {
    return handleClientSideError(err);
  }
};

// Function for Login
export const login = async (e: FormData) => {
  try {
    // Getting details
    const email = e.get("email");
    const password = e.get("password");

    if (!email || !password) throw new Error("Please provide all the details");

    // Sending the request
    const res = await fetch(`${process.env.SERVER_URL}/api/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    const data = await res.json();

    // If any error found (operational)
    if (data.isOperational || data.status === "fail")
      throw new Error(data.message);

    // Setting the cookie
    cookies().set("token", data.token);

    // Returning back to the preious page
    return data;
  } catch (err) {
    return handleClientSideError(err);
  }
};

// To logout
export const signout = () => {
  const cookieStore = cookies();

  cookieStore.delete("token");
  return true;
};
