import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import catchAsync from "../../../../utils/errors/catchAsync";
import getUser from "../../../../utils/getUser";
import AppError from "../../../../utils/errors/AppError";
import User from "../../../../models/userModel";
import Transaction from "../../../../models/transactionModel";
import connectDB from "../../../../lib/dbConnect";

// Deleting the current logged in user
export const DELETE = catchAsync(async (req: Request) => {
  await connectDB();
  const { password } = await req.json();
  if (!password)
    return NextResponse.json(new AppError(400, "Please provide the password"));

  // Getting the logged in user
  const user = await getUser("withPassword");
  if (!user) return NextResponse.json(new AppError(401, "Please login first"));

  // Checking password
  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword)
    return NextResponse.json(new AppError(401, "Invalid password"));

  // Deleting user's transactions
  await Transaction.deleteMany().where({ user: user._id });

  // Deleting user's account
  await User.findByIdAndDelete(user._id);

  return NextResponse.json({ status: "success", message: "deleted" });
});
