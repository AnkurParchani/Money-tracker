import { cookies } from "next/headers";

const getTransactions = async () => {
  try {
    const token = cookies().get("token")?.value;
    if (!token) return undefined;

    // Sending the response
    const res = await fetch(`${process.env.SERVER_URL}/api/transactions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `token=${token}`,
      },
      next: { tags: ["transactions"] },
    });

    if (!res.ok)
      throw new Error("Something went wrong, please try again later");

    const data = await res.json();

    // If any error found (operational)
    if (data.isOperational || data.status === "fail")
      throw new Error(data.message);

    return data.transactions;
  } catch (err) {
    return undefined;
  }
};

export default getTransactions;
