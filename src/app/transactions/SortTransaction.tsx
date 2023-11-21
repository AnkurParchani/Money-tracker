"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";
import TransactionCard from "./TransactionCard";
import Select from "@/components/Select";

type GroupedDataType = { date: string | undefined; entries: Transaction[] };

const SortTransaction = ({ transactions }: { transactions: Transaction[] }) => {
  const [sortBy, setSortBy] = useState<string>("default");
  const [sortedArr, setSortedArr] = useState<GroupedDataType[]>([]);

  // Memoizing the whole data
  const groupedTransactionsByDate: GroupedDataType[] = useMemo(() => {
    return transactions.reduce((acc: GroupedDataType[], cur: Transaction) => {
      const { date, particulars, amount, type, user, _id } = cur;

      // Check if there is an existing entry for the current date
      const existingEntry = acc.find(
        (groupedEntry) => groupedEntry.date === date
      );

      if (existingEntry) {
        existingEntry.entries.push({ particulars, amount, type, user, _id });
      } else {
        acc.push({
          date,
          entries: [{ particulars, amount, type, user, _id }],
        });
      }

      return acc;
    }, []);
  }, [transactions]);

  // Changning the array according to the sorting
  useEffect(() => {
    let sortedArray: GroupedDataType[] = [...groupedTransactionsByDate];

    if (sortBy === "recent") {
      sortedArray = sortedArray.sort((a, b) => {
        const dateA = a.date ? new Date(a.date) : null;
        const dateB = b.date ? new Date(b.date) : null;

        if (dateA === null || dateB === null) return 0;

        return dateB.getTime() - dateA.getTime();
      });
    } else if (sortBy === "old") {
      sortedArray = sortedArray.sort((a, b) => {
        const dateA = a.date ? new Date(a.date) : null;
        const dateB = b.date ? new Date(b.date) : null;

        if (dateA === null || dateB === null) return 0;

        return dateA.getTime() - dateB.getTime();
      });
    }

    setSortedArr(sortedArray);
  }, [sortBy, groupedTransactionsByDate]);

  // Function for when the sorting is changed
  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const curSelected = e.target.value.toLowerCase();
    setSortBy(curSelected);
  }

  return (
    <>
      <Select
        onChange={handleChange}
        noBorder
        options={["Recent", "Old", "Custom"]}
        name="transactionType"
        selectClassname="capitalize absolute right-4 top-0 text-black bg-blue-100 focus:outline-none text-xs outline-none px-1.5 py-1 rounded-md"
      />

      {sortedArr.map((transaction: GroupedDataType) => {
        return (
          <div key={transaction.date}>
            <h1 className="text-right text-xs text-gray-800 font-bold mt-3 mb-1.5">
              {transaction.date}
            </h1>
            <div className="flex flex-col gap-1.5">
              {transaction.entries.map((transaction: Transaction) => {
                return (
                  <TransactionCard
                    showMenu
                    key={transaction._id}
                    transaction={transaction}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SortTransaction;
