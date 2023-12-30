import { Fragment } from "react";
import { ReactComponent as MenuLogo } from "../../assets/menu.svg";

const MobileNavigation = () => {
  return (
    <nav className="flex justify-between w-full align-middle top-0 z-20 bg-pink">
      <h1>i am mobile navigation</h1>
      <MenuLogo className="m-4 h-6 w-6 z-1"></MenuLogo>
    </nav>
  );
};

export default MobileNavigation;
