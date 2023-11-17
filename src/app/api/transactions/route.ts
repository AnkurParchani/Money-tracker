import { NextResponse } from "next/server";
import Transaction from "../../../../models/transactionModel";
import connectDatabase from "../../../../lib/dbConnect";

export const POST = async (req: Request) => {
  try {
    connectDatabase();
    const { particulars, amount, type } = await req.json();

    const transaction = await Transaction.create({ particulars, amount, type });

    return NextResponse.json({ status: "success", transaction });
  } catch (err) {
    console.log(err);
  }
};
