const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col  max-w-md mx-auto px-6">
      <div className="bg-white px-4 py-6 shadow-2xl rounded-md mt-5">
        {children}
      </div>
    </div>
  );
};

export const AuthHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-black font-semibold text-2xl pb-0.5">{children}</h1>
  );
};

export const AuthSubHeading = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-sm text-gray-800">{children}</p>;
};

export default AuthContainer;
