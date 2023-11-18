import { NextRequest, NextResponse } from "next/server";

import Transaction from "../../../../models/transactionModel";
import connectDB from "../../../../lib/dbConnect";
import catchAsync from "../../../../utils/errors/catchAsync";
import handleServerSideError from "../../../../utils/errors/handleServerSideError";
import getUser from "../../../../utils/getUser";
import AppError from "../../../../utils/errors/AppError";

// GET all transaction of a particular user
export const GET = async (req: NextRequest) => {
  try {
    connectDB();
    const user = await getUser();
    if (!user)
      return NextResponse.json(new AppError(401, "please login first"));

    const transactions = await Transaction.find().where({ user: user._id });

    return NextResponse.json({ status: "success", transactions });
  } catch (err) {
    return handleServerSideError(err);
  }
};

// UPDATE a new Transaction
export const PATCH = catchAsync(async (req: Request) => {
  connectDB();
  const { particulars, amount, type, date, img, transactionId } =
    await req.json();

  const transaction = { particulars, amount, type, date, img };

  const newTransaction = await Transaction.findByIdAndUpdate(
    transactionId,
    transaction,
    { new: true, runValidators: true }
  );

  return NextResponse.json({ status: "success", newTransaction });
});

// POST a new Transaction
export const POST = catchAsync(async (req: Request) => {
  connectDB();
  const { particulars, amount, type } = await req.json();

  const user = await getUser();
  if (!user) return NextResponse.json(new AppError(401, "please login first"));

  const transaction = await Transaction.create({
    particulars,
    amount,
    type,
    user: user._id,
  });

  return NextResponse.json({ status: "success", transaction });
});

// DELETE a new Transaction
export const DELETE = catchAsync(async (req: Request) => {
  connectDB();
  const { transactionId } = await req.json();

  const user = await getUser();
  if (!user) return NextResponse.json(new AppError(401, "please login first"));

  const transaction = await Transaction.findOneAndDelete(transactionId).where({
    user: user._id,
  });

  if (!transaction)
    return NextResponse.json(new AppError(404, "No transaction found"));

  return NextResponse.json({ status: "success", message: "deleted" });
});
