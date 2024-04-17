import ChatMenuMessages from "./chatMenuMessages";
import ChatMenuInput from "./chatMenuInput";

const chatMenu = () => {
  return (
    <div className="w-1/2 h-full">
      <ChatMenuMessages />
      <ChatMenuInput />
    </div>
  );
};
export default chatMenu;
