const Message = ({
  children,
  index,
  height,
}: {
  children: JSX.Element;
  index: number;
  height?: string;
}) => {
  return (
    <li
      key={index}
      className={`flex items-center gap-2 mt-2 mb-2 rounded-lg bg-slate-600 text-white p-2 ${height}`}
    >
      {children}
    </li>
  );
};
export default Message;
