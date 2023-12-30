import { Fragment, useContext } from "react";
import DesktopNavigation from "../components/desktop-components/desktop-navigation.component";
import MobileNavigation from "../components/mobile-components/mobile-navigation.component";
import { MobileModeContext } from "../context/mobileModeContext";

const NavigationSection = () => {
  const { mobile } = useContext(MobileModeContext);

  return (
    <Fragment>
      {mobile ? (
        <MobileNavigation></MobileNavigation>
      ) : (
        <DesktopNavigation></DesktopNavigation>
      )}
    </Fragment>
  );
};

export default NavigationSection;
