import React from "react";
import PropTypes from "prop-types";


type Props = {
  fill?: string,
  height?: number,
  width?: number,
  className?: string,
  onClick?: () => void;
};


function DecIcon({ width = 16, height = 16, fill = "#D2D4D9", className = "", onClick }: Props) {
  return (
    <span role="img" className={`icon-component ${className}`} onClick={() => onClick && onClick()}>
      <svg style={{ width: `${width}px`, height: `${height}px` }} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.4393 8.56066C11.7206 8.84196 12.1022 9 12.5 9C12.8978 9 13.2794 8.84196 13.5607 8.56066C13.842 8.27936 14 7.89782 14 7.5C14 7.10218 13.842 6.72064 13.5607 6.43934C13.2794 6.15804 12.8978 6 12.5 6C12.1022 6 11.7206 6.15804 11.4393 6.43934C11.158 6.72064 11 7.10218 11 7.5C11 7.89782 11.158 8.27936 11.4393 8.56066Z" fill={fill}/>
        <path d="M7.5 14C7.10218 14 6.72064 13.842 6.43934 13.5607C6.15804 13.2794 6 12.8978 6 12.5C6 12.1022 6.15804 11.7206 6.43934 11.4393C6.72064 11.158 7.10218 11 7.5 11C7.89782 11 8.27936 11.158 8.56066 11.4393C8.84196 11.7206 9 12.1022 9 12.5C9 12.8978 8.84196 13.2794 8.56066 13.5607C8.27936 13.842 7.89782 14 7.5 14Z" fill={fill}/>
        <path d="M12.5 14C12.1022 14 11.7206 13.842 11.4393 13.5607C11.158 13.2794 11 12.8978 11 12.5C11 12.1022 11.158 11.7206 11.4393 11.4393C11.7206 11.158 12.1022 11 12.5 11C12.8978 11 13.2794 11.158 13.5607 11.4393C13.842 11.7206 14 12.1022 14 12.5C14 12.8978 13.842 13.2794 13.5607 13.5607C13.2794 13.842 12.8978 14 12.5 14Z" fill={fill}/>
      </svg>
    </span>
  );
}


DecIcon.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default DecIcon;
