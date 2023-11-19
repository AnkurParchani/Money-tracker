import { cookies } from "next/headers";

export const getToken = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) throw new Error("please login first");
  return token;
};
