import NavItem from "../../components/layout/NavItem";
import ProfileMenu from "../ProfileMenu";
import navbarItems from "../../constants/navbarItems";

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
