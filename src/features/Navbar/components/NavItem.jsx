const NavItem = ({ item }) => {
  const hasDropdown = item?.dropDown?.length > 0;

  return (
    <li className={`relative ${hasDropdown ? "dropdown dropdown-hover" : ""}`}>
      <div
        tabIndex={0}
        role="button"
        className="cursor-pointer px-2 py-1"
      >
        {item.name}
      </div>

      {hasDropdown && (
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow top-full left-0 mt-0"
        >
          {item.dropDown.map((child, index) => (
            <NavItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
