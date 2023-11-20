import Link from "next/link";

const Nav = () => {
  return (
    <nav className="text-center py-1 text-lg font-semibold border-b">
      <Link href="/">
        <span className="text-white">M</span>
        <span className="text-blue-500">T</span>
      </Link>
    </nav>
  );
};

export default Nav;
