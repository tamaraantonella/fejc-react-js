export const PhoneScreen = ({
  className,
  children
}) => {
  return (
    <div
      className={`${className} w-[360px] h-[640px] border-gray-200 shadow-xl rounded-md bg-gray-200 overflow-hidden`}
    >
      {children}
    </div>
  );
};
