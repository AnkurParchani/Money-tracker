import AddTransactionBtn from "./transactions/AddTransactionBtn";
import getTransactions from "../../utils/getTransactions";
import TransactionCard from "./transactions/TransactionCard";
import getUser from "../../utils/getUser";
import ReturnToLogin from "../components/ReturnToLogin";
import Greeting from "@/components/Greeting";

export default async function Home() {
  const user = await getUser();
  const transactions: Transaction[] = await getTransactions();
  if (!user || !transactions) return <ReturnToLogin />;

  return (
    <main>
      <div className="px-2 py-4 max-w-md mx-auto">
        <AddTransactionBtn />
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
