import { cookies } from "next/headers";
import { JWTPayload } from "jose";
import { verify } from "./jwt_sign_verify";

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

    const res = await fetch(`${process.env.SERVER_URL}/api/${userId}`, {
      next: { tags: ["user"] },
    });
    if (!res.ok) return undefined;

    const data = await res.json();
    // If any error found (operational)
    if (data.isOperational || data.status === "fail") return undefined;

    return data.user;
  } catch (err) {
    return undefined;
  }
};

export default getUser;
