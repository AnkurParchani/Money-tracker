"use client"; // Ensure this is a client component

import { useEffect, useState } from "react";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import getUser from "../../utils/getUser";
import Image from "next/image";
import { useAppColor } from "@/contexts/AppColorContext";

const Nav = () => {
  const { appColor } = useAppColor();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchUser = async () => {
      const userData = await getUser();
      setUser(userData);
    };
    fetchUser();
  }, []);

  return (
    <nav
      style={{
        borderBottom: "1px solid gray",
      }}
      className={`text-center py-1 text-lg text-gray-400 font-semibold sticky inset-x-0 top-0 z-50 bg-${appColor}-300`}
    >
      <Link href="/">
        <span className="text-white">M</span>
        <span style={{ color: appColor }}>T</span>
      </Link>

      {user && (
        <Link href="/settings" className="absolute right-1.5 top-1">
          {user.img ? (
            <Image
              src={user.img}
              alt="user-img"
              height={100}
              width={100}
              className="rounded-full h-7 w-auto"
            />
          ) : (
            <AccountCircleIcon style={{ fontSize: "30px", color: appColor }} />
          )}
        </Link>
      )}
    </nav>
  );
};

export default Nav;