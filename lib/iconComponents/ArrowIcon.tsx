import React from "react";
import classNames from "classnames";


type Props = {
  className?: string,
  direction?: "top" | "bottom" | "left" | "right",
  onClick?: () => void;
};


function ArrowIcon({ className = "", onClick, direction = "top" }: Props) {

  const arrowIconClassName = classNames(
    "icon-component",
    className,
    {
      "icon-component__arrow_top": direction === "top",
      "icon-component__arrow_bottom": direction === "bottom",
      "icon-component__arrow_left": direction === "left",
      "icon-component__arrow_right": direction === "right",
    }
  );


  return (
    <span role="img" className={arrowIconClassName} onClick={() => onClick && onClick()}>
      <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.46967 5.46967C3.76256 5.17678 4.23744 5.17678 4.53033 5.46967L8 8.93934L11.4697 5.46967C11.7626 5.17678 12.2374 5.17678 12.5303 5.46967C12.8232 5.76256 12.8232 6.23744 12.5303 6.53033L8.53033 10.5303C8.23744 10.8232 7.76256 10.8232 7.46967 10.5303L3.46967 6.53033C3.17678 6.23744 3.17678 5.76256 3.46967 5.46967Z"/>
      </svg>
    </span>
  );
}


export default ArrowIcon;
