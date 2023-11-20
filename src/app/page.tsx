import AddTransactionBtn from "./transactions/AddTransactionBtn";
import getTransactions from "../../utils/getTransactions";
import TransactionCard from "./transactions/TransactionCard";
import getUser from "../../utils/getUser";
import ReturnToLogin from "../components/ReturnToLogin";
import Greeting from "@/components/Greeting";
import TransactionsSummary from "./transactions/TransactionsSummary";

export default async function Home() {
  const user = await getUser();
  const transactions: Transaction[] = await getTransactions();
  if (!user || !transactions) return <ReturnToLogin />;

  const currentBalance =
    transactions
      .filter((transaction) => transaction.type === "deposit")
      .reduce((cur, acc) => cur + acc.amount, 0) -
    transactions
      .filter((transaction) => transaction.type === "withdraw")
      .reduce((cur, acc) => cur + acc.amount, 0);

  return (
    <main>
      <TransactionsSummary currentBalance={currentBalance} />
      <div className="px-2 py-4 max-w-md mx-auto z-40 mt-5">
        <AddTransactionBtn currentBalance={currentBalance} />
        <Greeting name={user.name} />

        <div>
          {transactions.map((transaction) => (
            <TransactionCard key={transaction._id} transaction={transaction} />
          ))}
        </div>
      </div>
    </main>
  );
}
