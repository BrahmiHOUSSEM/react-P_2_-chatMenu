import SideBarClear from "./sideBarClear";
import SideBarHistory from "./sideBarHistory";

const sideBar = () => {
  return (
    <div className="w-1/4 h-full">
      <SideBarHistory />
      <SideBarClear />
    </div>
  );
};
export default sideBar;
