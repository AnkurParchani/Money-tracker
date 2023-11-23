import { cookies } from "next/headers";
import { JWTPayload } from "jose";
import { verify } from "./jwt_sign_verify";

import User from "../models/userModel";

// Getting the user according to the token for backend requests
export const getUser = async (
  withPassword?: string
): Promise<User | undefined> => {
  try {
    const token = cookies().get("token")?.value;
    if (!token) return undefined;

    const decode: JWTPayload = await verify(
      token as string,
      process.env.JWT_SECRET as string
    );

    const {
      // @ts-ignore
      payload: { userId },
    } = decode;

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
