import React from "react";
import PropTypes from "prop-types";


type Props = {
  fill?: string,
  height?: number,
  width?: number,
  className?: string,
  onClick?: () => void;
};


function IncIcon({ className = "", onClick }: Props) {
  return (
    <span role="img" className={`icon-component ${className}`} onClick={() => onClick && onClick()}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 3.25C8.41421 3.25 8.75 3.58579 8.75 4V7.25H12C12.4142 7.25 12.75 7.58579 12.75 8C12.75 8.41421 12.4142 8.75 12 8.75H8.75V12C8.75 12.4142 8.41421 12.75 8 12.75C7.58579 12.75 7.25 12.4142 7.25 12V8.75H4C3.58579 8.75 3.25 8.41421 3.25 8C3.25 7.58579 3.58579 7.25 4 7.25H7.25V4C7.25 3.58579 7.58579 3.25 8 3.25Z"/>
      </svg>
    </span>
  );
}


IncIcon.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default IncIcon;
