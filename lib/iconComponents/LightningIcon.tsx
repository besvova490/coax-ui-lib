import React from "react";
import PropTypes from "prop-types";


type Props = {
  fill?: string,
  height?: number,
  width?: number,
  className?: string,
  onClick?: () => void;
};


function LightningIcon({ className = "", onClick }: Props) {
  return (
    <span role="img" className={`icon-component ${className}`} onClick={() => onClick && onClick()}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.6 21L10.8 14.5714L6 12.6429L14.4 3L13.2 9.42857L18 11.3571L9.6 21Z"/>
      </svg>
    </span>
  );
}


LightningIcon.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default LightningIcon;
