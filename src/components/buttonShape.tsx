type childrenProps = {
  children: string;
  styling?: string;
  isButton?: boolean;
  handleClick?: () => void;
};

const buttonShape = ({
  styling = "bg-lime-300",
  isButton = false,
  children,
  handleClick,
}: childrenProps) => {
  return (
    <>
      {isButton ? (
        <button
          onClick={handleClick}
          className={" p-2 rounded-lg text-black font-bold " + styling}
        >
          {children}
        </button>
      ) : (
        <div className={" p-2 rounded-lg text-black font-bold " + styling}>
          {children}
        </div>
      )}
    </>
  );
};
export default buttonShape;
