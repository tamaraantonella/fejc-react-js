export const PhoneScreen = ({
  className,
  children
}) => {
  return (
    <div
      className={`${className} w-[360px] h-[640px] shadow-xl rounded-md bg-gray-200`}
    >
      {children}
    </div>
  );
};
