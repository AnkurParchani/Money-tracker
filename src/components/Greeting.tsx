const Greeting = ({ name }: { name: string }) => {
  const firstName = name.split(" ")[0];
  const hour = new Date().getHours();

  let greet;
  if (hour > 0 && hour <= 12) greet = "Good Morning";
  if (hour > 12 && hour <= 16) greet = "Good Afternoon";
  else greet = "Good Evening";

  return (
    <div className="text-base text-gray-800">
      {greet}, <span className="font-medium text-blue-600">{firstName}</span>
    </div>
  );
};

export default Greeting;
