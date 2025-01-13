import { NavLink, Outlet, useNavigation } from "react-router";

const NavbarItems: { key: number; name: string; url: string }[] = [
  { key: 1, name: "Home", url: "/" },
  { key: 2, name: "About", url: "/about" },
  { key: 3, name: "Expenses", url: "/expenses" },
  { key: 4, name: "Create", url: "/create-expense" },
];

export default function Navbar() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <>
      <div className="p-2 flex gap-2">
        {NavbarItems.map((item) => (
          <NavLink
            key={item.key}
            to={item.url}
            className={({ isActive }) => (isActive ? "font-bold" : "text-gray-500")}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <hr />
      {isNavigating ? <p className="p-2">Loading...</p> : <Outlet />}
    </>
  );
}
