import React from "react";


type Props = {
  className?: string,
  onClick?: () => void;
};


function SquareIcon({ className = "", onClick }: Props): JSX.Element {
  return (
    <span role="img" className={`icon-component ${className}`} onClick={() => onClick && onClick()}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect width="10" height="10" rx="2"/>
      </svg>
    </span>
  );
}

export default SquareIcon;
