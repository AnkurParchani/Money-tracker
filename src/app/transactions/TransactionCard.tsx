import TransactionActionButtons from "./TransactionActionButtons";

const TransactionCard = ({ transaction }: { transaction: Transaction }) => {
  const { particulars, amount, type } = transaction;

  return (
    <div key={transaction._id}>
      <p>Description: {particulars}</p>
      <p>Amount: {amount}</p>
      <p>Type: {type}</p>
      <TransactionActionButtons transaction={transaction} />
    </div>
  );
};

export default TransactionCard;
