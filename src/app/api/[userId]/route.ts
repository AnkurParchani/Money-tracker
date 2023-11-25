import { NextResponse } from "next/server";
import connectDB from "../../../../lib/dbConnect";
import AppError from "../../../../utils/errors/AppError";
import User from "../../../../models/userModel";
import handleServerSideError from "../../../../utils/errors/handleServerSideError";

// Get particular user
export const GET = async (
  req: Request,
  { params: { userId } }: { params: { userId: string } }
) => {
  try {
    connectDB();

    const user = await User.findById(userId).select("+password");
    if (!user || !userId)
      return NextResponse.json(new AppError(401, "please login first"));

    return NextResponse.json({ status: "success", user });
  } catch (err) {
    return handleServerSideError(err);
  }
};
