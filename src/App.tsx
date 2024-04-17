import ContextProvider from "./context/GlobalState";
import ChatMenu from "./components/chatMenu";
import SideBar from "./components/sideBar";

const App = () => {
  return (
    <ContextProvider>
      <div className="flex gap-5 justify-center pt-5 text-white h-screen">
        <ChatMenu />
        <SideBar />
      </div>
    </ContextProvider>
  );
};
export default App;
