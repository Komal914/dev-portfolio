import { Fragment, useState } from "react";
import { ReactComponent as MenuLogo } from "../../assets/menu.svg";
import { ReactComponent as Kklogo } from "../../assets/kklogo.svg";
import MobileNavigationMenu from "./mobile-nav-menu.component";

const MobileNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  console.log("showMenuValue: ", showMenu);

  return (
    <Fragment>
      <nav className="flex justify-between w-full align-middle top-0 z-2 bg-black">
        <Kklogo className="m-2 h-9 w-9 z-1"></Kklogo>
        <MenuLogo className="m-4 h-6 w-6 z-1" onClick={handleMenu}></MenuLogo>
      </nav>
      {showMenu ? (
        <MobileNavigationMenu></MobileNavigationMenu>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};

export default MobileNavigation;
