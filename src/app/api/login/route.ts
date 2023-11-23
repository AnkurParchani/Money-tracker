import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import User from "../../../../models/userModel";
import connectDB from "../../../../lib/dbConnect";
import catchAsync from "../../../../utils/errors/catchAsync";
import AppError from "../../../../utils/errors/AppError";

export const POST = catchAsync(async (req: Request) => {
  await connectDB();
  // Getting and checking email and password
  const { email, password } = await req.json();
  if (!email || !password)
    return NextResponse.json(
      new AppError(400, "Please provide both email and password")
    );

  // Getting the user
  const user = await User.findOne({ email }).select("+password");

  if (!user)
    return NextResponse.json(new AppError(401, "Invalid username or password"));

  // Checking credentials
  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword)
    return NextResponse.json(new AppError(401, "Invalid username or password"));

  // Generating and assigning token
  const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "10h",
    }
  );
  cookies().set("token", token);

  return NextResponse.json({ status: "success", token });
});
