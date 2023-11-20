const ShowBalance = ({ currentBalance }: { currentBalance: number }) => {
  return (
    <h1
      className={`text-sm ${
        currentBalance > 0 ? "text-green-500" : "text-red-500"
      }`}
    >
      Balance:{" "}
      <span className="font-semibold">₹{Math.abs(currentBalance)}</span>
    </h1>
  );
};

export default ShowBalance;
