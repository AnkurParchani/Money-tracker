import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import getUser from "../../utils/getUser";

const Nav = async () => {
  const user = await getUser();

  return (
    <nav className="text-center py-1 text-lg text-gray-400 font-semibold border-b sticky inset-x-0 bg-blue-300 top-0 z-20">
      <Link href="/">
        <span className="text-white">M</span>
        <span className="text-blue-500">T</span>
      </Link>

      {user && (
        <Link href="/settings" className="absolute right-1.5 top-0.5">
          <AccountCircleIcon style={{ fontSize: "30px", color: "#1f5ede" }} />
        </Link>
      )}
    </nav>
  );
};

export default Nav;
