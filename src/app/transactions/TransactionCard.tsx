import EditMenuButton from "./EditMenuButton";

const TransactionCard = ({
  transaction,
  showMenu,
}: {
  transaction: Transaction;
  showMenu?: boolean;
}) => {
  const { particulars, amount, type } = transaction;

  return (
    <div
      key={transaction._id}
      className={`bg-white text-sm grid grid-cols-[1fr_auto_auto] items-center rounded-md px-2 ${
        showMenu ? "py-0.5" : "py-2"
      } border-l-8 shadow-xl ${
        type === "deposit" ? "border-green-500" : "border-red-500"
      }`}
    >
      <p className="capitalize">{particulars}</p>

      <p
        className={`${type === "deposit" ? "text-green-500" : "text-red-500"}`}
      >
        ₹{amount}
      </p>

      {showMenu && <EditMenuButton transaction={transaction} />}
    </div>
  );
};

export default TransactionCard;
