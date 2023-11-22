const Greeting = ({ name }: { name: string }) => {
  const firstName = name.split(" ")[0];
  const hour = new Date().getHours();

  let greet;
  if (hour > 0 && hour <= 12) greet = "Good Morning";
  if (hour > 12 && hour <= 16) greet = "Good Afternoon";
  if (hour > 16 && hour <= 24) greet = "Good Evening";

  return (
    <div className="text-base px-2 text-gray-800 font-medium">
      {greet},{" "}
      <span className="font-medium text-blue-600 capitalize">{firstName}</span>
    </div>
  );
};

export default Greeting;
