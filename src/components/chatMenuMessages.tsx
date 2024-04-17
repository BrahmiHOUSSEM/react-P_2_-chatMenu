import { useContext } from "react";
import ButtonShape from "./buttonShape";
import { globalContext } from "../context/GlobalState";
import Message from "./Message";
import Typewriter from "react-ts-typewriter";
import { FaUser, FaRobot } from "react-icons/fa";

const chatMenuMessages = () => {
  const { globalState } = useContext(globalContext);

  return (
    <div className="h-4/5 no-scrollbar overflow-auto">
      <ButtonShape>Chat Messages</ButtonShape>
      <ul>
        {globalState.map((e, index) => (
          <>
            <Message index={index} height="min-h-16 bg-slate-800">
              <>
                <FaUser />
                <Typewriter cursor={false} delay={1000} text={e.Messages} />
              </>
            </Message>
            <Message index={index + 100} height="min-h-16">
              <>
                <FaRobot />
                <Typewriter cursor={false} delay={2000} text={e.Reponses} />
              </>
            </Message>
          </>
        ))}
      </ul>
    </div>
  );
};
export default chatMenuMessages;
