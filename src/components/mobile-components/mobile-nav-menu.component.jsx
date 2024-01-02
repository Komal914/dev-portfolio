import { NAV_ITEMS } from "../../DATA";
const MobileNavMenu = () => {
  return (
    <div className="size-30 z-3 mt-10 mr-5 p-1 top-0 right-0 absolute text-center uppercase rounded-md text-pink-light bg-purple">
      {NAV_ITEMS.map((item) => (
        <a key={item.id} href={`#${item.id}`}>
          <p className="p-1 hover:text-pink text-sm">{item.name}</p>
        </a>
      ))}
    </div>
  );
};

export default MobileNavMenu;
