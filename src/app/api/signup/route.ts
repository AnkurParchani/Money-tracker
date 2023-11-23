import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import AppError from "../../../../utils/errors/AppError";
import User from "../../../../models/userModel";
import catchAsync from "../../../../utils/errors/catchAsync";
import connectDB from "../../../../lib/dbConnect";
import mongoose from "mongoose";

export const POST = catchAsync(async (req: Request) => {
  await connectDB();
  const { name, email, password, passwordConfirm, img } = await req.json();
  // Checking if password and passwordConfirm matches
  if (password !== passwordConfirm)
    return NextResponse.json(
      new AppError(400, "Password and Password Confirm do not match")
    );
  // Creating the user
  const user = await User.create({ name, email, password, img });
  mongoose.connection.close();

  // Generating the token and setting the cookie
  const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "10h",
    }
  );

  cookies().set("token", token);

  return NextResponse.json({ status: "success", user, token });
});
