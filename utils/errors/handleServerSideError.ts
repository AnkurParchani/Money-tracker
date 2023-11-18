import { NextResponse } from "next/server";
import AppError from "./AppError";

export default function handleServerSideError(err: unknown) {
  console.log("Error from server side", err);

  if (err !== null && err !== undefined) {
    // If duplicate email error is there
    if (typeof err === "object" && "code" in err && err.code === 11000) {
      return NextResponse.json(new AppError(400, "Email already exists"));
    }

    // If normal isOperational error
    if ((err as Error).message) {
      return NextResponse.json(
        new AppError(400, (err as Error).message, false)
      );
    }
  }

  // when don't know what the error is about
  return NextResponse.json({
    status: "fail",
    message: "Something went wrong, please try again later",
    statusCode: 500,
  });
}
