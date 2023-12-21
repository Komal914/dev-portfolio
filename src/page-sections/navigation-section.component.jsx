import NavItem from "../components/nav-item/nav-item.component";

const NavigationSection = () => {
  return (
    <div className="flex flex-row justify-end">
      <NavItem id={"home"} value={"Home"}></NavItem>
      <NavItem id={"about"} value={"About"}></NavItem>
      <NavItem id={"contact"} value={"Contact"}></NavItem>
    </div>
  );
};

export default NavigationSection;
