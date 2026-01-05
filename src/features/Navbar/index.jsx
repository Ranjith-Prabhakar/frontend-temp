import NavItem from "./components/NavItem";
import { navbarItems } from "../../constants/navbarItems";
import ProfileIcon from "./components/ProfileIcon";

const Navbar = () => {
  return (
    <div className="flex items-center gap-4">
      <ul className="menu menu-horizontal gap-2">
        {navbarItems.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </ul>
      <ProfileIcon />
    </div>
  );
};

export default Navbar;
