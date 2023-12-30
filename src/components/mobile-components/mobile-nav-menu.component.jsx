import { NAV_ITEMS } from "../../DATA";
const MobileNavigationMenu = () => {
  return (
    <div className="size-30 z-3 mt-14 p-2 top-0 right-0 absolute flex flex-col justify-items-center text-pink-light bg-black">
      {NAV_ITEMS.map((item) => (
        <a key={item.id} href={item.link}>
          <p className="p-1 hover:text-pink sm:text-xm md:text-md lg:text-lg xl:text-xl">
            {item.name}
          </p>
        </a>
      ))}
    </div>
  );
};

export default MobileNavigationMenu;
