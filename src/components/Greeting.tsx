"use client";

import { useEffect, useState } from "react";

const Greeting = ({ name }: { name: string }) => {
  const [greet, setGreet] = useState<string>("");
  const firstName = name.split(" ")[0];

  const hour = new Date().getHours();

  useEffect(() => {
    if (hour >= 0 && hour < 12) setGreet("Good Morning");
    if (hour >= 12 && hour < 16) setGreet("Good Afternoon");
    if (hour >= 16 && hour <= 24) setGreet("Good Evening");
  }, [hour]);

  return (
    <div className="text-base px-2 text-gray-800 font-medium">
      {greet},{" "}
      <span className="font-medium text-gray-600 capitalize">{firstName}</span>
    </div>
  );
};

export default Greeting;
