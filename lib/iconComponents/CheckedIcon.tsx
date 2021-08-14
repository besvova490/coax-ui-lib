import React from "react";

type Props = {
  className?: string,
  onClick?: () => void;
};


function CheckedIcon({ className = "", onClick }: Props): JSX.Element {
  return (
    <span role="img" className={`icon-component ${className}`} onClick={() => onClick && onClick()}>
      <svg width="11" height="8" viewBox="0 0 11 8" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 4L3.5 6.5L9.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}


export default CheckedIcon;
