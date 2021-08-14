import React from "react";


type Props = {
  fill?: string,
  height?: number,
  width?: number,
  className?: string,
  onClick?: () => void;
};


function SearchIcon({ width = 16, height = 16, fill = "#9496A0", className = "", onClick }: Props) {
  return (
    <span role="img" className={`icon-component ${className}`} onClick={() => onClick && onClick()}>
      <svg style={{ width: `${width}px`, height: `${height}px` }} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.25 7.14286C1.25 3.88832 3.88832 1.25 7.14286 1.25C10.3974 1.25 13.0357 3.88832 13.0357 7.14286C13.0357 8.49946 12.5767 9.74986 11.8064 10.7457L14.5303 13.4697C14.8232 13.7626 14.8232 14.2374 14.5303 14.5303C14.2374 14.8232 13.7626 14.8232 13.4697 14.5303L10.7457 11.8064C9.74985 12.5766 8.49944 13.0357 7.14286 13.0357C3.88832 13.0357 1.25 10.3974 1.25 7.14286ZM7.14286 2.75C4.71675 2.75 2.75 4.71675 2.75 7.14286C2.75 9.56896 4.71675 11.5357 7.14286 11.5357C8.3582 11.5357 9.45715 11.0431 10.2532 10.2449L10.2532 10.2449C11.0466 9.44955 11.5357 8.35406 11.5357 7.14286C11.5357 4.71675 9.56896 2.75 7.14286 2.75Z" fill={fill}/>
      </svg>
    </span>
  );
}


export default SearchIcon;
