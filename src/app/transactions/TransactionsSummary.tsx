import ShowBalance from "./ShowBalance";

const TransactionsSummary = ({
  currentBalance,
}: {
  currentBalance: number;
}) => {
  return (
    <>
      <div
        className={`py-1 text-right px-2 fixed top-9 inset-x-0 bg-white flex z-20 ${
          currentBalance === 0 ? "justify-center " : "justify-end "
        }`}
      >
        {/* If the balance is 0 */}
        {currentBalance === 0 && (
          <h1 className="text-sm text-center font-medium text-gray-800">
            Your Balance is Empty
          </h1>
        )}

        {/* If the balance is less than 0 */}
        {currentBalance !== 0 && (
          <ShowBalance currentBalance={currentBalance} />
        )}
      </div>
    </>
  );
};

export default TransactionsSummary;
