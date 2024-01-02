import { Fragment, useState } from "react";
import { ReactComponent as MenuLogo } from "../../assets/menu.svg";
import { ReactComponent as Kklogo } from "../../assets/kklogo.svg";
import { ReactComponent as CloseLogo } from "../../assets/close.svg";
import MobileNavMenu from "./mobile-nav-menu.component";

const MobileNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  console.log("showMenuValue: ", showMenu);

  return (
    <Fragment>
      <nav className="flex justify-between w-full items-center top-0 absolute z-21">
        <Kklogo className="m-2 h-9 w-9 z-2"></Kklogo>
        {showMenu ? (
          <CloseLogo
            className="m-5 h-4 w-4 z-4 cursor-pointer"
            onClick={handleMenu}
          ></CloseLogo>
        ) : (
          <MenuLogo
            className="m-4 h-6 w-6 z-4 cursor-pointer"
            onClick={handleMenu}
          ></MenuLogo>
        )}
      </nav>
      {showMenu ? <MobileNavMenu></MobileNavMenu> : <Fragment></Fragment>}
    </Fragment>
  );
};

export default MobileNavigation;
