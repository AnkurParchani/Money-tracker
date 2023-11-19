import Link from "next/link";
import UserActionButtons from "./user-account-actions/UserActionButtons";
import getUser from "../../utils/getUser";

export default async function Home() {
  const user = await getUser();
  if (!user) return <p>Login first</p>;

  const filterUser = { name: user.name, email: user.email, img: user.img };

  return (
    <main>
      <Link href="/login">Login</Link>
      <h1>This is the checking line</h1>
      <UserActionButtons user={filterUser} />
    </main>
  );
}
