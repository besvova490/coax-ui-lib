import React from "react";
import PropTypes from "prop-types";


type Props = {
  fill?: string,
  height?: number,
  width?: number,
  className?: string,
  onClick?: () => void;
};


function PasswordHidden({ width = 16, height = 16, fill = "#FFF", className = "", onClick }: Props) {
  return (
    <span role="img" className={`icon-component ${className}`} onClick={() => onClick && onClick()}>
      <svg style={{ width: `${width}px`, height: `${height}px` }} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.68091 8.64754C5.41278 4.89515 10.5871 4.89515 12.319 8.64754C12.4925 9.02363 12.9381 9.1878 13.3142 9.01422C13.6903 8.84064 13.8545 8.39505 13.6809 8.01896C11.4128 3.10468 4.58709 3.10468 2.31897 8.01896C2.14539 8.39505 2.30955 8.84064 2.68564 9.01422C3.06173 9.1878 3.50733 9.02363 3.68091 8.64754ZM5.99994 8.99992C5.99994 10.1045 6.89534 10.9999 7.99994 10.9999C9.10454 10.9999 9.99994 10.1045 9.99994 8.99992C9.99994 7.89532 9.10454 6.99992 7.99994 6.99992C6.89534 6.99992 5.99994 7.89532 5.99994 8.99992Z" fill={fill}/>
      </svg>
    </span>
  );
}


PasswordHidden.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default PasswordHidden;
