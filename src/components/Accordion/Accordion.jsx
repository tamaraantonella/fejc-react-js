/**
 * @callback AccordionOnChange
 * @param {boolean} newExpandedState
 */

/**
 *
 * @param {string} title
 * @param {React.ReactNode} [icon]
 * @param {boolean} [expanded]
 * @param {string} [subtitle]
 * @param {React.ReactNode} [children]
 * @param {string} [className]
 * @param {AccordionOnChange} [onChange]
 * @returns {JSX.Element}
 * @constructor
 */
export const Accordion = ({
  title,
  icon,
  expanded,
  subtitle,
  children,
  className,
  onChange,
}) => {
  return (
    <div
      className={`${
        expanded ? "shadow-accordion w-[340px]" : " w-[308px]"
      } ${className}`}
    >
      <div className="flex text-text">
        <div className="flex flex-col justify-center items-center p-0 gap-[10px] relative w-[46px] h-[46px] border border-black rounded-[23px] box-border">
          <div className="w-[46px] h-[46px] flex grow rounded-full overflow-hidden">
            {icon}
          </div>
        </div>
        <div
          className={`flex flex-col ml-3 ${
            expanded ? "w-[203px] h-[45px]" : "w-[170px] h-[46px]"
          }`}
        >
          <p className="font-semibold leading-[21.79px] font-sans">{title}</p>
          <p className="text-sm">{subtitle}</p>
        </div>
        <button className="px-2 " onClick={onChange}>
          {expanded ? (
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.15625 10.8789C0.15625 11.0612 0.221354 11.2174 0.351562 11.3477C0.481771 11.4779 0.638021 11.543 0.820312 11.543C1.0026 11.543 1.15885 11.4779 1.28906 11.3477L10.1172 2.51953L18.8086 11.2109C18.9388 11.3411 19.0951 11.4062 19.2773 11.4062C19.4596 11.4062 19.6159 11.3411 19.7461 11.2109C19.8763 11.0807 19.9414 10.9245 19.9414 10.7422C19.9414 10.5599 19.8763 10.4036 19.7461 10.2734L10.5859 1.11328C10.4557 0.983073 10.2995 0.917969 10.1172 0.917969C9.9349 0.917969 9.77865 0.983073 9.64844 1.11328L0.351562 10.3906C0.325521 10.4167 0.299479 10.4427 0.273438 10.4688C0.260417 10.5078 0.247396 10.5404 0.234375 10.5664C0.221354 10.6055 0.208333 10.638 0.195312 10.6641C0.182292 10.7031 0.169271 10.7357 0.15625 10.7617C0.15625 10.8008 0.15625 10.8398 0.15625 10.8789Z"
                fill="#D0D0D0"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.15625 1.62109C0.15625 1.4388 0.221354 1.28255 0.351562 1.15234C0.481771 1.02214 0.638021 0.957031 0.820312 0.957031C1.0026 0.957031 1.15885 1.02214 1.28906 1.15234L10.1172 9.98047L18.8086 1.28906C18.9388 1.15885 19.0951 1.09375 19.2773 1.09375C19.4596 1.09375 19.6159 1.15885 19.7461 1.28906C19.8763 1.41927 19.9414 1.57552 19.9414 1.75781C19.9414 1.9401 19.8763 2.09635 19.7461 2.22656L10.5859 11.3867C10.4557 11.5169 10.2995 11.582 10.1172 11.582C9.9349 11.582 9.77865 11.5169 9.64844 11.3867L0.351562 2.10938C0.325521 2.08333 0.299479 2.05729 0.273438 2.03125C0.260417 1.99219 0.247396 1.95964 0.234375 1.93359C0.221354 1.89453 0.208333 1.86198 0.195312 1.83594C0.182292 1.79688 0.169271 1.76432 0.15625 1.73828C0.15625 1.69922 0.15625 1.66016 0.15625 1.62109Z"
                fill="#CACACA"
              />
            </svg>
          )}
        </button>
      </div>
      {expanded && (
        <div className="w-full grid grid-cols-2 gap-[14px] py-4">{children}</div>
      )}
    </div>
  );
};
