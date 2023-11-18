import { NextResponse } from "next/server";
import catchAsync from "../../../../utils/errors/catchAsync";
import getUser from "../../../../utils/getUser";
import AppError from "../../../../utils/errors/AppError";
import User from "../../../../models/userModel";

// UPDATE the logged in user (not for password)
export const PATCH = catchAsync(async (req: Request) => {
  const { name, email, password, img } = await req.json();
  if (password)
    return NextResponse.json(
      new AppError(400, "This route is not for updating password")
    );

  const user = await getUser();
  if (!user) return NextResponse.json(new AppError(401, "Please login first"));

  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    { name, email, img },
    { new: true }
  );

  return NextResponse.json({ status: "success", updatedUser });
});
