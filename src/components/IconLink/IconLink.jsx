import { ReactNode } from "react";
import { Link } from "react-router-dom";

/**
 *
 * @param {React.ReactNode} icon
 * @param {string} label
 * @param {To} to (react-router To)
 * @returns {JSX.Element}
 * @constructor
 */
export const IconLink = ({ icon, label, to }) => {
  return (
    <>
      <Link
        to={to}
        className=" w-[151px] h-[180px] bg-black p-[10px] flex flex-col items-center gap-[10px] rounded-md box-border"
      >
        <div className="w-[131px] h-[131px] flex grow self-stretch">{icon}</div>
        <p className="text-artwork_text w-full whitespace-nowrap text-ellipsis overflow-hidden text-center font-sans">
          {label}
        </p>
      </Link>
    </>
  );
};
