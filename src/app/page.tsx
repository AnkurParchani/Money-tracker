import Link from "next/link";

import UserActionButtons from "./user-account-actions/UserActionButtons";
import AddTransactionBtn from "./transactions/AddTransactionBtn";
import getTransactions from "../../utils/getTransactions";
import TransactionCard from "./transactions/TransactionCard";
import getUser from "../../utils/getUser";
import ReturnToLogin from "../components/ReturnToLogin";

export default async function Home() {
  const user = await getUser();
  const transactions: Transaction[] = await getTransactions();
  if (!user || !transactions) return <ReturnToLogin />;

  // Filtering the user data
  const filterUser = { name: user.name, email: user.email, img: user.img };

  return (
    <main>
      <Link href="/login">Login</Link>
      <AddTransactionBtn />

      <div>
        {transactions.map((transaction) => (
          <TransactionCard key={transaction._id} transaction={transaction} />
        ))}
      </div>
      <UserActionButtons user={filterUser} />
    </main>
  );
}
