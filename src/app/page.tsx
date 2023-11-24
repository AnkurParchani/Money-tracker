import AddTransactionBtn from "./transactions/AddTransactionBtn";
import getTransactions from "../../utils/getTransactions";
import getUser from "../../utils/getUser";
import ReturnToLogin from "../components/ReturnToLogin";
import Greeting from "@/components/Greeting";
import TransactionsSummary from "./transactions/TransactionsSummary";
import AddTransactionCard from "./transactions/AddTransactionCard";
import SortTransaction from "./transactions/SortTransaction";

export default async function Home() {
  const user = await getUser();
  console.log(user);
  // const transactions: Transaction[] = await getTransactions();

  // if (!user || !transactions) return <ReturnToLogin />;

  // Getting the total current balance
  // const currentBalance =
  //   transactions
  //     .filter((transaction) => transaction.type === "deposit")
  //     .reduce((cur, acc) => cur + acc.amount, 0) -
  //   transactions
  //     .filter((transaction) => transaction.type === "withdraw")
  //     .reduce((cur, acc) => cur + acc.amount, 0);

  return (
    <main>
      {/* <TransactionsSummary currentBalance={currentBalance} />
      <div className="px-2 py-4 max-w-md mx-auto z-40 mt-5">
        <AddTransactionBtn currentBalance={currentBalance} />
        <Greeting name={user.name} />

        <div className="flex gap-1.5 flex-col px-4 mt-3 relative">
          {transactions.length > 0 && (
            <h1 className="font-semibold text-gray-900 -mb-3">History:-</h1>
          )}

          {transactions.length > 0 && (
            <SortTransaction transactions={transactions} />
          )}

          {transactions.length === 0 && (
            <h1 className="font-semibold text-gray-900 mt-5">
              Add a Transaction:-
            </h1>
          )}
          <AddTransactionCard currentBalance={currentBalance} />
        </div> 
      </div> */}
      <h1>Main</h1>
    </main>
  );
}
