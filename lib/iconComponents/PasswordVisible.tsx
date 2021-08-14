import React from "react";
import PropTypes from "prop-types";


type Props = {
  fill?: string,
  height?: number,
  width?: number,
  className?: string,
  onClick?: () => void;
};


function PasswordVisible({ width = 16, height = 16, fill = "#FFF", className = "", onClick }: Props) {
  return (
    <span role="img" className={`icon-component ${className}`} onClick={() => onClick && onClick()}>
      <svg style={{ width: `${width}px`, height: `${height}px` }} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.68091 6.43564C5.41278 10.188 10.5871 10.188 12.319 6.43564C12.4925 6.05955 12.9381 5.89539 13.3142 6.06897C13.6903 6.24255 13.8545 6.68814 13.6809 7.06423C11.4128 11.9785 4.58709 11.9785 2.31897 7.06423C2.14539 6.68814 2.30955 6.24255 2.68564 6.06897C3.06173 5.89539 3.50733 6.05955 3.68091 6.43564Z" fill={fill}/>
      </svg>
    </span>
  );
}


PasswordVisible.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default PasswordVisible;
