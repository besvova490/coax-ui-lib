import React from "react";


type Props = {
  fill?: string,
  height?: number,
  width?: number,
  className?: string,
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};


function CloseIcon({ width = 16, height = 16, className = "", onClick }: Props): JSX.Element {
  return (
    <span role="img" className={`icon-component ${className}`} onClick={e => {
      e.stopPropagation();
      onClick && onClick(e);
    }}>
      <svg style={{ width: `${width}px`, height: `${height}px` }} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23743 12.8232 4.53033 12.5303L3.46967 11.4697ZM12.5303 4.53033C12.8232 4.23743 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM4.53033 3.46967C4.23744 3.17678 3.76256 3.17678 3.46967 3.46967C3.17678 3.76256 3.17678 4.23744 3.46967 4.53033L4.53033 3.46967ZM11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303C12.8232 12.2374 12.8232 11.7626 12.5303 11.4697L11.4697 12.5303ZM4.53033 12.5303L8.53034 8.53035L7.46969 7.46969L3.46967 11.4697L4.53033 12.5303ZM11.4697 3.46967L7.46968 7.46969L8.53035 8.53035L12.5303 4.53033L11.4697 3.46967ZM8.53034 7.46969L4.53033 3.46967L3.46967 4.53033L7.46968 8.53035L8.53034 7.46969ZM7.46968 8.53035L11.4697 12.5303L12.5303 11.4697L8.53034 7.46969L7.46968 8.53035Z"/>
      </svg>
    </span>
  );
}


export default CloseIcon;
