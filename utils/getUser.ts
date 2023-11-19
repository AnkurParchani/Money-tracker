import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import User from "../models/userModel";

type DecodedToken = {
  userId: string;
  iat: string;
  exp: string;
};

// Getting the user according to the token for backend requests
export const getUser = async (
  withPassword?: string
): Promise<User | undefined> => {
  try {
    const token = cookies().get("token")?.value;
    if (!token) return undefined;

    const decode = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as unknown as DecodedToken;

    const { userId } = decode;
    if (!userId) return undefined;

    let user;
    if (withPassword === "withPassword") {
      user = await User.findById(userId).select("+password");
    } else {
      user = await User.findById(userId);
    }
    return user;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export default getUser;
