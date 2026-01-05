import NavItem from "./components/NavItem";
import { navbarItems } from "../../constants/navbarItems";
import useGetUser from "../../hooks/useGetUser";
import LoggedInProfileIcon from "./components/LoggedInProfileIcon";
import LoggedOutProfileIcon from "./components/LoggedOutProfileIcon";
const Navbar = () => {
  const user = useGetUser()
  console.log("user",user)
  return (
    <div className="flex items-center gap-4">
      <ul className="menu menu-horizontal gap-2">
        {navbarItems.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </ul>

      <>
      {
        user ? <LoggedInProfileIcon /> : <LoggedOutProfileIcon />
      }
      </>
    </div>
  );
};

export default Navbar;
