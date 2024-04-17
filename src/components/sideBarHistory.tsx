import ButtonShape from "./buttonShape";
import { useContext } from "react";
import { globalContext } from "../context/GlobalState";
import Message from "./Message";
import Typewriter from "react-ts-typewriter";

const sideBarHistory = () => {
  const { globalState } = useContext(globalContext);

  return (
    <div className="h-4/5">
      <ButtonShape>History</ButtonShape>
      <ul>
        {
              globalState.map((e, index) => (
            <Message index={index + 200} height="min-h-12">
              <>
                <Typewriter
                  cursor={false}
                  text={e.Messages.substring(0, 10) + "..."}
                />
              </>
            </Message>
          ))}
      </ul>
    </div>
  );
};
export default sideBarHistory;
