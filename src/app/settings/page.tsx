import ReturnToLogin from "@/components/ReturnToLogin";
import getUser from "../../../utils/getUser";
import UserActionButtons from "../user-account-actions/UserActionButtons";

const page = async () => {
  const user = await getUser();
  if (!user) return <ReturnToLogin />;

  const filterUser = { name: user.name, email: user.email, img: user.img };

  return (
    <div className="px-2 py-4 max-w-md mx-auto">
      <h1 className="mb-2 font-semibold text-gray-800 ">Settings:-</h1>

      <UserActionButtons user={filterUser} />
    </div>
  );
};

export default page;
