import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import catchAsync from "../../../../utils/errors/catchAsync";
import getUser from "../../../../utils/getUser";
import AppError from "../../../../utils/errors/AppError";
import User from "../../../../models/userModel";
import connectDB from "../../../../lib/dbConnect";

// UPDATE the logged in user (only for passwords)
export const PATCH = catchAsync(async (req: Request) => {
  await connectDB();
  const { oldPassword, newPassword, confirmPassword } = await req.json();

  if (newPassword !== confirmPassword)
    return NextResponse.json(
      new AppError(400, "Password and password confirm do not match")
    );

  // Getting the current logged in user
  const user = await getUser("withPassword");
  if (!user) return NextResponse.json(new AppError(401, "please login first"));

  // Checking credentials
  const checkPassword = await bcrypt.compare(oldPassword, user.password);
  if (!checkPassword)
    return NextResponse.json(
      new AppError(401, "Your current password is wrong")
    );

  // Encrypting new Password
  const encryptedNewPassword = await bcrypt.hash(newPassword, 6);

  // Updating user's password
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      password: encryptedNewPassword,
    },
    { new: true }
  );

  return NextResponse.json({ status: "success", updatedUser });
});
