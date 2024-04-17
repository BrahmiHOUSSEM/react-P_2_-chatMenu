import { useContext, useEffect, useState } from "react";
import ButtonShape from "./buttonShape";
import { globalContext } from "../context/GlobalState";

const chatMenuInput = () => {
  const [inputValue, setInpurValue] = useState("");
  const { hundleMessage } = useContext(globalContext);
  const [reponses, setReponses] = useState([]);

  useEffect(() => {
    const fetchReponses = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts/?_limit=10"
        );
        const data = await res.json();
        setReponses(data.map((e: { title: string }) => e.title));
      } catch (error) {
        console.log("ERROE fetchin data", error);
      }
    };
    fetchReponses();
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInpurValue(e.target.value);

  const handleClick = () => {
    if (inputValue) {
      hundleMessage(
        {
          Messages: inputValue,
          Reponses: reponses[Math.floor(Math.random() * 10)],
        },
        "AddMsg"
      );
      setInpurValue("");
    }
  };

  return (
    <div className="w-full flex">
      <input
        className="w-4/5 text-white rounded-bl-lg rounded-tl-lg bg-zinc-700 p-2"
        type="text"
        value={inputValue}
        onChange={onChange}
      />
      <ButtonShape
        styling="w-1/5 bg-lime-300 text-center rounded-none rounded-br-lg rounded-tr-lg"
        isButton={true}
        handleClick={handleClick}
      >
        Go
      </ButtonShape>
    </div>
  );
};
export default chatMenuInput;
