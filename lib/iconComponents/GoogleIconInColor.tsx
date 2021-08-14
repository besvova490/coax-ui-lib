import React from "react";


type Props = {
  className?: string,
  onClick?: () => void;
};


function GoogleIconInColor({ className = "", onClick }: Props): JSX.Element {
  
  
  return (
    <span role="img" className={`${className} icon-component`} onClick={() => onClick && onClick()}>
      <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M15.9998 8.18197C15.9998 7.61481 15.948 7.06922 15.8512 6.54565H8.16309V9.64031H12.5563C12.3669 10.6403 11.7919 11.4879 10.9274 12.055V14.0621H13.5657C15.1093 12.6694 15.9998 10.6182 15.9998 8.18197Z" fill="#3E82F1"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.16332 15.9996C10.3673 15.9996 12.2154 15.2833 13.5659 14.0613L10.9277 12.0542C10.1967 12.5342 9.26163 12.8178 8.16332 12.8178C6.03732 12.8178 4.23738 11.4107 3.59536 9.51953H0.868164V11.5922C2.21136 14.2069 4.97203 15.9996 8.16332 15.9996Z" fill="#32A753"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M3.59576 9.51999C3.4325 9.04002 3.33987 8.52724 3.33987 8.00008C3.33987 7.47292 3.4325 6.96014 3.59576 6.48016V4.40747H0.8681C0.315506 5.48741 0 6.70936 0 8.00008C0 9.29079 0.315506 10.5127 0.8681 11.5927L3.59576 9.51999Z" fill="#F9BB00"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.16332 3.18184C9.36206 3.18184 10.4379 3.58542 11.284 4.37818L13.6255 2.08348C12.2117 0.792765 10.3636 0 8.16332 0C4.97203 0 2.21136 1.79271 0.868164 4.40739L3.59536 6.48009C4.23738 4.58896 6.03732 3.18184 8.16332 3.18184Z" fill="#E74133"/>
      </svg>
    </span>
  );
}

export default GoogleIconInColor;
