import Link from "next/link";
import { useRouter } from "next/router";

const navData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Feed",
    href: "/feed",
  },
  {
    label: "Library",
    href: "/library",
  },
];

const NavList = () => {
  const { asPath } = useRouter();

  return (
    <nav className="float-left">
      <ul className="flex h-full items-center">
        {navData.map((el) => (
          <li className="flex item-center" key={el.label}>
            <Link
              style={{
                borderRight: "1px solid #111",
                width: "104px",
              }}
              className={`block text-gray-4 hover:text-gray-5 text-center h-nav-menu-item py-2 text-sm leading-6 ${
                el.href === asPath && "bg-black"
              }`}
              href={el.href}
            >
              {el.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
