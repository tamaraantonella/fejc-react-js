import { To } from '@remix-run/router/history';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

/**
 *
 * @param {React.ReactNode} icon
 * @param {string} label
 * @param {To} to
 * @returns {JSX.Element}
 * @constructor
 */
export const IconLink = ({
  icon,
  label,
  to
}) => {
  return (
    <><Link to={to}>{label}</Link></>
  );
};
