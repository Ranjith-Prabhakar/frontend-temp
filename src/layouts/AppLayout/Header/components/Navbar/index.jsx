import NavItem from "../../../../../components/layout/NavItem";
import ProfileMenu from "../../../../../features/ProfileMenu";
import { useHook } from "./hook";

const Navbar = () => {
  let [navItems] = useHook();
  return (
    <nav>
      {navItems.map((navItem) => (
        <NavItem config={navItem} />
      ))}
      <ProfileMenu />
    </nav>
  );
};

export default Navbar;
