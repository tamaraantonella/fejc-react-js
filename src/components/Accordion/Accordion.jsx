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
import { motion } from "framer-motion";

export const Accordion = ({
  title,
  icon,
  expanded,
  subtitle,
  children,
  className,
  onChange,
}) => {
  const button_variants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  const container_variants = {
    open: { width: "340px", height: "auto" },
    closed: { width: "308px", height: "auto" },
  };
  return (
    <motion.div
      className={`h-auto px-4 py-5 flex flex-col  bg-accordion_bg rounded-[10px] ${
        expanded ? "shadow-accordion w-[340px]" : " w-[308px]"
      } ${className}`}
      animate={expanded ? "open" : "closed"}
      variants={container_variants}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      initial={{ height: "auto" }}
    >
      <div className="flex text-text">
        <div
          className={`flex flex-col justify-center items-center p-0 gap-[10px] relative w-[46px] h-[46px]   rounded-[23px] box-border ${
            icon !== undefined && "border border-black"
          }`}
        >
          <div className="w-[46px] h-[46px] flex grow rounded-full overflow-hidden">
            {icon}
          </div>
        </div>
        <div
          className={`flex flex-col justify-center ml-3 ${
            expanded ? "w-[203px] min-h-[45px]" : "w-[170px] h-[46px]"
          }`}
        >
          <p
            className={`w-full ${
              !expanded && "whitespace-nowrap text-ellipsis overflow-hidden"
            } font-semibold leading-[21.79px] font-sans`}
          >
            {title}
          </p>
          <p
            className={`text-sm w-full ${
              !expanded && "whitespace-nowrap text-ellipsis overflow-hidden"
            }`}
          >
            {subtitle}
          </p>
        </div>
        <motion.button
          className="px-2 "
          onClick={() => onChange(!expanded)}
          animate={expanded ? "open" : "close"}
          variants={button_variants}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
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
        </motion.button>
      </div>
      {expanded && children}
    </motion.div>
  );
};
