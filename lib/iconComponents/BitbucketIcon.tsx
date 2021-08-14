import React from "react";


type Props = {
  className?: string,
  onClick?: () => void;
};


function BitbucketIcon({ className = "", onClick }: Props): JSX.Element {
  return (
    <span role="img" className={`${className} icon-component`} onClick={() => onClick && onClick()}>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M452.9 64.2c-.7-.1-1.5-.2-2.2-.2H61.5c-7.4-.1-13.4 5.9-13.5 13.5 0 .8 0 1.6.2 2.4l56.6 352.5c.7 4.3 2.9 8.2 6.1 11.1 3.2 2.9 7.4 4.5 11.7 4.5H394c6.6.1 12.3-4.8 13.3-11.5L441 224H316l-16 96h-88l-22.3-126.9h256.2l18-113.1c1.1-7.5-3.8-14.6-11-15.8z"/>
      </svg>
    </span>
  );
}


export default BitbucketIcon;
