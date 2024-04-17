import { useContext } from "react";
import { globalContext } from "../context/GlobalState";
import ButtonShape from "./buttonShape";

const sideBarClear = () => {
  const { clearHistory } = useContext(globalContext);

  const clearHistoryFunction = () => {
    clearHistory();
  };

  return (
    <ButtonShape
      styling="bg-red-400 text-center w-full"
      isButton={true}
      handleClick={clearHistoryFunction}
    >
      Clear
    </ButtonShape>
  );
};
export default sideBarClear;
