import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../lib/dbConnect";
import getUser from "../../../../utils/getUser";
import AppError from "../../../../utils/errors/AppError";
import Theme from "../../../../models/themes";
import handleServerSideError from "../../../../utils/errors/handleServerSideError";

export const GET = async (req: NextRequest) => {
  try {
    connectDB();
    const user = await getUser();
    if (!user)
      return NextResponse.json(new AppError(401, "please login first"));

    const theme = await Theme.find().where({ user: user._id });

    return NextResponse.json({ status: "success", theme });
  } catch (err) {
    return handleServerSideError(err);
  }
};

export const POST = async (req: NextRequest) => {
      connectDB();
      const { color } = await req.json();

      const user = await getUser();
      if (!user) return NextResponse.json(new AppError(401, "please login first"));

      const theme = new Theme({
        color,
        user: user._id,
      });

      await theme.save();

      return NextResponse.json({ status: "success", newTheme: theme});
  };