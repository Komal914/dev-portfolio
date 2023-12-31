import { Fragment } from "react";
import { ReactComponent as KKLogo } from "../../assets/kklogo.svg";
import { NAV_ITEMS } from "../../DATA";

const DesktopNavigation = () => {
  return (
    <nav className="flex justify-between w-full items-center uppercase fixed top-0 z-2 absolute">
      <div className="p-2 align-middle">
        <KKLogo className="xl:size-20 lg:size-18 md:size-15 sm:size-14"></KKLogo>
      </div>
      <div className="flex align-center text-pink-light p-2">
        {NAV_ITEMS.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            <p className="p-4 hover:text-pink sm:text-sm md:text-md lg:text-lg xl:text-xl">
              {item.name}
            </p>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default DesktopNavigation;
