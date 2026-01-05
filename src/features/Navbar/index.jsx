import NavItem from "./components/NavItem";
import ProfileMenu from "./components/ProfileMenu";
import { navbarItems } from "../../constants/navbarItems";

const Navbar = () => {
  return (
    <nav>
      {navbarItems.map((navItem) => (
        <NavItem config={navItem} />
      ))}
      <ProfileMenu />
    </nav>
  );
};

export default Navbar;
