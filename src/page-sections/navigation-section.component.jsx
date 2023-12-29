import { useState, useContext, Fragment } from "react";
import { ReactComponent as KKLogo } from "../assets/kklogo.svg";
import { ReactComponent as MenuLogo } from "../assets/menu.svg";
import { MobileModeContext } from "../context/mobileModeContext";
import { NAV_ITEMS } from "../DATA";

const NavigationSection = () => {
  const isMobile = false;
  const openMobileMenu = () => {
    console.log("i am mobile");
  };

  return (
    <nav className="flex justify-between w-full align-middle fixed top-0 z-20">
      <div className="p-2 align-middle">
        {!isMobile ? (
          <KKLogo className="xl:size-20 lg:size-18 md:size-15 sm:size-14"></KKLogo>
        ) : (
          <Fragment></Fragment>
        )}
      </div>
      <div className="flex align-center text-pink-light p-2">
        {!isMobile ? (
          NAV_ITEMS.map((item) => (
            <a key={item.id} href={item.link}>
              <p className="p-4 hover:text-pink sm:text-xm md:text-md lg:text-lg xl:text-xl">
                {item.name}
              </p>
            </a>
          ))
        ) : (
          <MenuLogo
            onClick={openMobileMenu}
            className="m-4 h-6 w-6 z-1"
          ></MenuLogo>
        )}
      </div>
    </nav>
  );
};

export default NavigationSection;
