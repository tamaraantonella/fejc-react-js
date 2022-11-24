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
  onChange
}) => {
  return (
    <>
      <span>Accordion!</span>
      {children}
    </>
  );
};
