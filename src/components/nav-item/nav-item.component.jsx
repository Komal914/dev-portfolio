const NavItem = ({ value, id }) => {
  return (
    <button className="p-2" id={id}>
      {value}
    </button>
  );
};

export default NavItem;
