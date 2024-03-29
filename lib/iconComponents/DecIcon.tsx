import React from "react";


type Props = {
  className?: string,
  onClick?: () => void;
};


function DecIcon({ className = "", onClick }: Props): JSX.Element {
  return (
    <span role="img" className={`icon-component ${className}`} onClick={() => onClick && onClick()}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.91675 8C1.91675 7.58579 2.25253 7.25 2.66675 7.25H13.3334C13.7476 7.25 14.0834 7.58579 14.0834 8C14.0834 8.41421 13.7476 8.75 13.3334 8.75H2.66675C2.25253 8.75 1.91675 8.41421 1.91675 8Z"/>
      </svg>
    </span>
  );
}


export default DecIcon;
